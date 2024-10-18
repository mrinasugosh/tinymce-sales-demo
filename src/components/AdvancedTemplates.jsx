import React, { useState, useRef } from 'react';
import '../styles/AdvancedTemplates.css';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEAdvancedTemplatesDemo = () => {
  const [showModal, setShowModal] = useState(false);
  const [inlineCSSOutput, setInlineCSSOutput] = useState("");
  const editorRef = useRef(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const getInlineCSSContent = () => {
    if (editorRef.current) {
      editorRef.current.plugins.inlinecss.getContent().then((value) => {
        setInlineCSSOutput(value.html);
        handleShowModal();
      });
    }
  };

  return (
    <div className="container">
      <div className="header-container">
        <h1 className="title">Advanced Templates, Merge Tags & Inline CSS Demo</h1>
      </div>
      <div className={`editor-container ${showModal ? 'editor-disabled' : ''}`}>
        <Editor
          apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
          onInit={(evt, editor) => editorRef.current = editor}
          init={{
            width: 1000,
            menubar: false,
            plugins: 'advlist anchor autolink charmap code fullscreen help image insertdatetime link lists media preview searchreplace table visualblocks advtemplate mergetags emoticons advcode inlinecss',
            toolbar: 'fontfamily fontsizeinput | link emoticons mergetags | addtemplate inserttemplate | code',
            height: 500,
            advcode_inline: true,
            mergetags_list: [
              { value: 'Ticket.Number', title: 'Ticket Number' },
              { value: 'Customer.FirstName', title: 'Customer First Name' },
              { value: 'Product.Name', title: 'Product Name' },
              { value: 'Agent.FirstName', title: 'Agent First Name' },
              { value: 'Company.Name', title: 'Company Name' },
              { value: 'Survey.Link', title: 'Survey Link' },
            ],
            advtemplate_templates: [
              {
                title: 'Message received',
                content: '<p dir="ltr">Hey {{Customer.FirstName}}!</p>\n<p dir="ltr">Just a quick note to say we&rsquo;ve received your message and will get back to you within 48 hours.</p>\n<p dir="ltr"><strong>For reference, your ticket number is: {{Ticket.Number}}</strong></p>\n<p dir="ltr">In the meantime, here are some helpful links that may help you solve your issue:</p>\n<ul>\n<li><a href="https://www.tiny.cloud/docs/tinymce/6/">Documentation</a></li>\n<li><a href="https://stackoverflow.com/questions/tagged/tinymce">Community forum</a></li>\n<li><a href="https://www.tiny.cloud/blog/">Blog</a></li>\n</ul>\n<p dir="ltr">Regards,<br>{{Agent.FirstName}}</p>'
              },
              {
                title: 'Thanks for the feedback',
                content: '<p dir="ltr">{{Customer.FirstName}},</p>\n<p dir="ltr">We appreciate you taking the time to provide feedback on {{Product.Name}}.</p>\n<p dir="ltr">It sounds like it wasn&rsquo;t able to fully meet your expectations, for which we apologize. Rest assured our team looks at each piece of feedback and uses it to decide what to focus on next with {{Product.Name}}.</p>\n<p dir="ltr">All the best, and let us know if there&rsquo;s anything else we can do to help.</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
              },
              {
                title: 'Still working on case',
                content: '<p dir="ltr">Hi&nbsp;{{Customer.FirstName}},</p>\n<p dir="ltr">Just a quick note to let you know we&rsquo;re still working on your case. It&rsquo;s taking a bit longer than we hoped, but we&rsquo;re aiming to get you an answer in the next 48 hours.</p>\n<p dir="ltr">Stay tuned,<br>{{Agent.FirstName}}</p>\n<p dir="ltr"><img src="https://media0.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=ecf05e476b2yn7o5s5akocuw0vypitb2ticpv5fss454gnrm&amp;rid=giphy.gif&amp;ct=g" alt="Video gif. A black cat with white paws busily types at a laptop." width="186" height="186"></p>'
              },
              {
                title: 'Closing tickets',
                items: [
                  {
                    title: 'Closing ticket',
                    content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We haven&rsquo;t heard back from you in over a week, so we have gone ahead and closed your ticket number {{Ticket.Number}}.</p>\n<p dir="ltr">If you&rsquo;re still running into issues, just reply to this email and we will re-open your ticket.</p>\n<p>All the best,<br>{{Agent.FirstName}}</p>'
                  },
                  {
                    title: 'Post-call survey',
                    content: '<p dir="ltr">Hey {{Customer.FirstName}}!</p>\n<p dir="ltr">How did we do?</p>\n<p dir="ltr">If you have a few moments, we&rsquo;d love you to fill out our post-support survey: {{Survey.Link}}</p>\n<p>Thanks in advance!<br>{{Company.Name}} Customer Support</p>'
                  }
                ]
              },
              {
                title: 'Product support',
                items: [
                  {
                    title: 'How to find model number',
                    content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p>My name is {{Agent.FirstName}} and I will be glad to assist you today.</p>\n<p dir="ltr">To troubleshoot your issue, we first need your model number, which can be found on the underside of your product beneath the safety warning label.&nbsp;</p>\n<p dir="ltr">It should look something like the following: <strong><em>XX.XXXXX.X</em></strong></p>\n<p dir="ltr">Once you send it over, I will advise on the next steps.</p>\n<p>Thanks<br>{{Agent.FirstName}}</p>'
                  },
                  {
                    title: 'Support escalation',
                    content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We have escalated your ticket {{Ticket.Number}} to second-level support.</p>\n<p dir="ltr">You should hear back from the new agent on your case, {{NewAgent.FirstName}}, shortly.</p>\n<p>Thanks,<br>{{Company.Name}} Customer Support</p>'
                  }
                ]
              }
            ]
          }}
        />
      </div>
      <div className="button-container">
        <button className="primary-button" type="button">Send</button>
        <button className="secondary-button" type="button">Save Draft</button>
        <button className="link-button" onClick={getInlineCSSContent}>Get CSS-inlined HTML</button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-header">
              <h5>CSS-Inlined HTML</h5>
              <button className="close-button" onClick={handleCloseModal}>X</button>
            </div>
            <div className="modal-body">
              <textarea id="inlineCSSOutput" value={inlineCSSOutput} readOnly className="textarea"></textarea>
            </div>
            <div className="modal-footer">
              <button className="secondary-button" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TinyMCEAdvancedTemplatesDemo;
