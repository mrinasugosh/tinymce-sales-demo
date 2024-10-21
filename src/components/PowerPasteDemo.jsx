import React from 'react';
import { useRef } from 'react';
import '../styles/PowerPasteDemo.css'; // Assuming the CSS file is named Editor.css
import { Editor } from '@tinymce/tinymce-react';



const PowerPasteDemo = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <div className="editor-container">
        <div className="editor-wrapper">
          <h2>Without PowerPaste</h2>
          <Editor
            id="no-powerpaste"
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // Use your TinyMCE API key here
            init={{
              height: 500,
              width: 700,
              menubar: false,
              plugins: 'advlist autolink lists link image charmap print preview anchor fullscreen advcode',
              toolbar: 'undo redo | formatselect | bold italic backcolor | code alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
            }}
          />
        </div>
        <div className="editor-wrapper">
          <h2>With PowerPaste</h2>
          <Editor
            id="powerpaste"
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // Use your TinyMCE API key here
            init={{
              height: 500,
              width: 700,
              menubar: false,
              plugins: 'advlist autolink lists link image charmap print preview anchor fullscreen advcode powerpaste',
              toolbar: 'undo redo | formatselect code | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
              powerpaste_allow_local_images: true,
              powerpaste_word_import: 'prompt',
              powerpaste_html_import: 'prompt',
              powerpaste_googledocs_imports: 'prompt',
            }}
          />
        </div>
      </div>
      <div>
        <ul>
          <a href="https://docs.google.com/document/d/1R_T6g2q9L6k_IbYxbiJ2sb1_sS29dNdq/edit?usp=sharing&ouid=100517247904784149146&rtpof=true&sd=true" download="Lecture_Demo.docx">Math Lecture Word Document</a>
          <br></br>
          <a href="https://docs.google.com/document/d/10PcW3K7ZYtDLxSomlww0WPGA-jwBs6Qi/edit?usp=sharing&ouid=100517247904784149146&rtpof=true&sd=true" download="Sales_Demo.docx">Sales Word Document</a>
        </ul>
      </div>
    </>
  );
};

export default PowerPasteDemo;
