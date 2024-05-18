import "../index.css"
import HomeVid from "../assets/Video/CinematicIndonesia.mp4"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import DanauToba from "../assets/Wisata/danauToba.jpg"

import LompatBatu from '../assets/Budaya/budaya.jpg'

import Naniura from "../assets/Kuliner/Naniura.jpg"

function home () {

  const [translation, setTranslation] = useState({
    welcomeText: '',
    exploreText: ''
  });

  useEffect(() => {
    const detectLanguageAndTranslate = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set('q', 'Selamat datang di portal Djedjak Soemoet, tempat dimana keberagaman kuliner, keindahan alam, dan kekayaan budaya bersatu, memberikan Anda pengalaman yang tak hanya memanjakan lidah dan mata, tetapi juga menyentuh jiwa. Mari kita mulai petualangan yang akan menginspirasi setiap langkah Anda di tanah yang luar biasa ini.');

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '03274c2157mshdde65bcd2909846p1b6325jsn539aaaf3c06d',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
      };

      try {
        const response = await axios.request(options);
        const detectedLanguage = response.data.data.detections[0][0].language;

        // Translate the texts
        const translateParams = new URLSearchParams();
        translateParams.set('q', 'Selamat datang di portal Djedjak Soemoet, tempat dimana keberagaman kuliner, keindahan alam, dan kekayaan budaya bersatu, memberikan Anda pengalaman yang tak hanya memanjakan lidah dan mata, tetapi juga menyentuh jiwa. Mari kita mulai petualangan yang akan menginspirasi setiap langkah Anda di tanah yang luar biasa ini.');
        translateParams.set('target', detectedLanguage);
        translateParams.set('source', 'id');

        const translateOptions = {
          method: 'POST',
          url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '03274c2157mshdde65bcd2909846p1b6325jsn539aaaf3c06d',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          data: translateParams,
        };

        const translateResponse = await axios.request(translateOptions);
        setTranslation({
          welcomeText: translateResponse.data.data.translations[0].translatedText,
          exploreText: 'Explore'
        });
      } catch (error) {
        console.error(error);
      }
    };

    detectLanguageAndTranslate();
  }, []);

  return (
    <div>

      <div className="videoContainer"  data-aos="zoom-out-up">
        <Link to="https://youtu.be/IrcoYCD9-nM?si=vSXVdyEtetG4z0Gc">
          <video autoPlay loop className="border-b-2 border-t-2 flex items-center justify-center HomeVideo" src={HomeVid} />
          
          <div className="credits">
            <p>Credit:</p>
            <p>https://youtu.be/IrcoYCD9-nM?si=vSXVdyEtetG4z0Gc</p>
          </div>
        </Link>
      </div>
        

      <hr className="m-10 border border-b-2 w-2/3 mx-auto text-sm lines"  data-aos="fade-up"/>
      <h1 className="flex items-center justify-center m-10 px-5 text-base lg:text-2xl text-center w-auto lg:w-1/2 mx-auto text-yellow-50"  data-aos="fade-up">Selamat datang di portal Djedjak Soemoet, tempat dimana keberagaman kuliner, keindahan alam, dan kekayaan budaya bersatu, memberikan Anda pengalaman yang tak hanya memanjakan lidah dan mata, tetapi juga menyentuh jiwa. Mari kita mulai petualangan yang akan menginspirasi setiap langkah Anda di tanah yang luar biasa ini.</h1>
      <h1 className="text-center mx-auto text-xl lg:text-3xl font-serif text-yellow-50"  data-aos="fade-up">Explore</h1>
      <hr className="m-5 border border-b-2 w-1/2 mx-auto text-sm lines" data-aos="fade-up"/>

      <Link to="/Budaya">
        <div className="m-10 border-2 cardImg flex justify-between w-auto explore" data-aos="fade-up">
          <img src={LompatBatu} className="w-96 mobileExplore"/>
          <p className="flex items-center justify-center m-2 lg:m-10 px-2 lg:px-10 text-xs lg:text-2xl text-justify">Memperkenalkan anda ke beragam budayanya, di mana Gordang Sambilan tidak hanya sekedar alat musik, tetapi juga simbol dari kekayaan tradisi yang mengalun dalam setiap irama. Mulai perjalanan budaya Anda dengan kami dan biarkan semangat, serta harmoni Gordang Sambilan membawa Anda ke dalam inti dari warisan yang tak ternilai, membuka pintu ke pengalaman yang akan menggema hati Anda.</p>
        </div>
      </Link>
            
      <Link to="/Wisata">
        <div className="m-10 border border-black border-2 cardImg flex justify-between exploreWisata" data-aos="fade-up">
          <p className="flex items-center justify-center m-2 lg:m-10 px-2 lg:px-10 text-xs lg:text-2xl text-justify">Bagi para penikmat alam, mari kita selami surga wisata dengan keindahan yang tak terbatas. Dari Danau Toba, permata alam, yang menawarkan pengalaman unik dengan pemandangan yang memanjakan mata dan suasana yang menenangkan, serta berbagai macam tempat-tempat lainya yang tak kalah dalam keindahanya.</p>
          <img src={DanauToba} className="w-96 mobileExplore"/>
        </div>
      </Link>
      
      <Link to="/Kuliner">
        <div className="m-10 border border-black border-2 cardImg flex justify-between explore" data-aos="fade-up">
          <img src={Naniura} className="w-96 mobileExplore"/>
          <p className="flex items-center justify-center m-2 lg:m-10 px-2 lg:px-10 text-xs lg:text-2xl text-justify">Jelajahi surga kuliner untuk para pecinta kuliner yang menawarkan keberagaman tanpa batas. Mulai dari Naniura yang eksotis dengan cita rasa unik dan gurih yang memikat, hingga beragam sajian lezat lainnya yang juga memberi kekayaan rasa yang tak terlupakan.</p>
        </div>
      </Link>
      
  </div>
  )
}

export default home