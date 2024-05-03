import '../index.css'
import { useState } from "react"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

import Arsik from "../assets/Images/Arsik.jpg"
import BihunBebek from "../assets/Images/Bihun_bebek.jpg"
import BikaAmbon from "../assets/Images/Bika_ambon.jpg"
import DaliNi from "../assets/Images/Dali_ni_horbo.png"
import Lampet from "../assets/Images/Lampet.png"
import Lemang from "../assets/Images/Lemang.jpg"
import MieGomak from "../assets/Images/Mie_gomak.jpg"
import Naniura from "../assets/Images/Naniura.jpg"
import SambalTuk from "../assets/Images/Sambal_tuktuk.jpg"
import SotoUdang from "../assets/Images/Soto_udang.jpg"

const name = ["Arsik", "Bihun Bebek", "Bika Ambon", "Dali Ni Horbo", "Lampet", "Lemang", "Mie Gomak", "Naniura", "Sambal Tuk-tuk", "Soto Udang"]

const images = [Arsik, BihunBebek, BikaAmbon, DaliNi, Lampet, Lemang, MieGomak, Naniura, SambalTuk, SotoUdang]

const desc = ["Arsik adalah makanan olahan ikan mas khas Sumatera Utara, dimasak bersama dengan kuah santan yang sudah dicampur berbagai rempah-rempah khas Batak membuat hidangan ini memiliki rasa pedas dan segar.", "Salah satu olahan mie yang sangat popular di kota Medan, Sumatera Utara. Komposisi dari hidangan adalah bihun dan bebek. Rasa Gurih yang disajikan oleh hidangan ini berasal dari rempah-rempah khas Sumatera Utara.", "Kue basah yang berasal dari Ambon di kota Medan. Bahan yang digunakan oleh kue khas Sumatera Utara ini adalah gula, tepung sagu, kunyit dan telur. Ciri khas utama dari kue ini yaitu bentuknya berongga dan warna kuning yang berasal dari kunyit.", "Dali Ni Horbo merupakan keju khas suku Batak. Proses pembuatan keju ini juga dilakukan dengan cara tradisional dan hidangan ini menjadi menu utama di setiap rumah makan khas Batak.", "Lampet merupakah kue tradisional khas batak, yang memiliki ciri khas dengan bentuk limas segi empat dengan warna putih pudar yang berasal dari kelapa parut dan isian gula merah di dalamnya.", "Makanan khas Sumatera Utara yang berasal dari akulturasi budaya Melayu, terbuat dari ketan dan santan sebagai bahan utama hidangan ini dan dibungkus menggunakan daun pisang agar aroma harum daun pisang menyatu dengan hidangan tersebut.", "Mie Gomak merupakan makanan mie khas suku Batak Toba. Bahan utama dalam pembuatan Mie Gomak adalah mie lidi, yang disajikan dengan kuah kari dengan bumbu rempah yang khas.", "Naniura dalam Bahasa Batak berarti ikan yang tidak dimasak. Meskipun tidak dimasak, hidangan ikan ini tidak menimbulkan aroma amis dikarenakan ikan ini direndam dalam asam jeruk, membuat aroma-aroma amis dari ikan hilang, serta membuat tulang ikan ini menjadi lembut.", "Sambal khas Batak Toba yang menggunakan ikan kering seperti ikan aso-aso atau ikan teri sebagai bahan utama dalam pembuatannya, dicampur dengan rempah khas seperti andaliman. Sambal ini biasanya digunakan sebagai pelengkap ayam bakar dan hidangan lainnya.", "Makanan khas Sumatera Utara yang terbuat dari rempah-rempah khas Sumatera Utara, udang, dan santan, membuat hidangan ini menjadi sangat populer di kalangan wisatawan"]

function Kuliner() {

  const PrevButton = ({onClick}) => {
    return (
      <div className="nav prev" onClick={onClick}>
          <FaArrowLeft />
      </div>
    )
  }

  const NextButton = ({onClick}) => {
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
    centerPadding: "90px",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    beforeChange: (curr, next) => setImageIndex(next)
  }

  return (
    <div className="Container">
        <Slider {...options}>
            {images.map((img, idx) => (
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <img src={img} alt={img} />
                    <br />
                    {idx === imageIndex && <h1 className="text-center text-3xl mb-2 heading">{name[idx]}</h1>}
                    {idx === imageIndex && <p className="description">{desc[idx]}</p>}
                </div>
            ))}       
        </Slider>
    </div>
  )
}

export default Kuliner