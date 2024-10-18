import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../styles/AccessibilityChecker.css';

const AccessibilityChecker = () => {
  const editorRef = useRef(null);

  return (
    <div className="container">
      <div className="header">
          <h1 className="title">Accessibility Checker, Enhanced Media Embed & Image Editing</h1><br />
      </div>
      <div className="editor-container">
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              height: 540,
              plugins: 'a11ychecker advcode advlist advtable anchor autocorrect editimage image link linkchecker lists media mediaembed pageembed powerpaste searchreplace table template tinymcespellchecker typography visualblocks wordcount',
              toolbar: 'undo redo | styles | bold italic strikethrough forecolor | align | table link image media pageembed | bullist numlist outdent indent | spellcheckdialog a11ycheck | typography code',
              a11ychecker_level: 'aaa',
              typography_langs: ['en-US'],
              typography_default_lang: 'en-US',
              advcode_inline: true,
              valid_classes: {
                'img': 'medium',
                'div': 'related-content'
              },
              image_caption: true,
              noneditable_class: 'related-content',
              templates: [
                {
                  title: 'Related content',
                  description: 'This template inserts a related content block',
                  content: '<div class="related-content"><h3>Related content</h3><p><strong>{$rel_lede}</strong> {$rel_body}</p></div>'
                }
              ],
              template_replace_values: {
                rel_lede: 'Lorem ipsum',
                rel_body: 'dolor sit amet...'
              },
              template_preview_replace_values: {
                rel_lede: 'Lorem ipsum',
                rel_body: 'dolor sit amet...'
              },
              content_style: `
                body {
                  font-family: 'Roboto', sans-serif;
                  color: #222;
                }
                img {
                  height: auto;
                  margin: auto;
                  padding: 10px;
                  display: block;
                }
                img.medium {
                  max-width: 25%;
                }
                .related-content {
                  padding: 0 10px;
                  margin: 0 0 15px 15px;
                  background: #eee;
                  width: 200px;
                  float: right;
                }
                .ephox-summary-card {
                  border: 1px solid #AAA;
                  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
                  padding: 10px;
                  overflow: hidden;
                  margin-bottom: 1em;
                }
                .ephox-summary-card a {
                  text-decoration: none;
                  color: inherit;
                }
                .ephox-summary-card a:visited {
                  color: inherit;
                }
                .ephox-summary-card-title {
                  font-size: 1.2em;
                  display: block;
                }
                .ephox-summary-card-author, .ephox-summary-card-website {
                  color: #999;
                  display: block;
                  margin-top: 0.5em;
                }
                .ephox-summary-card-thumbnail {
                  max-width: 180px;
                  max-height: 180px;
                  margin-left: 2em;
                  float: right;
                }
                .ephox-summary-card-description {
                  margin-top: 0.5em;
                  display: block;
                }
              `
            }}
            initialValue={`<h1>Top Things to See in Norway</h1>
              <p><img style="float: right;" src="https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="300" height="375" alt="Top Things to See in Norway" /></p>
              <p>Norway is a beautiful and unique country filled with stunning landscapes, majestic fjords, and unique culture. From the <a style="color: rgb(45, 194, 107);" href="https://en.wikipedia.org/wiki/Aurora">iconic Northern Lights</a> to the majestic views of the Norwegian fjords, there are so many incredible things to see and do in Norway. Here is a comprehensive list of the top things to see in Norway.</p>
              <h2>Itinerary</h2>
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Destination</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Day 1</td>
                    <td>Oslo</td>
                  </tr>
                  <tr>
                    <td>Day 2</td>
                    <td>Bergen</td>
                  </tr>
                  <tr>
                    <td>Day 3</td>
                    <td>Flam Railway</td>
                  </tr>
                  <tr>
                    <td>Day 4</td>
                    <td>Geirangerfjord</td>
                  </tr>
                </tbody>
              </table>
              <h2>Day 1: Oslo</h2>
              <p>Oslo is the capital of Norway and the country’s largest city. It is home to some of the most iconic attractions in Norway, such as the iconic Akershus Fortress, the Vigeland Sculpture Park, and the world-famous Holmenkollen Ski Jump. Other attractions in Oslo include the Nobel Peace Prize Museum, the Viking Ship Museum, and the world-famous Opera House.</p>
              <h2>Day 2: Bergen</h2>
              <p>Bergen is the second largest city in Norway and is located on the west coast of the country. Bergen is known for its beautiful scenery and stunning views of the fjords. Popular attractions in Bergen include the Bryggen Wharf, the Bergen Aquarium, the Hanseatic Museum, and the Fl&oslash;ibanen Funicular.</p>
              <h2>Day 3: Flam Railway</h2>
              <p>The Flam Railway is one of the most popular tourist attractions in Norway. The railway winds its way through the stunning landscapes of the Aurlandsfjord and the N&aelig;r&oslash;yfjord. The journey takes approximately 1.5 hours and offers stunning views of the surrounding fjords and mountains.</p>
              <h2>Day 4: Geirangerfjord</h2>
              <p>The Geirangerfjord is one of Norway’s most spectacular fjords and is located in the western part of the country. The fjord is famous for its stunning views of the surrounding mountains and its waterfalls, which are some of the most photographed in the world.</p>
              <h2>Conclusion</h2>
              <p>Norway is an incredible country filled with stunning landscapes, majestic fjords, and unique culture. From the iconic Northern Lights to the majestic views of the Norwegian fjords, there are so many incredible things to see and do in Norway. This list of the top things to see in Norway provides a comprehensive guide to the must-see attractions in the country.</p>`}
          />
          <br />
      </div>
      <p>Sample embed links (Enhanced Media Embed):</p>
          <p>https://www.youtube.com/watch?v=Pf3Ek6yG9Pc</p>
          <p>https://codepen.io/juliangarnier/pen/krNqZO</p>
          <p><a href="https://iframely.com/domains">List of supported web sources (iframely)</a></p>
    </div>
  );
};

export default AccessibilityChecker;
