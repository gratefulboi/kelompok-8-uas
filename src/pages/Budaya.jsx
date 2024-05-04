import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import {Swiper, SwiperSlide, EffectCoverFlow, Pagination, Navigation} from 'swiper'
import 'swiper/css/bundle'

import gambarMain from '../assets/budaya.jpg'
import gambarMandokhata from '../assets/Images/mandokhata.jpg'
import gambarLompatbatu from '../assets/Images/lompatbatu.png'



export default function Budaya() {
  return (
    <>
    <div className='m-10 flex flex-col justify-center items-center'>
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

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          sliderPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className='swiper_container'
        >
            <SwiperSlide>
              <img src={gambarLompatbatu} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={gambarLompatbatu} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={gambarLompatbatu} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={gambarLompatbatu} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={gambarLompatbatu} />
            </SwiperSlide>
        </Swiper>

    </div>


      

    
    </>
  )
}
