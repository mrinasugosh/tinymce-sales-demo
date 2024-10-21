import React from 'react';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../styles/AIAssistant.css';


const AIAssistant = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const fetchApi = import(
    'https://unpkg.com/@microsoft/fetch-event-source@2.0.1/lib/esm/index.js'
).then((module) => module.fetchEventSource);

// This example stores the API key in the client side integration. This is not recommended for any purpose.
// Instead, an alternate method for retrieving the API key should be used.
const api_key = import.meta.env.VITE_OPENAI_API_KEY;

const ai_request = (request, respondWith) => {
    respondWith.stream((signal, streamMessage) => {
        // Adds each previous query and response as individual messages
        const conversation = request.thread.flatMap((event) => {
            if (event.response) {
                return [
                    { role: 'user', content: event.request.query },
                    { role: 'assistant', content: event.response.data },
                ];
            } else {
                return [];
            }
        });

        // System messages provided by the plugin to format the output as HTML content.
        const systemMessages = request.system.map((content) => ({
            role: 'system',
            content,
        }));

        // Forms the new query sent to the API
        const content =
            request.context.length === 0 || conversation.length > 0
                ? request.query
                : `Question: ${request.query} Context: """${request.context}"""`;

        const messages = [
            ...conversation,
            ...systemMessages,
            { role: 'user', content },
        ];

        let hasHead = false;
        let markdownHead = '';

        const hasMarkdown = (message) => {
            if (message.includes('`') && markdownHead !== '```') {
                const numBackticks = message.split('`').length - 1;
                markdownHead += '`'.repeat(numBackticks);
                if (hasHead && markdownHead === '```') {
                    markdownHead = '';
                    hasHead = false;
                }
                return true;
            } else if (message.includes('html') && markdownHead === '```') {
                markdownHead = '';
                hasHead = true;
                return true;
            }
            return false;
        };

        const requestBody = {
            model: 'gpt-4o',
            temperature: 0.7,
            max_tokens: 4000,
            messages,
            stream: true,
        };

        const openAiOptions = {
            signal,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`,
            },
            body: JSON.stringify(requestBody),
        };

        const onopen = async (response) => {
            if (response) {
                const contentType = response.headers.get('content-type');
                if (response.ok && contentType?.includes('text/event-stream')) {
                    return;
                } else if (contentType?.includes('application/json')) {
                    const data = await response.json();
                    if (data.error) {
                        throw new Error(
                            `${data.error.type}: ${data.error.message}`
                        );
                    }
                }
            } else {
                throw new Error('Failed to communicate with the ChatGPT API');
            }
        };

        // This function passes each new message into the plugin via the `streamMessage` callback.
        const onmessage = (ev) => {
            const data = ev.data;
            if (data !== '[DONE]') {
                const parsedData = JSON.parse(data);
                const firstChoice = parsedData?.choices[0];
                const message = firstChoice?.delta?.content;
                if (message && message !== '') {
                    if (!hasMarkdown(message)) {
                        streamMessage(message);
                    }
                }
            }
        };

        const onerror = (error) => {
            // Stop operation and do not retry by the fetch-event-source
            throw error;
        };

        // Use microsoft's fetch-event-source library to work around the 2000 character limit
        // of the browser `EventSource` API, which requires query strings
        return fetchApi
            .then((fetchEventSource) =>
                fetchEventSource('https://api.openai.com/v1/chat/completions', {
                    ...openAiOptions,
                    openWhenHidden: true,
                    onopen,
                    onmessage,
                    onerror,
                })
            )
            .then(async (response) => {
                if (response && !response.ok) {
                    const data = await response.json();
                    if (data.error) {
                        throw new Error(
                            `${data.error.type}: ${data.error.message}`
                        );
                    }
                }
            })
            .catch(onerror);
    });
};

const ai_shortcuts = [
  {
    "title": "Summarize content",
    "prompt": "Provide the key points and concepts in this content in a succinct summary.",
    "selection": true
  },
  {
    "title": "Improve Writing",
    "prompt": "Rewrite this content with no spelling mistakes, proper grammar, and more descriptive language, using best writing practices without losing the original meaning.",
    "selection": true
  },
  {
    "title": "Simplify language",
    "prompt": "Rewrite this content with simplified language to reduce complexity, making the content easier to understand.",
    "selection": true
  },
  {
    "title": "Expand upon",
    "prompt": "Expand upon this content with more descriptive language and detailed explanations to increase clarity and length.",
    "selection": true
  },
  {
    "title": "Trim content",
    "prompt": "Remove any repetitive, redundant, or non-essential text without changing the meaning or losing any key information.",
    "selection": true
  },
  {
    "title": "Change tone",
    "subprompts": [
      {
        "title": "Professional",
        "prompt": "Rewrite this content using polished, formal, and respectful language to convey professional expertise and competence.",
        "selection": true
      },
      {
        "title": "Casual",
        "prompt": "Rewrite this content with casual, informal language to create a conversational tone.",
        "selection": true
      },
      {
        "title": "Direct",
        "prompt": "Rewrite this content with concise, straightforward language, focusing only on the essential information.",
        "selection": true
      },
      {
        "title": "Confident",
        "prompt": "Rewrite this content using compelling, optimistic language to convey confidence.",
        "selection": true
      },
      {
        "title": "Friendly",
        "prompt": "Rewrite this content with friendly, comforting language to show empathy and understanding.",
        "selection": true
      }
    ]
  },
  {
    "title": "Change style",
    "subprompts": [
      {
        "title": "Business",
        "prompt": "Rewrite this content in a business professional style using formal language.",
        "selection": true
      },
      {
        "title": "Legal",
        "prompt": "Rewrite this content with legal terminology to make it suitable for legal contexts.",
        "selection": true
      },
      {
        "title": "Journalism",
        "prompt": "Rewrite this content in a journalistic style using engaging language to highlight the importance of the information.",
        "selection": true
      },
      {
        "title": "Medical",
        "prompt": "Rewrite this content using valid medical terminology, suitable for a medical context.",
        "selection": true
      },
      {
        "title": "Poetic",
        "prompt": "Rewrite this content as a poem using poetic techniques, while retaining the original meaning.",
        "selection": true
      }
    ]
  },
  {
    "title": "SEO & Content Optimization",
    "subprompts": [
      {
        "title": "Optimize content for SEO",
        "prompt": "Optimize the SEO of this content to improve search engine rankings, ensuring it includes relevant keywords, meta descriptions, alt text, internal links, and aligns with best practices for readability and structure.",
        "selection": true
      },
      {
        "title": "Optimize content for web/mobile",
        "prompt": "Adapt this content for both web and mobile platforms, ensuring it is responsive, loads quickly, and is optimized for user experience.",
        "selection": true
      },
      {
        "title": "Optimize product description",
        "prompt": "Revise this product description to highlight its highest-rated features based on customer reviews, emphasizing key attributes that drive purchasing decisions.",
        "selection": true
      }
    ]
  },
  {
    "title": "A/B Testing & Variation Creation",
    "prompt": "Generate three content variations for A/B testing, focusing on different messaging, tone, and calls-to-action while maintaining brand alignment.",
    "selection": true
  },
  {
    "title": "Audience & Brand Personalization",
    "subprompts": [
      {
        "title": "Optimize for target demographics",
        "prompt": "Refine this content to resonate with your target audience (specify demographics such as age, gender, location), adjusting language, tone, and messaging to appeal to their preferences.",
        "selection": true
      },
      {
        "title": "Optimize for brand voice",
        "prompt": "Adjust this content to match the voice of [Brand Name], ensuring it reflects the tone, style, and key messaging of the brand while maintaining consistency.",
        "selection": true
      }
    ]
  },
  {
    "title": "Style & Engagement Improvement",
    "subprompts": [
      {
        "title": "Remove passive voice",
        "prompt": "Rewrite this section to eliminate passive voice, making the content more direct, active, and engaging while retaining its original meaning.",
        "selection": true
      },
      {
        "title": "Create call to action",
        "prompt": "Create a compelling call-to-action based on this content, encouraging users to take the next step (e.g., sign up, purchase, or contact us).",
        "selection": true
      },
      {
        "title": "Make text more engaging",
        "prompt": "Revamp this content to make it more engaging by using persuasive language, dynamic verbs, and interactive elements that capture attention.",
        "selection": true
      },
      {
        "title": "Add more personality",
        "prompt": "Infuse this content with more personality, making it feel conversational, relatable, and authentic while staying true to the brand's identity.",
        "selection": true
      }
    ]
  }
];

  return (
    <>
    <div className="header-container"><h2>AI Assistant</h2></div>
    <div className="editor-container">
        <div className="editor-wrapper">
          <h2>Default Prompts</h2>
          <Editor
          id="ai-default-prompts"
          apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // Use your TinyMCE API key here
          init={{
            height: 500,
            width: 700,
            menubar: false,
            plugins: 'ai advlist table advtable autolink lists link image charmap print preview anchor',
            toolbar: 'aidialog aishortcuts | undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
            ai_request,
          }}
        />
        </div>
        <div className="editor-wrapper">
          <h2>Custom Prompts</h2>
          <Editor
            id="custom-prompts"
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // Use your TinyMCE API key here
            init={{
              height: 500,
              width: 700,
              menubar: false,
              plugins: 'ai advlist table advtable autolink lists link image charmap print preview anchor',
              toolbar: 'aidialog aishortcuts | undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
              ai_request,
              ai_shortcuts,
          }}
        />
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
