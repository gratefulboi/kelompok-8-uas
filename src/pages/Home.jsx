import "../index.css"
import HomeVid from "../assets/Video/CinematicIndonesia.mp4"

import { Link } from "react-router-dom"

import DanauToba from "../assets/Wisata/DanauToba.jpg"

import Naniura from "../assets/Kuliner/Naniura.jpg"

function home () {
  return (
    <div>

      <div className="videoContainer">
        <Link to="https://youtu.be/IrcoYCD9-nM?si=vSXVdyEtetG4z0Gc">
          <video autoPlay loop className="border border-b-2 border-black flex items-center justify-center HomeVideo" src={HomeVid} />
          
          <div className="credits">
            <p>Credit:</p>
            <p>https://youtu.be/IrcoYCD9-nM?si=vSXVdyEtetG4z0Gc</p>
          </div>
        </Link>
      </div>
        

      <hr className="m-10 border border-b-2 w-2/3 mx-auto text-sm lines"/>
      <h1 className="flex items-center justify-center m-10 px-5 text-2xl text-center w-1/2 mx-auto">Selamat datang di portal Djedjak Soematra, tempat dimana keberagaman kuliner, keindahan alam, dan kekayaan budaya bersatu, memberikan Anda pengalaman yang tak hanya memanjakan lidah dan mata, tetapi juga menyentuh jiwa. Mari kita mulai petualangan yang akan menginspirasi setiap langkah Anda di tanah yang luar biasa ini.</h1>
      <h1 className="text-center mx-auto text-3xl font-serif">Explore</h1>
      <hr className="m-5 border border-b-2 w-1/2 mx-auto text-sm lines"/>

      <Link to="/Budaya">
        <div className="m-10 border border-black border-2 cardImg flex justify-between">
          <img src={Naniura} className="w-96"/>
          <p className="flex items-center justify-center m-10 px-10 text-2xl text-justify">Memperkenalkan anda ke beragam budayanya, di mana Gordang Sambilan tidak hanya sekedar alat musik, tetapi juga simbol dari kekayaan tradisi yang mengalun dalam setiap irama. Mulai perjalanan budaya Anda dengan kami dan biarkan semangat, serta harmoni Gordang Sambilan membawa Anda ke dalam inti dari warisan yang tak ternilai, membuka pintu ke pengalaman yang akan menggema hati Anda.</p>
        </div>
      </Link>
      
            
      <Link to="/Wisata">
        <div className="m-10 border border-black border-2 cardImg flex justify-between">
          <p className="flex items-center justify-center m-10 px-10 text-2xl text-justify">Bagi para penikmat alam, mari kita selami surga wisata dengan keindahan yang tak terbatas. Dari Danau Toba, permata alam, yang menawarkan pengalaman unik dengan pemandangan yang memanjakan mata dan suasana yang menenangkan, serta berbagai macam tempat-tempat lainya yang tak kalah dalam keindahanya.</p>
          <img src={DanauToba} className="w-96"/>
        </div>
      </Link>
      

      <Link to="/Kuliner">
        <div className="m-10 border border-black border-2 cardImg flex justify-between">
          <img src={Naniura} className="w-96"/>
          <p className="flex items-center justify-center m-10 px-10 text-2xl text-justify">Jelajahi surga kuliner untuk para pecinta kuliner yang menawarkan keberagaman tanpa batas. Mulai dari Naniura yang eksotis dengan cita rasa unik dan gurih yang memikat, hingga beragam sajian lezat lainnya yang juga memberi kekayaan rasa yang tak terlupakan.</p>
        </div>
      </Link>
      
  </div>
  )
}

export default home