import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from 'react-modal';
import classNames from 'classnames';
import { PiPause } from 'react-icons/pi';
import { RxResume } from "react-icons/rx";
import danauToba from '../assets/Wisata/danauToba.jpeg';
import danauToba2 from '../assets/Wisata/danauToba2.jpg';
import gunungSibayak from '../assets/Wisata/gunungSibayak.jpg';
import gunungSibayak2 from '../assets/Wisata/gunungSibayak2.jpg';
import bukitLawang from '../assets/Wisata/bukitLawang.jpg';
import bukitLawang2 from '../assets/Wisata/bukitLawang2.jpg';
import airTerjunSipisoPiso from '../assets/Wisata/airTerjunSipisoPiso.jpg';
import airTerjunSipisoPiso2 from '../assets/Wisata/airTerjunSipisoPiso2.jpg';
import gunungSinabung from '../assets/Wisata/gunungSinabung.jpg';
import gunungSinabung2 from '../assets/Wisata/gunungSinabung2.jpg';
import bukitGundaling from '../assets/Wisata/bukitGundaling.jpg';
import bukitGundaling2 from '../assets/Wisata/bukitGundaling2.jpg';
import tamanLumbini from '../assets/Wisata/tamanLumbini.jpg';
import tamanLumbini2 from '../assets/Wisata/tamanLumbini2.jpg';
import pulauBerhala from '../assets/Wisata/pulauBerhala.jpg';
import pulauBerhala2 from '../assets/Wisata/pulauBerhala2.jpg';
import bukitHolbung from '../assets/Wisata/bukitHolbung.jpg';
import bukitHolbung2 from '../assets/Wisata/bukitHolbung2.jpg';
import airTerjunEfrata from '../assets/Wisata/airTerjunEfrata.jpg';
import airTerjunEfrata2 from '../assets/Wisata/airTerjunEfrata2.jpg';
import topVideo from '../assets/Wisata/NorthSumatra.mp4';

AOS.init({ once: true });

async function fetchWeatherData(location) {
  try {
    const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
      params: {
        key: 'd2016f8c25a140cbbca44006240805',
        q: location,
      },
    });
    return response.data.current;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function BoxSet({ headerText, videoSrc, imageSrc, imageSrc2, imageSrc3, text1, text2, location }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(location).then(data => setWeatherData(data));
  }, [location]);

  return (
    <div className="box-set">
      {/* Header */}
      <div className="text-center">
        <div className="relative inline-block mb-1">
          <h1 className="text-5xl font-bold inline-block text-gading">{headerText}</h1>
        </div>
      </div>

      <hr className="m-5 border border-b-2 w-1/2 mx-auto text-sm lines" />

      {/* Video or Image */}
      <div className="container mx-auto mt-4 relative">
        <div className="w-full p-4 bg-gray-200 border border-gading" style={{ paddingBottom: '75%', position: 'relative', overflow: 'hidden' }}>
          {videoSrc && (
            <iframe
              width="100%"
              height="100%"
              src={videoSrc}
              title="Embedded Video"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          )}
          <div className="absolute bottom-4 sm:bottom-11 left-0 p-2 sm:p-4 bg-gray-800 bg-opacity-75 backdrop-blur-md text-white">
            <p className="text-xs sm:text-lg font-bold">
              {weatherData ? (
                <>
                  Suhu: {weatherData.temp_c} °C <br />
                  Kelembaban: {weatherData.humidity}% <br />
                  Awan: {weatherData.cloud}% <br />
                  Arah Angin: {weatherData.wind_degree} °
                </>
              ) : (
                'Loading weather data...'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="container mx-auto mt-4 flex flex-col md:flex-row flex-col-reverse">
        <div className="w-full md:w-2/3 p-4 bg-krem border border-mas md:mr-4 mb-4 md:mb-0">
          <p className="text-xs lg:text-lg text-justify">{text1}</p>
        </div>
        <div className="w-full md:w-1/3 p-4 bg-green-200 border border-mas relative overflow-hidden mb-4 md:mb-0 h-64 md:h-auto">
          <img src={imageSrc2} alt="" className="block absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        </div>
      </div>

      {/* Text content */}
      <div className="container mx-auto mt-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 bg-yellow-200 border border-mas md:mr-4 relative overflow-hidden h-64 md:h-auto">
          <img src={imageSrc3} alt="" className="block absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        </div>
        <div className="w-full md:w-2/3 p-4 bg-krem border border-mas mt-4 md:mt-0">
          <p className="text-xs lg:text-lg text-justify">{text2}</p>
        </div>
      </div>
    </div>
  );
}
export default function Wisata() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const destinations = [
    {
      headerText: "Danau Toba",
      videoSrc: "https://www.youtube.com/embed/yTBjL2cTiuI?si=WZUJiXNcLK6uo0Ps",
      imageSrc2: danauToba,
      imageSrc3: danauToba2,
      text1: "Danau Toba, yang dikenal sebagai Tao Toba dalam Bahasa Batak, adalah danau alami berukuran besar yang terletak di kaldera gunung supervulkan. Dengan panjang 100 kilometer, lebar 30 kilometer, dan kedalaman mencapai 508 meter, Danau Toba adalah danau terbesar di Indonesia dan juga danau vulkanik terbesar di dunia. Terletak di tengah bagian utara pulau Sumatra, dengan ketinggian permukaan sekitar 900 meter, Danau Toba menawarkan pemandangan yang mempesona dan tak terlupakan.",
      text2: "Danau Toba bukan hanya tentang keindahan alam semata, tetapi juga tentang sejarah dan budaya yang kaya. Danau ini adalah situs letusan supervulkan yang diperkirakan terjadi 69.000 hingga 77.000 tahun yang lalu, mewakili peristiwa perubahan iklim. Letusan ini adalah letusan eksplosif terbesar di Bumi dalam 25 juta tahun terakhir. Menurut teori bencana Toba, letusan ini memiliki konsekuensi global bagi populasi manusia karena membunuh sebagian besar manusia yang hidup pada waktu itu. Danau Toba juga merupakan salah satu dari dua puluh taman geologi di Indonesia, dan diakui pada Juli 2020 sebagai salah satu Geopark Global UNESCO.",
      location: "2.68,98.87"
    },
    {
      headerText: "Gunung Sibayak",
      videoSrc: "https://www.youtube.com/embed/15UeixJTBng?si=qZIEOOg7NZbfBYvw",
      imageSrc2: gunungSibayak,
      imageSrc3: gunungSibayak2,
      text1: "Gunung Sibayak, yang dikenal sebagai “gunung raja” oleh masyarakat Karo, adalah gunung berapi aktif yang terletak di Kabupaten Karo, Sumatera Utara. Dengan ketinggian mencapai 2.212 meter, Gunung Sibayak menawarkan pemandangan alam yang memukau dan petualangan mendaki yang menantang. Di puncaknya, pendaki dapat melihat kawah yang mengeluarkan asap belerang dan menikmati pemandangan matahari terbit yang menakjubkan. Gunung Sibayak juga merupakan tempat yang populer bagi para pendaki pemula karena jalur pendakiannya yang relatif mudah dijangkau.",
      text2: "Selain keindahan alamnya, Gunung Sibayak juga memiliki nilai budaya yang tinggi bagi masyarakat Karo. Setiap tahunnya, masyarakat Karo mengadakan upacara adat di gunung ini sebagai bentuk syukur kepada Tuhan Yang Maha Esa. Gunung ini juga dipercaya memiliki kekuatan spiritual dan sering dikunjungi oleh mereka yang mencari ketenangan batin. Dengan keindahan alam dan nilai budayanya, Gunung Sibayak menjadi salah satu destinasi wisata yang wajib dikunjungi di Sumatera Utara.",
      location: "3.20,98.52"
    },
    {
      headerText: "Bukit Lawang",
      videoSrc: "https://www.youtube.com/embed/XcV1TRntRhs?si=HjZn8cxGgumd7weS",
      imageSrc2: bukitLawang,
      imageSrc3: bukitLawang2,
      text1: "Bukit Lawang adalah sebuah desa wisata yang terletak di tepi Sungai Bahorok di Kabupaten Langkat, Sumatera Utara. Desa ini terkenal sebagai pintu gerbang menuju Taman Nasional Gunung Leuser, salah satu kawasan konservasi terpenting di Indonesia. Bukit Lawang adalah tempat yang ideal untuk menjelajahi hutan hujan tropis Sumatera dan melihat langsung orangutan Sumatera yang terancam punah. Selain itu, desa ini juga menawarkan berbagai aktivitas ekowisata seperti trekking, tubing di sungai, dan berinteraksi dengan satwa liar lainnya.",
      text2: "Bukit Lawang bukan hanya tentang keindahan alam, tetapi juga tentang komunitas yang ramah dan budaya yang kaya. Desa ini dihuni oleh masyarakat yang sebagian besar bekerja sebagai pemandu wisata dan pengelola homestay. Mereka dengan hangat menyambut wisatawan dan berbagi pengetahuan mereka tentang lingkungan sekitar dan konservasi satwa liar. Dengan kombinasi antara keindahan alam dan keramahan penduduk lokal, Bukit Lawang menjadi destinasi wisata yang tak terlupakan di Sumatera Utara.",
      location: "3.54,97.52"
    },
    {
      headerText:"Air Terjun Sipiso Piso",
      videoSrc: "https://www.youtube.com/embed/NNwMAIP_5x8?si=ebcjjca2W5LQHV36",
      imageSrc2: airTerjunSipisoPiso,
      imageSrc3: airTerjunSipisoPiso2,
      text1: "Air Terjun Sipiso Piso adalah air terjun yang berada di Desa Tongging, Kecamatan Merek, Kabupaten Karo, Provinsi Sumatra Utara. Air terjun ini memiliki ketinggian hingga 120 meter dan airnya mengucur begitu deras membentuk garis vertikal yang terlihat sempurna. Air terjun ini terbentuk oleh aliran Sungai Asahan yang bermula dari Danau Toba. Aliran sungai tersebut kemudian jatuh dari tebing batu kapur yang menjulang tinggi membentuk air terjun yang indah.",
      text2: "Nama piso pada air terjun ini diambil dari kata “piso” yang berarti pisau. Sebab, jika melihat air terjun ini dari kejauhan, bentuknya seperti pisau kecil dan panjang. Di sekitar air terjun, terdapat pepohonan yang rimbun dan hijau, serta perkebunan kopi yang memberikan pemandangan yang memukau. Melalui air terjun ini, kamu bisa melihat bukit, benatangan Pulau Samosir, hingga pematang sawah dan ladang. Air Terjun Sipiso Piso menawarkan berbagai aktivitas menarik bagi para pengunjung. Anda bisa menikmati air terjun dari dekat, berjalan-jalan di sekitar hutan, atau bahkan mencoba berbagai aktivitas olahraga di sekitar air terjun.",
      location: "2.916837,98.519285"
},
    {
      headerText: "Gunung Sinabung",
      videoSrc: "https://www.youtube.com/embed/Hr3xnctkW5c?si=gHfWppjUQ10voCxo",
      imageSrc2: gunungSinabung,
      imageSrc3: gunungSinabung2,
      text1: "Gunung Sinabung adalah gunung berapi aktif yang terletak di Dataran Tinggi Karo, Kabupaten Karo, Sumatera Utara, Indonesia. Gunung ini memiliki ketinggian sekitar 2.460 meter di atas permukaan laut dan terletak sekitar 40 km di sebelah barat laut kota Medan. Gunung Sinabung bersama Gunung Sibayak di dekatnya adalah dua gunung berapi aktif di Sumatera Utara dan menjadi puncak tertinggi kedua di provinsi tersebut setelah Gunung Sibuatan.",
      text2: "Gunung Sinabung adalah gunung berapi strato berbentuk kerucut dan termasuk dalam Tipe-A, yaitu kelompok gunung api yang pernah mengalami erupsi magmatik sekurang-kurangnya satu kali sesudah tahun 1600 Masehi. Gunung ini tidak pernah tercatat meletus sejak tahun 1600, tetapi beberapa tahun silam, Gunung Sinabung mendadak aktif kembali dengan meletus pada tanggal 27 Agustus 2010. Letusan terakhirnya diperkirakan sekitar tahun 800.",
      location: "3.170780,98.391630"
    },
    {
      headerText: "Bukit Gundaling",
      videoSrc: "https://www.youtube.com/embed/xUByowUIu48?si=ueJKhr5NNqOHWKzU",
      imageSrc2: bukitGundaling,
      imageSrc3: bukitGundaling2,
      text1: "Bukit Gundaling adalah sebuah destinasi wisata yang terletak di Kecamatan Brastagi dan Merdeka, Kabupaten Karo, Sumatera Utara. Bukit ini berada di ketinggian sekitar 1.500 meter di atas permukaan laut, sehingga suasana di sekitar bukit sangat sejuk. Bukit Gundaling menawarkan panorama alam yang memukau, termasuk pemandangan Gunung Sibayak, Gunung Sinabung, Kota Brastagi, dan lahan pertanian. Bukit ini juga banyak ditumbuhi pohon pinus, memberikan suasana yang segar dan menenangkan.",
      text2: "Bukit Gundaling memiliki berbagai daya tarik yang membuatnya menjadi favorit wisatawan. Di kawasan ini, Anda dapat menemukan bunga-bunga indah dan patung manusia yang menggunakan pakaian khas suku Batak Karo. Jika Anda merasa lelah setelah menyusuri bukit, tersedia bangku dan batu besar yang dapat digunakan untuk duduk atau Anda bisa menyewa tikar. Banyak wisatawan yang datang ke Bukit Gundaling sambil membawa bekal kemudian makan bersama di puncak bukit.",
      location: "3.193435,98.501538"
    },
    {
      headerText: "Taman Alam Lumbini",
      videoSrc: "https://www.youtube.com/embed/H_ZT1Q4WtPE?si=5c14HqZVr5Y-0XOJ",
      imageSrc2: tamanLumbini,
      imageSrc3: tamanLumbini2,
      text1: "Taman Alam Lumbini adalah sebuah taman yang terletak di Desa Dolat Rayat, Kota Brastagi, Sumatera Utara. Taman ini merupakan replika dari Pagoda Shwedagon yang berada di negara Myanmar. Dengan luas kawasan kurang lebih 3 hektar, taman ini dipusatkan sebagai tempat peribadatan dan wisata religi agama Buddha. Bangunan dengan tinggi 46,8 meter, panjang 68 meter, dan lebar 68 meter ini menjadi salah satu replika Pagoda Shwedagon terbesar di luar Negara Myanmar.",
      text2: "Nama Lumbini merujuk pada taman tempat kelahiran dari Sang Buddha atau Siddartha Gautama. Taman ini memiliki berbagai daya tarik, di antaranya kemegahan bangunan Pagoda Emas yang merupakan replika dari Pagoda Shwedagon Myanmar. Selain itu, letaknya yang berada di dataran tinggi membuat taman ini memiliki suasana yang sejuk. Hal ini didukung dengan area taman yang asri dan alami. Melihat Kemegahan dan Keindahan Pagoda Pagoda Emas selain sebagai tempat ibadah umat Buddha, kuil ini juga terbuka untuk umum sebagai tempat wisata.",
      location: "3.196184,98.540759"
    },
    {
      headerText: "Pulau Berhala",
      videoSrc: "https://www.youtube.com/embed/8icgNqxoTk0?si=r8YIhfZ8_6Ez91Oz",
      imageSrc2: pulauBerhala,
      imageSrc3: pulauBerhala2,
      text1: "Pulau Berhala adalah sebuah pulau yang terletak di Selat Malaka dan masih termasuk dalam wilayah administratif provinsi Jambi. Pulau ini memiliki luas sekitar dan merupakan pulau terluar Indonesia di Selat Malaka dan berbatasan dengan negara Malaysia. Pulau ini dijaga oleh Tentara Nasional Indonesia (TNI) karena statusnya sebagai pulau terluar. Pulau Berhala memiliki topografi bergunung dengan hutan lebat dan pantai yang putih bersih.",
      text2: "Pulau Berhala menawarkan pantai eksotis dengan pasir putih yang bersih. Pulau ini memiliki pemandangan khas dengan pantai-pantai di sekitar Riau yang berbatu besar dan bersih. Pada awal dan akhir tahun, pantai Pulau Berhala menjadi tempat persinggahan penyu untuk bertelur. Pulau ini juga menyimpan warisan berupa benteng kuno yang dibangun oleh Jepang serta meriam peninggalan masa penjajahan Belanda.",
      location: "3.613502,99.309983"
    },
    {
      headerText: "Bukit Holbung",
      videoSrc: "https://www.youtube.com/embed/9arlqJFMaLY?si=MBSzou2HMqoMFtaP",
      imageSrc2: bukitHolbung,
      imageSrc3: bukitHolbung2,
      text1: "Bukit Holbung, juga dikenal sebagai Bukit Teletubbies oleh masyarakat setempat, adalah sebuah destinasi wisata alam yang terletak di Dolok Raja, Kecamatan Harian, Kabupaten Samosir, Sumatera Utara. Bukit ini menawarkan pemandangan yang spektakuler, udara yang segar, dan pemandangan alam yang memesona bagi para pengunjung. Dari puncak bukit, Anda akan disuguhi panorama alam yang luar biasa, termasuk hamparan perbukitan hijau yang bergelombang dan pemandangan Danau Toba.",
      text2: "Salah satu daya tarik utama Bukit Holbung adalah pemandangannya yang menakjubkan. Terutama saat matahari terbit atau terbenam, pemandangan ini menjadi lebih dramatis dengan warna-warna yang indah. Bagi yang suka petualangan, Bukit Holbung juga menawarkan jalur hiking yang menantang. Selain mendaki ke puncak bukit, mayoritas pengunjung juga mengunjungi Bukit ini untuk berkemah. Menghabiskan malam di kawasan bukit ini dengan berkemah adalah pengalaman yang sangat berkesan.",
      location: "2.533800,98.701067"
    },
    {
      headerText: "Air Terjun Efrata",
      videoSrc: "https://www.youtube.com/embed/fy2zrKdw6pY?si=MrwsDQ8uErgb7g-1",
      imageSrc2: airTerjunEfrata,
      imageSrc3: airTerjunEfrata2,
      text1: "Air Terjun Efrata adalah sebuah wisata air terjun yang berlokasi di Desa Sosor Dolok, Kecamatan Harian, Kabupaten Samosir, Provinsi Sumatera Utara. Air terjun ini memiliki ketinggian sekitar 20 meter dan menawarkan keindahan dengan bentangan air yang jatuh keras dan melebar. Pesona air terjun yang luar biasa indah ini sudah terlihat jelas sejak di area parkir. Lokasinya tidak jauh dari Objek Wisata Menara Pandang Tele, sebuah menara yang sering dijadikan spot untuk menikmati keindahan alam serasa berada di atas awan.",
      text2: "Air Terjun Efrata memiliki beberapa daya tarik, yaitu sebagai berikut. Pertama, pemandangan Danau Toba yang bisa dinikmati selama perjalanan menuju air terjun ini. Kedua, udara sejuk di sekitar air terjun ini yang lebih sejuk dan cenderung dingin. Ketiga, fasilitas yang ada di sekitar kawasan wisata Air Terjun Efrata diantaranya: Area parkir kendaraan, warung makanan dan minuman, spot foto, toilet, dan gazebo.",
      location: "2.537669,98.644939"
    },
  ];

  const openModal = (destination) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  const toggleVideo = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play(); // If video is paused, play it
      setVideoPlaying(true); // Update videoPlaying state
    } else {
      video.pause(); // If video is playing, pause it
      setVideoPlaying(false); // Update videoPlaying state
      // Ensure video remains visible when paused
      video.style.visibility = "visible";
    }
  };

  return (
    <div className='mb-10'>
      {/* Full-width video container with text */}
      <div className="relative mb-20">
        <video
          ref={videoRef}
          autoPlay
          loop
          className="w-full h-20 lg:h-auto border border-b-2 border-black flex items-center justify-center HomeVideo"
          src={topVideo}
        />
        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold lg:text-8xl" data-aos="zoom-in">
          Discover North Soematra
        </div>
        {/* Pause button with PiPause icon */}
        <button
          className="absolute bottom-2 right-2 bg-gray-300 bg-opacity-50 text-white px-4 py-2 rounded-md"
          onClick={toggleVideo}
        >
          {videoPlaying ? <PiPause /> : <RxResume />}
        </button>
      </div>
  
      {/* Change header text to "Destinations" */}
      <div className="text-center" data-aos="fade-up">
        <div className="relative inline-block mb-1">
          <h1 className="text-2xl font-bold inline-block text-gading lg:text-5xl l">Destinations</h1> {/* Added sm:text-2xl for mobile size */}
        </div>
      </div>
      <hr className="m-5 border border-b-2 w-1/2 mx-auto text-sm lines" data-aos="fade-up"/>
  
      {/* List of destinations */}
      <div className="destination-container">
        <div className="destination-list">
          {destinations.map((destination, index) => {
            return (
              <div key={index} className="destination-item" onClick={() => openModal(destination)} data-aos="fade-up">
                <img src={destination.imageSrc2} alt={destination.headerText} />
                <h2>{destination.headerText}</h2>
              </div>
            );
          })}
        </div>
      </div>
      {/* Modal for displaying the full BoxSet */}
      {selectedDestination && (
        <Modal isOpen={true} onRequestClose={closeModal} contentLabel="Destination Details" className="modal" overlayClassName="overlay" data-aos="zoom-in">
          <BoxSet {...selectedDestination} />
        </Modal>
      )}        
        // CSS styles
      {/* CSS styles */}
      <style jsx>{`
  /* General styles */
  .wisata-container {
    position: relative;
    padding: 20px;
    color: #333;
  }

  /* Video background */
  .video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  .video-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Destination container */
  .destination-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .destination-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  .destination-item {
    flex: 1 1 calc(50% - 20px);
    cursor: pointer;
    transition: transform 0.3s ease; /* Ensure the transition property is properly set */
    position: relative;
    overflow: hidden; /* Add this to hide the overlay */
  }
  @media screen and (max-width: 767px) {
    .destination-item {
      flex-basis: 100%;
    }
  }
  .destination-item:hover {
    transform: scale(1.05);
  }
  .destination-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: filter 0.3s ease; /* Ensure the transition property is properly set */
  }
  .destination-item:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    z-index: 1; /* Ensure it's above the image */
    transition: opacity 0.3s ease;
  }
  .destination-item h2 {
    text-align: center;
    margin-top: 10px;
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }
  .grayscale img {
    filter: grayscale(100%);
  }

  /* Modal */
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-height: 80%;
    overflow-y: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    background: #571e03;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 5000;
    animation: fadeIn 0.3s ease-out;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 999;
    animation: fadeIn 0.7s ease-out;
  }

  /* Media queries */
  @media screen and (max-width: 767px) {
    .img-mobile {
      width: 100%;
      height: 300px;
    }
  }
`}</style>
</div>
  );
}