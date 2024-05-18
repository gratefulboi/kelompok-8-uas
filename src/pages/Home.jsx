import "../index.css";
import HomeVid from "../assets/Video/CinematicIndonesia.mp4";

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import DanauToba from "../assets/Wisata/DanauToba.jpg";
import LompatBatu from '../assets/Budaya/budaya.jpg';
import Naniura from "../assets/Kuliner/Naniura.jpg";

function Home() {
  const [airQuality, setAirQuality] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/air_pollution?lat=3.5896&lon=98.6736&appid=1f6bbc8ab1dcdd4bacb4be1694156dc5")
        const data = response.data.list[0]; // Get the first forecast entry
        setAirQuality(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching air quality data: ", error)
        setLoading(false);
      }
    }

    fetchAirQuality()
  }, [])

  return (
    <div>
      <div className="videoContainer" data-aos="zoom-out-up">
        <Link to="https://youtu.be/IrcoYCD9-nM?si=vSXVdyEtetG4z0Gc">
          <video autoPlay loop className="border-b-2 border-t-2 flex items-center justify-center HomeVideo" src={HomeVid} />
          
          <div className="credits">
            <p>Credit:</p>
            <p>https://youtu.be/IrcoYCD9-nM?si=vSXVdyEtetG4z0Gc</p>
          </div>
        </Link>
      </div>

      <hr className="m-10 border border-b-2 w-2/3 mx-auto text-sm lines" data-aos="fade-up"/>
      <h1 className="flex items-center justify-center m-10 px-5 text-base lg:text-2xl text-center w-auto lg:w-1/2 mx-auto text-yellow-50" data-aos="fade-up">Selamat datang di portal Djedjak Soemoet, tempat dimana keberagaman kuliner, keindahan alam, dan kekayaan budaya bersatu, memberikan Anda pengalaman yang tak hanya memanjakan lidah dan mata, tetapi juga menyentuh jiwa. Mari kita mulai petualangan yang akan menginspirasi setiap langkah Anda di tanah yang luar biasa ini.</h1>
      <h1 className="text-center mx-auto text-xl lg:text-3xl font-serif text-yellow-50" data-aos="fade-up">Explore</h1>
      <hr className="m-5 border border-b-2 w-1/2 mx-auto text-sm lines" data-aos="fade-up"/>

      <Link to="/Budaya">
        <div className="m-10 border-2 cardImg flex justify-between w-auto explore" data-aos="fade-up">
          <img src={LompatBatu} className="w-96 mobileExplore"/>
          <p className="flex items-center justify-center m-2 lg:m-10 px-2 lg:px-10 text-xs lg:text-2xl text-justify">Memperkenalkan anda ke beragam budayanya, di mana Gordang Sambilan tidak hanya sekedar alat musik, tetapi juga simbol dari kekayaan tradisi yang mengalun dalam setiap irama. Mulai perjalanan budaya Anda dengan kami dan biarkan semangat, serta harmoni Gordang Sambilan membawa Anda ke dalam inti dari warisan yang tak ternilai, membuka pintu ke pengalaman yang akan menggema hati Anda.</p>
        </div>
      </Link>
            
      <Link to="/Wisata">
        <div className="m-10 border-2 cardImg flex justify-between exploreWisata" data-aos="fade-up">
          <p className="flex items-center justify-center m-2 lg:m-10 px-2 lg:px-10 text-xs lg:text-2xl text-justify">Bagi para penikmat alam, mari kita selami surga wisata dengan keindahan yang tak terbatas. Dari Danau Toba, permata alam, yang menawarkan pengalaman unik dengan pemandangan yang memanjakan mata dan suasana yang menenangkan, serta berbagai macam tempat-tempat lainya yang tak kalah dalam keindahanya.</p>
          <img src={DanauToba} className="w-96 mobileExplore"/>
        </div>
      </Link>
      
      <Link to="/Kuliner">
        <div className="m-10 border-2 cardImg flex justify-between explore" data-aos="fade-up">
          <img src={Naniura} className="w-96 mobileExplore"/>
          <p className="flex items-center justify-center m-2 lg:m-10 px-2 lg:px-10 text-xs lg:text-2xl text-justify">Jelajahi surga kuliner untuk para pecinta kuliner yang menawarkan keberagaman tanpa batas. Mulai dari Naniura yang eksotis dengan cita rasa unik dan gurih yang memikat, hingga beragam sajian lezat lainnya yang juga memberi kekayaan rasa yang tak terlupakan.</p>
        </div>
      </Link>

      <h1 className="text-center mx-auto mt-10 text-xl lg:text-3xl font-serif text-yellow-50" data-aos="fade-up">Kualitas Udara</h1>
      <hr className="m-5 border border-b-2 w-1/2 mx-auto text-sm lines" data-aos="fade-up"/>

      <div>
        {loading ? (
            <p>Loading current Air Quality</p>
            ) : airQuality ? (
            <div  className="border-2 m-10 flex items-center justify-between text-yellow-50 text-xs lg:text-2xl p-5 cardImg bungkusAngin" data-aos="fade-up">
              <div className="p-5 flex flex-col justify-center w-auto h-auto">
                <div>
                  <h1 className="flex items-center justify-center text-xs lg:text-2xl">Gas</h1>
                </div>
                
                <div className="border-2 border-white p-5 mt-5 cardImg" data-aos="fade-up">
                  <p>Karbon Monoksida: {airQuality.components.co} μg/m3</p>
                  <p>Sulfur Dioksida: {airQuality.components.so2} μg/m3</p>
                  <p>Ozon: {airQuality.components.o3} μg/m3</p>
                  <p>Nitrogen Dioksida: {airQuality.components.no2} μg/m3</p>
                </div>
              </div>
              
              <div className="p-5 flex flex-col justify-center h-auto">
                <div>
                  <h1 className="flex items-center justify-center text-xs lg:text-2xl">Kualitas Udara Rata-rata</h1>
                </div>
                
                <div className="border-2 border-white p-5 mt-5 flex justify-center items-center cardImg  w-auto" data-aos="fade-up">
                  <p className="text-6xl lg:text-9xl px-16 lg:px-0 text-red-800">{airQuality.main.aqi}</p>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-center h-auto">
                <div>
                  <h1 className="flex items-center justify-center text-xs lg:text-2xl">Partikel</h1>
                </div>
                
                <div className="border-2 border-white px-5 mt-5 particles cardImg w-auto" data-aos="fade-up">
                  <p>Partikel Kasar: {airQuality.components.pm10} μg/m3</p>
                  <p>Partikel Halus: {airQuality.components.pm2_5} μg/m3</p>
                </div>
              </div>

            </div>
            ) : (
            <p>Failed to load air quality data</p>
            )
        }
      </div>

    </div>
  )
}

export default Home;
