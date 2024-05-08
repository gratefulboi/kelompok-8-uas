import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { useLocation } from 'react-router-dom'
import 'swiper/css/bundle'

import gambarMain from '../assets/Images/budaya.jpg'
import gambarMandokhata from '../assets/Images/mandokhata.jpg'  
import gambarLompatbatu from '../assets/Images/lompatbatu.png'
import gambarBajuBatakToba from '../assets/Images/bataktoba.jpg'
import gambarBajuKaro from '../assets/Images/batakkaro.jpeg'
import gambarBajuPakpak from '../assets/Images/pakpak.jpeg'
import gambarBajuAngkola from '../assets/Images/angkola.jpeg'
import gambarBajuMelayu from '../assets/Images/melayu.jpg'
import gambarGordangSambilan from '../assets/Images/gordangsambilan.jpg'
import gambarTaganing from '../assets/Images/taganing.png'
import gambarFaritia from '../assets/Images/faritia.jpg'
import gambarBalobat from '../assets/Images/balobat.jpg'
import gambarDolidoli from '../assets/Images/doli-doli.jpg'

import audioGordang from '../assets/audio/Gordangsambilan.mp3'
import audioTaganing from '../assets/audio/Taganing.mp3'
import audioFaritia from '../assets/audio/Faritia.mp3'
import audioBalobat from '../assets/audio/Balobat.mp3'
import audioDoli from '../assets/audio/Dolidoli.mp3'

const styleHoverSlider = 'absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex justify-center w-full bg-hijau1 p-2 text-justify'
const styleMusic = 'p-4 rounded-t-2xl'

export default function Budaya() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRefs = useRef({
    gordang: new Audio(audioGordang),
    taganing: new Audio(audioTaganing),
    faritia: new Audio(audioFaritia),
    balobat: new Audio(audioBalobat),
    doli: new Audio(audioDoli),
  });

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (audioKey) => {
    if (selectedCard && selectedCard !== audioKey) {
      audioRefs.current[selectedCard].pause();
    }

    setSelectedCard(selectedCard === audioKey ? null : audioKey);

    const audioRef = audioRefs.current[audioKey];
    if (audioRef.paused) {
      audioRef.play();
      setIsPlaying(true);
    } else {
      audioRef.pause();
      setIsPlaying(false);
    }
  };

  const getCardClasses = (audioKey) => {
    return `m-10 bg-krem cursor-pointer rounded-2xl max-w-sm max-h-xs transition-all duration-500 ease-in-out  ${selectedCard === audioKey ? 'transform scale-110 bg-hijau1' : ''}`;
  };

  const location = useLocation();
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
      });
      setIsPlaying(false);
    };
  }, [location]);

  return (
    <>
    <div className='m-10 flex flex-col justify-between items-center'>
        <h1 className='flex justify-center items-center m-10 text-3xl font-rubik'>Adat & Budaya</h1>
        <p className='text-center text-xl w-3/4' data-aos="fade-up">
          Setiap keindahan, keanekaragaman, dan keunikan tiap daerah terlukiskan didalam budaya-budaya yang diwariskan turun temurun.
          Sumatera Utara, dengan keragaman budayanya memberikan warna dan ciri khas yang mempesona, seolah-olah setiap motif ulos dan
          alunan musik gondang membawa kita masuk untuk mengenal harta karun budaya Sumatera Utara lebih dalam.
        </p>
        <Card className='m-10 rounded-2xl bg-krem w-4/5 shadow-xl' data-aos="fade-up">
            <div className='overflow-hidden rounded-t-xl'>
                <img className='rounded-t-xl cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out' src={gambarMain} />
            </div>
          <CardContent className='flex justify-center items-center mt-5'>
            <p className='text-justify'>Sumatera Utara merupakan daerah yang dihuni oleh berbagai macam suku yang memiliki keragaman budaya masing-masing 
              suku tersebut, Sumatera Utara banyak dihuni oleh suku yang tergolong dari Melayu Tua dan Melayu Muda. Mayoritas penduduk asli Sumatera Utara terdiri
              dari Suku Batak, Suku Nias, Suku Melayu, dan Suku Aceh. Daerah pesisir Sumatera Utara tepatnya timur dan barat didiami oleh Suku Melayu dan Suku Mandailing.
              Suku Batak banyak mendiami di daerah pegunungan, dan Suku Nias yang mendiami kepulauan sebelah barat. Sumatera Utara dengan keragaman adat dan budayanya 
              berhasil mempesona dan menarik kita untuk mengapresiasi serta mempelajarinya. 
            </p>
          </CardContent>
        </Card>

        <Card className='mx-10 flex w-11/12 rounded-2xl bg-krem shadow-xl' data-aos="fade-left">
          <CardContent className='m-10 flex flex-col justify-end items-end ml-auto w-3/5'>
            <CardTitle className='items-end ml-auto text-right'>Mandok Hata</CardTitle>
            <p className='items-end ml-auto text-justify'>Mandok Hata merupakan salah satu tradisi dari suku Batak. Mandok Hata berasal dari kata Mandok yang berarti menyampaikan dan Hata yang berarti kata. 
              Mandok Hata sendiri memiliki pengertian penyampaian sepatah dua patah kata yang dilakukan seseorang di acara tertentu. Umumnya Mandok Hata ini dilakukan saat perayaan malam tahun baru. Mandok Hata yang dilakukan pada 
              perayaan malam tahun baru, dimana semua keluarga berkumpul baik dari kalangan muda sampai tua. Mandok Hata memiliki tujuan sebagai ucapan syukur, permohonan maaf atas apa yang terjadi selama setahun kebelakang, serta 
              mengungkapkan harapan kedepan supaya menjadi lebih baik kedepan.
            </p>
          </CardContent>
          <div className='overflow-hidden w-full rounded-tr-2xl rounded-br-2xl flex-grow'>
              <img src={gambarMandokhata} className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out w-full h-full object-cover'/>
          </div>
        </Card>
      
        <Card className='m-10 flex w-11/12 rounded-2xl bg-krem shadow-xl' data-aos="fade-right">
          <div className='overflow-hidden w-full rounded-tl-2xl rounded-bl-2xl flex-grow'>
              <img src={gambarLompatbatu} className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out w-full h-11/12 object-cover'/>
          </div>
          <CardContent className='m-10 flex flex-col items-start ml-auto w-3/5'>
            <CardTitle className=''>Fahombo</CardTitle>
            <p className='items-end ml-auto text-justify'>Fahombo atau hombo merupakan tradisi lompat batu yang berasal dari Suku Nias. Tradisi Fahombo ini sudah diwariskan secara turun-temurun dan merupakan suatu kebanggaan tersendiri 
            bagi masyarakat Suku Nias. Fahombo ini diwariskan kepada anak laki-laki, mereka telah dilatih sejak kecil. Fahombo dilakukan oleh para pemuda laki-laki dengan cara melompati tumpukan batu kurang lebih tingginya 2 hingga 2,2 meter 
            tanpa menyentuh permukaan batu sedikitpun untuk menunjukkan bahwa mereka tangguh dan pantas dianggap dewasa secara fisik. Awalnya Fahombo ini merupakan kebiasaan berperang antar desa suku-suku di pulau Nias. Sebagai ritual bagi para pria 
            suku Nias yang akan menjadi seseorang prajurit. Ketika pria berhasil melompati susunan batu tersebut, baru dia boleh ikut berperang. Sekarang Fahombo dipertunjukkan sebagai atraksi dan simbol budaya Suku Nias untuk mengisi acara yang
            biasanya ditampilkan bersama atraksi perang.
            </p>
          </CardContent>
        </Card>

        <h1 className='flex justify-center items-center m-10 text-3xl font-rubik' data-aos='fade-up'>Pakaian Adat</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 3,
        }}
        pagination={{el:'', clickable:true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        initialSlide={3}
        loop={true}
        className='my-10'
        data-aos="fade-up"
      >
        <div className='swiper-button-prev text-krem bg-hijau1'></div>
            <SwiperSlide className='w-1/2'>
              <div className="relative group overflow-hidden rounded-t-2xl">
                <img src={gambarBajuBatakToba} className='object-cover w-full h-full'/>
                <p className={styleHoverSlider}>Menggunakan kain tenunan yang khas yaitu Ulos. Umumnya warna benang yang terdapat pada Ulos ada putih, emas, merah, hitam ataupun perak. 
                Untuk pakaian pria, bagian atasnya disebut Ampe-Ampe dan bagian bawah disebut Singkot. Sedangkan untuk pakaian perempuan, bagian atas disebut Hoba-Hoba dan bagian bawah disebut Haen.</p>
              </div>
              <h1 className="flex justify-center bg-krem rounded-b-2xl">Suku Batak Toba</h1>
            </SwiperSlide>
            <SwiperSlide className='w-1/2'>
              <div className="relative group overflow-hidden rounded-t-2xl">
                <img src={gambarBajuKaro} className='object-cover w-full h-full'/>
                <p className={styleHoverSlider}>Menggunakan kain tenun khusus yang terbuat dari pintalan kapas disebut dengan Uis Gara. Proses pembuatan Uis Gara menggunakan benang berwarna merah yang 
                kadang dipadukan dengan warna hitam dan putih serta dihiasi tenunan benang warna emas dan perak. Biasanya Uis Gara digunakan saat kegiatan sehari-hari dan upacara adat. Cara pengunaannya 
                juga berbeda-beda bergantung pada acaranya, oleh karena itu tiap-tiap penggunaan memiliki makna dan simbol yang berbeda. </p>
              </div>
              <h1 className="flex justify-center bg-krem rounded-b-2xl">Suku Karo</h1>
            </SwiperSlide>
            <SwiperSlide className='w-1/2'>
              <div className="relative group overflow-hidden rounded-t-2xl">
                <img src={gambarBajuPakpak} className='object-cover w-full h-full'/>
                <p className={styleHoverSlider}>Menggunakan kain tenun khas yang bernama Oles. Pakaian adat Suku Pakpak didominasi oleh warna hitam yang dibuat dengan bahan dasar katun dan perpaduan kain Oles, 
                biasanya pakaian ini disebut sebagai baju merapi-api. Pada laki-laki pakaian adatnya disebut Borgot yang dipadukan dengan celana hitam dan sarung Sidosdos, sedangkan pada perempuan pakaian adatnya 
                disebut Cimata yang dipadukan dengan sarung Oles Perdabaitak yang dililitkan pada pinggang dengan melingkar. </p>
              </div>
              <h1 className="flex justify-center bg-krem rounded-b-2xl">Suku Pak Pak</h1>
            </SwiperSlide>
            <SwiperSlide className='w-1/2'>
              <div className="relative group overflow-hidden rounded-t-2xl">
                <img src={gambarBajuMelayu} className='object-cover w-full h-full'/>
                <p className={styleHoverSlider}>Seperti kebanyakan pakaian adat Melayu, pakaian adat Suku Melayu mengenakan Baju Kurung yang dilengkapi oleh balutan Kain Songket. Untuk perempuan, menggunakan 
                Baju Kurung atau Kebaya Panjang dipadukan dengan Songket. Bahan dari Baju Kurung khusus perempuan ini terbuat dari Kain Brokat atau Kain Sutra. Sementara pada laki-laki menggunakan Teluk Balaga 
                yang dipadukan dengan Tengkulok dan Lengas sebagai lambang kebesaran dan kegagahan.</p>
              </div>
              <h1 className="flex justify-center bg-krem rounded-b-2xl">Suku Melayu</h1>
            </SwiperSlide>
            <SwiperSlide className='w-1/2'>
              <div className="relative group overflow-hidden rounded-t-2xl">
                <img src={gambarBajuAngkola} className='object-cover w-full h-full'/>
                <p className={styleHoverSlider}>Menggunakan bahan dasar Kain Ulos dengan dominasi warna hitam juga perpaduan warna merah. Pakaian suku Angkola memiliki kemiripan dengan pakaian Suku Mandailing, 
                namun perbedaannya terletak pada pakaian perempuan yang didominasi warna merah dipadukan dengan selendang yang diselempangkan dan pada pakaian laki-laki, hiasan kepalanya serupa dengan Suku Mandailing 
                namun dengan aksesoris tambahan penutup kepala yang disebut Ampu. </p>
              </div>
              <h1 className="flex justify-center bg-krem rounded-b-2xl">Suku Angkola</h1>
            </SwiperSlide>
        <div className='swiper-button-next text-krem bg-hijau1'></div>
        </Swiper>

        <h1 className='flex justify-center items-center m-10 text-3xl font-rubik' data-aos='fade-up'>Alat Musik</h1>
        <div className='flex flex-row flex-wrap justify-center space-y' data-aos='fade-up'>
          <Card className={getCardClasses('gordang')} onClick={() => handleCardClick('gordang')}>
            <CardContent className={styleMusic}>
                <CardTitle className='flex items-center justify-center'>Gordang Sambilan</CardTitle>
                <p className="text-justify">Berasal dari Suku Mandailing. Terdiri atas 9 gendang dimana setiap gendang memiliki ukuran dan panjang diameter yang berbeda sehingga karakter suara yang berbeda. Gordang Sambilan dimainkan saat ada upacara adat misal seperti pernikahan atau pemakaman diperlukan bisa sampai 6 orang untuk memainkannya.</p>
            </CardContent>
            <div className='w-full'>
              <img src={gambarGordangSambilan} onClick={() => handleImageClick('gordang')} className='rounded-b-2xl object-cover w-full h-full cursor-pointer'/>
            </div>
          </Card>

          <Card className={getCardClasses('taganing')} onClick={() => handleCardClick('taganing')}>
            <CardContent className={styleMusic}>
                <CardTitle className='flex items-center justify-center'>Taganing</CardTitle>
                <p className="text-justify">Berasal dari Suku Batak Toba. Terdiri atas 5 gendang yang masing-masing memiliki nada yang berbeda. Dimainkan dengan cara dipukul dengan tangan atau alat khusus. Taganing memiliki peranan sangat penting dalam penyelenggaraan pertunjukan musik Gondang karena sebagai pilar utama pembentuk struktur musik Gondang.</p>
            </CardContent>
            <div className='w-full'>
              <img src={gambarTaganing} onClick={() => handleImageClick('taganing')} className='rounded-b-2xl object-cover w-full h-full cursor-pointer'/>
            </div>
          </Card>

          <Card className={getCardClasses('faritia')} onClick={() => handleCardClick('faritia')}>
            <CardContent className={styleMusic}>
                <CardTitle className='flex items-center justify-center'>Faritia</CardTitle>
                <p className="text-justify">Berasal dari Suku Nias. Memiliki bentuk mirip dong dengan diameter yang lebih kecil sekitar 20cm hingga 30cm, ketebalannya hingga 4cm, dan bagian tengah yang menonjol. Dimainkan dengan cara dipukul menggunakan pemukul bagian tengah atau tepinya. Faritia biasanya dimainkan sebagai bagian dari ansambel musik khas Nias. </p>
            </CardContent>
            <div className='w-full'>
              <img src={gambarFaritia} onClick={() => handleImageClick('faritia')} className='rounded-b-2xl object-cover w-full h-full cursor-pointer' />
            </div>
          </Card>

          <Card className={getCardClasses('balobat')} onClick={() => handleCardClick('balobat')}>
            <CardContent className={styleMusic}>
                <CardTitle className='flex items-center justify-center'>Balobat</CardTitle>
                <p className="text-justify">Berasal dari Suku Karo. Berbentuk menyerupai seruling rekorder, namun dengan ukuran yang lebih kecil serta nada yang berbeda. Cara memainkan alat musik ini dengan meniup menggunakan mulut untuk menghasilkan suara melalui lubang-lubang di bambu. Balobat dapat dimainkan secara solo maupun dalam kelompok musik tradisional.</p>
            </CardContent>
            <div className='w-full'>
              <img src={gambarBalobat} onClick={() => handleImageClick('balobat')} className='rounded-b-2xl object-cover w-full h-full cursor-pointer'/>
            </div>
          </Card>

          <Card className={getCardClasses('doli')} onClick={() => handleCardClick('doli')}>
            <CardContent className={styleMusic}>
                <CardTitle className='flex items-center justify-center'>Doli-Doli</CardTitle>
                <p className="text-justify">Berasal dari Suku Nias. Berbentuk menyerupai Kolintang, namun dengan ukuran yang lebih kecil. Cara memainkannya dipukul, ketika dipukul akan menghasilkan pola bunyi yang khas. Umumnya dimainkan sebagai sarana hiburan saat di ladang, dalam suasana dukacita/kesepian, dan upacara adat dalam konteks keagamaan. </p>
            </CardContent>
            <div className='w-full'>
              <img src={gambarDolidoli} onClick={() => handleImageClick('doli')} className='rounded-b-2xl object-cover w-full h-full cursor-pointer'/>
            </div>
          </Card>
        </div>

    </div>  
    </>
  )
}
