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
    <div className="editor-container">
      <div className="editor-wrapper">
        <h2>Without PowerPaste</h2>
        <Editor
          id="no-powerpaste"
          apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // Use your TinyMCE API key here
          init={{
            height: 500,
            menubar: false,
            plugins: 'advlist autolink lists link image charmap print preview anchor',
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
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
            menubar: false,
            plugins: 'advlist autolink lists link image charmap print preview anchor powerpaste',
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
            powerpaste_allow_local_images: true,
            powerpaste_word_import: 'prompt',
            powerpaste_html_import: 'prompt',
          }}
        />
      </div>
    </div>
  );
};

export default PowerPasteDemo;
