import React, { useRef } from 'react';
import '../styles/SpellChecker.css';
import { Editor } from '@tinymce/tinymce-react';

const SpellChecker = () => {
  const editorRef = useRef(null);

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col">
          <h1 className="title">Spell Checker and Spelling Autocorrect Demo</h1>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col col-xl-10">
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              height: 560,
              plugins: 'anchor advcode autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen advtable advcode editimage tableofcontents footnotes mergetags autocorrect typography powerpaste',
              toolbar: 'styles | bold italic strikethrough | link image media table | spellchecker spellcheckdialog language | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | code removeformat',
              advcode_inline: true,
              image_caption: true,
              spellchecker_language: 'en_US',
              spellchecker_active: true,
              content_langs: [
                { title: 'English', code: 'en' },
                { title: 'Spanish', code: 'es' },
                { title: 'French', code: 'fr' },
                { title: 'German', code: 'de' },
                { title: 'Portuguese', code: 'pt' },
              ],
              content_style: ''
            }}
            initialValue={`<h1 style="text-align: left;">Top 3 places to visit this winter</h1>
                <p>Winter is a magical time of year, with snow-covered landscapes and festve cheer in the air. It's also the perfect time to get away and explore the world. Whether you're looking for a comfortable ski vacation, a romantic escape, or a unique winter adventure, there are plenty of amazing places to travel in the winter. Here are some of the best places to travel this winter.</p>
                <h2>1. Canada</h2>
                <figure class="image align-right"><img style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; float: right;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FNWauOKXf6ZwI1cZv6MVvwYjbLSt5fXsCg&s" alt="Canada mountains" width="348" height="231">
                <figcaption>Canada's Rocky Mountains</figcaption>
                </figure>
                <p>Canada is a great destination to visit in the winter. For starters, Canada is known for its winter wonderland of snow-covered landscapes, breathtaking scenery, and world-class ski resorts. Whether you're looking for a romantic getaway or an adventure-filled vacation, Canada has something for everyone.&nbsp;</p>
                <p>If you plan to visit Canada's French province of Quebec, be sure you practice the local saying "C&rsquo;est tiguidou!" which means "It's all good!"</p>
                <p>Canada's winter activities are some of the best in the world. Skiing and snowboarding are popular activities, as well as snowmobiling, snowshoeing, and ice fishing. If you're looking to get away from the hustle and bustle of everyday life, the Canadian Rockies are an ideal location. Here, you'll find a peaceful, serene atmosphere perfect for a quiet getaway. Canada is also known for its winter festivals, such as the Quebec Winter Carnival in Montreal. These events offer the perfect opportunity to get out and enjoy the Canadian winter.</p>
                <h2>2. Japan</h2>
                <figure class="image align-right"><img src="https://cdn.britannica.com/96/196396-050-13758154/Chureito-Pagoda-Arakura-Sengen-Shrine-Mount-Fuji.jpg  " alt="Mt. Fuji" width="200" height="250">
                <figcaption>Japan's iconic Mt. Fuji</figcaption>
                </figure>
                <p>Visiting Japan in the wintertime is a unique experience. Japan is known for its beautiful winter landscapes, with snow-covered mountains and forests, and the bustling cities of Tokyo, Kyoto, and Osaka are even more spectacular in the winter. Travelers can explore the historic temples of Kyoto, take in the bright city lights of Tokyo, and visit the famous winter illumination spots of Japan.</p>
                <p>There is also an abundance of winter activities available in Japan, such as skiing and snowboarding at some of the world&rsquo;s best ski resorts, snowshoeing and ice fishing on the many lakes and rivers, and soaking in hot springs. Winter is also the best time to experience the unique Japanese culture, with events such as the New Year&rsquo;s celebrations, winter festivals, and the traditional Japanese art of calligraphy.</p>
                <p>In addition to the spectacular sights and activities, Japan in the winter is a great place to find some amazing deals on both accommodation and food. The winter season is traditionally the low season for tourists in Japan, so travelers can find some great discounts on hotels and flights. The winter is also a great time to sample some of the local cuisine, such as hot pot dishes, ramen, and the classic Japanese dish of sushi. All in all, Japan in the winter is an amazing experience, with incredible sights, activities, and food, all at great prices.</p>
                <br>
                <h2>3. Switzerland</h2>
                <figure class="image align-right"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzjLnJiKnnuwZ87pezLjtzp7vMZ80qlSjSQ&s" alt="Switzerland cabin" width="279" height="267">
                <figcaption>A remote Swiss getaway</figcaption>
                </figure>
                <p>Switzerland is a winter wonderland during the winter season. It has spectacular snow-capped mountains, stunning lakes, and incredible ski resorts. With the cold temperatures, there is no better time to visit than in the winter. Snow sports are an especially popular activity, with skiing and snowboarding being some of the most popular. The ski resorts in Switzerland offer a mix of beginner, intermediate, and advanced runs, so there is something for everyone. Additionally, the picturesque Swiss Alps are a great place for snowshoeing and cross-country skiing.</p>
                <p>Switzerland is also a great place for those who don't want to participate in snow sports. There are plenty of cozy mountain cabins with fireplaces and hot chocolate that make for a perfect retreat away from the cold. For those who want to explore, there are plenty of interesting historical sites, stunning churches, and picturesque villages to visit. The winter season is also when the famous Christmas markets in Switzerland take place, making it a great time to shop for unique gifts. So if you're looking for a winter getaway that offers something for everyone, Switzerland is the place to be.</p>
                <p>No matter where you decide to go, winter is a great time to get away and explore the world. There are plenty of amazing places to travel in the winter. So get packing and have an incredible winter adventure!</p>`}
          />
        </div>
      </div>
    </div>
  );
};

export default SpellChecker;