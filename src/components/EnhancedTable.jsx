import React from 'react';
import { useRef } from 'react';
import '../styles/EnhancedTable.css'; // Assuming the CSS file is named Editor.css
import { Editor } from '@tinymce/tinymce-react';



const EnhancedTable = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
    <h2>Enhanced Tables</h2>
    <div className="editor-container">
        
        <Editor
          id="enhanced-table"
          apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // Use your TinyMCE API key here
          init={{
            height: 500,
            width: 800,
            menubar: false,
            plugins: 'advlist table advtable autolink lists link image charmap print preview anchor',
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
          }}
          initialValue='<table style="border-collapse: collapse; width: 100%; height: 352px;" border="1">
                        <thead>
                        <tr style="height: 24px;">
                        <th style="width: 14.2857%; border-color: #000000; border-style: groove; text-align: center; height: 24px; background-color: #c2e0f4;">Student ID</th>
                        <th style="width: 14.2857%; border-color: #000000; border-style: groove; text-align: center; height: 24px; background-color: #c2e0f4;">Last Name</th>
                        <th style="width: 14.2857%; border-color: #000000; border-style: groove; text-align: center; height: 24px; background-color: #c2e0f4;">First Name</th>
                        <th style="width: 14.2857%; border-color: #000000; border-style: groove; text-align: center; background-color: #c2e0f4;">Assessment 1 (30%)</th>
                        <th style="width: 14.2857%; border-color: #000000; border-style: groove; text-align: center; height: 24px; background-color: #c2e0f4;">Assessment 2&nbsp; (20%)</th>
                        <th style="width: 14.2857%; border-color: #000000; border-style: groove; text-align: center; height: 24px; background-color: #c2e0f4;">Assessment 3&nbsp; (50%)</th>
                        <th style="width: 14.2857%; border-color: #000000; border-style: groove; text-align: center; height: 24px; background-color: #c2e0f4;">Final Grade</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">41297</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Hisakawa</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Ekin</th>
                        <td style="width: 14.2857%; text-align: center;">11</td>
                        <td style="width: 14.2857%; text-align: center;">2</td>
                        <td style="width: 14.2857%; text-align: center;">41</td>
                        <td style="width: 14.2857%; text-align: center;">54</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">71215</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Newman</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Logan</th>
                        <td style="width: 14.2857%; text-align: center;">24</td>
                        <td style="width: 14.2857%; text-align: center;">4</td>
                        <td style="width: 14.2857%; text-align: center;">40</td>
                        <td style="width: 14.2857%; text-align: center;">68</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">53249</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Wilkins</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Kagiso</th>
                        <td style="width: 14.2857%; text-align: center;">23</td>
                        <td style="width: 14.2857%; text-align: center;">12</td>
                        <td style="width: 14.2857%; text-align: center;">46</td>
                        <td style="width: 14.2857%; text-align: center;">81</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">13965</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Rom&agrave;</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Chibueze</th>
                        <td style="width: 14.2857%; text-align: center;">5</td>
                        <td style="width: 14.2857%; text-align: center;">20</td>
                        <td style="width: 14.2857%; text-align: center;">40</td>
                        <td style="width: 14.2857%; text-align: center;">65</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">24559</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Jacobs</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Celestine</th>
                        <td style="width: 14.2857%; text-align: center;">2</td>
                        <td style="width: 14.2857%; text-align: center;">11</td>
                        <td style="width: 14.2857%; text-align: center;">26</td>
                        <td style="width: 14.2857%; text-align: center;">39</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">78321</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Seabrooke</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Agam</th>
                        <td style="width: 14.2857%; text-align: center;">5</td>
                        <td style="width: 14.2857%; text-align: center;">18</td>
                        <td style="width: 14.2857%; text-align: center;">17</td>
                        <td style="width: 14.2857%; text-align: center;">40</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">19271</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">McKay</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Oluwayemisi</th>
                        <td style="width: 14.2857%; text-align: center;">16</td>
                        <td style="width: 14.2857%; text-align: center;">8</td>
                        <td style="width: 14.2857%; text-align: center;">2</td>
                        <td style="width: 14.2857%; text-align: center;">26</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">63992</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Takala</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Oyibo</th>
                        <td style="width: 14.2857%; text-align: center;">6</td>
                        <td style="width: 14.2857%; text-align: center;">20</td>
                        <td style="width: 14.2857%; text-align: center;">22</td>
                        <td style="width: 14.2857%; text-align: center;">48</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">57415</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Abbasi</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Dallas</th>
                        <td style="width: 14.2857%; text-align: center;">28</td>
                        <td style="width: 14.2857%; text-align: center;">14</td>
                        <td style="width: 14.2857%; text-align: center;">7</td>
                        <td style="width: 14.2857%; text-align: center;">49</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">17804</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Fonda</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Apoorva</th>
                        <td style="width: 14.2857%; text-align: center;">30</td>
                        <td style="width: 14.2857%; text-align: center;">9</td>
                        <td style="width: 14.2857%; text-align: center;">18</td>
                        <td style="width: 14.2857%; text-align: center;">57</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">11380</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Steffensen</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Oghenekaro</th>
                        <td style="width: 14.2857%; text-align: center;">12</td>
                        <td style="width: 14.2857%; text-align: center;">2</td>
                        <td style="width: 14.2857%; text-align: center;">31</td>
                        <td style="width: 14.2857%; text-align: center;">45</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">92756</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Palomo</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Emerson</th>
                        <td style="width: 14.2857%; text-align: center;">16</td>
                        <td style="width: 14.2857%; text-align: center;">11</td>
                        <td style="width: 14.2857%; text-align: center;">28</td>
                        <td style="width: 14.2857%; text-align: center;">55</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">66195</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Falk</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Nalani</th>
                        <td style="width: 14.2857%; text-align: center;">13</td>
                        <td style="width: 14.2857%; text-align: center;">1</td>
                        <td style="width: 14.2857%; text-align: center;">49</td>
                        <td style="width: 14.2857%; text-align: center;">63</td>
                        </tr>
                        <tr style="height: 22px;">
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">88853</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Butler</th>
                        <th style="width: 14.2857%; text-align: center; background-color: #ecf0f1;">Lian</th>
                        <td style="width: 14.2857%; text-align: center;">1</td>
                        <td style="width: 14.2857%; text-align: center;">20</td>
                        <td style="width: 14.2857%; text-align: center;">49</td>
                        <td style="width: 14.2857%; text-align: center;">70</td>
                        </tr>
                        </tbody>
                        </table>'
        />
    </div>
    </>
  );
};

export default EnhancedTable;
