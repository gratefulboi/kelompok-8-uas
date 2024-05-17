import '../index.css';
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Arsik from "../assets/Kuliner/Arsik.jpg";
import BihunBebek from "../assets/Kuliner/Bihun_bebek.jpg";
import BikaAmbon from "../assets/Kuliner/Bika_ambon.jpg";
import DaliNi from "../assets/Kuliner/Dali_ni_horbo.png";
import Lampet from "../assets/Kuliner/Lampet.png";
import Lemang from "../assets/Kuliner/Lemang.jpg";
import MieGomak from "../assets/Kuliner/Mie_gomak.jpg";
import Naniura from "../assets/Kuliner/Naniura.jpg";
import SambalTuk from "../assets/Kuliner/Sambal_tuktuk.jpg";
import SotoUdang from "../assets/Kuliner/Soto_udang.jpg";

const name = ["Naniura (Suku Batak)", "Bihun Bebek (Kota Medan)", "Bika Ambon (Suku Melayu)", "Bagot Ni Horbo (Suku Batak)", "Lampet (Suku Batak)", "Lemang (Suku Melayu)", "Mie Gomak (Suku Batak)", "Arsik (Suku Batak)", "Sambal Tuk-tuk (Suku Batak)", "Soto Udang (Kota Medan)"];

const images = [Naniura, BihunBebek, BikaAmbon, DaliNi, Lampet, Lemang, MieGomak, Arsik, SambalTuk, SotoUdang];

const desc = [
  "Naniura dalam Bahasa Batak berarti ikan yang tidak dimasak. Meskipun tidak dimasak, hidangan ikan ini tidak menimbulkan aroma amis dikarenakan ikan ini direndam dalam asam jeruk, membuat aroma-aroma amis dari ikan hilang, serta membuat tulang ikan ini menjadi lembut.",
  "Salah satu olahan mie yang sangat popular di kota Medan, Sumatra Utara. Komposisi dari hidangan adalah bihun dan bebek. Rasa Gurih yang disajikan oleh hidangan ini berasal dari rempah-rempah khas Sumatra Utara.",
  "Kue basah yang berasal dari Ambon di kota Medan. Bahan utama pembuatan kue ini adalah gula, tepung sagu, kunyit dan telur. Ciri khas utama kue ini yaitu bentuknya berongga dan warna kuning khas dari kunyit.",
  "Bagot Ni Horbo merupakan keju khas Suku Batak. Proses pembuatan keju ini juga dilakukan dengan cara tradisional dan hidangan ini menjadi menu utama di setiap rumah makan khas Batak.",
  "Lampet merupakah kue tradisional khas batak, yang memiliki ciri khas dengan bentuk limas segi empat dengan warna putih pudar yang berasal dari kelapa parut dan isian gula merah di dalamnya.",
  "Makanan khas Sumatra Utara yang berasal dari akulturasi budaya Melayu, terbuat dari ketan dan santan sebagai bahan utama hidangan ini dan dibungkus menggunakan daun pisang agar aroma harum daun pisang menyatu dengan hidangan tersebut.",
  "Mie Gomak merupakan makanan mie khas Suku Batak Toba. Bahan utama dalam pembuatan Mie Gomak adalah mie lidi, yang disajikan dengan kuah kari dengan bumbu rempah yang khas.",
  "Arsik adalah makanan olahan ikan mas khas Sumatra Utara, dimasak bersama dengan kuah santan yang sudah dicampur berbagai rempah-rempah khas Batak membuat hidangan ini memiliki rasa pedas dan segar.",
  "Sambal khas Batak Toba yang menggunakan ikan kering seperti ikan aso-aso atau ikan teri sebagai bahan utama dalam pembuatannya, dicampur dengan rempah khas seperti andaliman. Sambal ini biasanya digunakan sebagai pelengkap ayam bakar dan hidangan lainnya.",
  "Makanan khas Sumatra Utara yang terbuat dari rempah-rempah khas Sumatra Utara, udang, dan santan, membuat hidangan ini menjadi sangat populer di kalangan wisatawan"
];

function Kuliner() {

  const PrevButton = ({ onClick }) => {
    return (
      <div className="nav prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const NextButton = ({ onClick }) => {
    return (
      <div className="nav next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const options = {
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    adaptiveHeight: true,
    beforeChange: (curr, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px"
        }
      }
    ]
  }

  return (
    <div className="Container">
      <div data-aos="fade-up">
        <Slider {...options}>
          {images.map((img, idx) => (
            <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={name[idx]} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="description-container" data-aos="fade-up">
        <h1 className="text-center mb-2 heading text-2xl">{name[imageIndex]}</h1>
        <p className="description text-center mx-auto p-4 text-white lg:max-w-2xl lg:text-xl lg:h-48">{desc[imageIndex]}</p>
      </div>
    </div>
  )
}

export default Kuliner;
