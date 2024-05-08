import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import danauToba from '../assets/Images/danauToba.jpeg';
import danauToba2 from '../assets/Images/danauToba2.jpg';
import gunungSibayak from '../assets/Images/gunungSibayak.jpg';
import gunungSibayak2 from '../assets/Images/gunungSibayak2.jpg';
import bukitLawang from '../assets/Images/BukitLawang.jpg';
import bukitLawang2 from '../assets/Images/BukitLawang2.jpg';
import airTerjunSipisoPiso from '../assets/Images/AirTerjunSipisoPiso.jpg';
import airTerjunSipisoPiso2 from '../assets/Images/AirTerjunSipisoPiso2.jpg';
import guaKelelawar from '../assets/Images/guaKelelawar.jpg';
import guaKelelawar2 from '../assets/Images/guaKelelawar2.jpg';
import bukitGundaling from '../assets/Images/bukitGundaling.jpg';
import bukitGundaling2 from '../assets/Images/bukitGundaling2.jpg';
import tamanLumbini from '../assets/Images/tamanLumbini.jpg';
import tamanLumbini2 from '../assets/Images/tamanLumbini2.jpg';
import pulauBerhala from '../assets/Images/pulauBerhala.jpg';
import pulauBerhala2 from '../assets/Images/pulauBerhala2.jpg';

// Initialize AOS
AOS.init({ once: true });

// Function to generate a set of boxes
function BoxSet({ headerText, imageSrc, imageSrc2, imageSrc3, text1, text2, text3 }) {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'YOUR_WEATHER_API_KEY';
  const API_URL = 'https://api.weatherapi.com/v1/current.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}?key=${API_KEY}&q=2.115355,99.545097&aqi=yes`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Weather data:', data); // Log the received weather data
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <>
      {/* Header */}
      <div className="text-center" data-aos="fade-up">
        <div className="relative inline-block mb-1">
          <h1 className="text-5xl font-bold inline-block">{headerText}</h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 mt-1"></div>
        </div>
      </div>

      {/* First box */}
      <div className="container mx-auto mt-4 relative pb-4" data-aos="fade-up">
        <div className="w-full p-4 bg-gray-200 border border-gray-400" style={{ paddingBottom: '37.5%', position: 'relative', overflow: 'hidden' }}>
          {/* Content of the first box */}
          <img src={imageSrc} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
          {/* Weather data container */}
          <div className="absolute bottom-0 left-0 p-4">
            {weatherData ? (
              <div>
                <p>Location: {weatherData.location.name}</p>
                <p>Temperature: {weatherData.current.temp_c}°C</p>
                <p>Condition: {weatherData.current.condition.text}</p>
                {/* Add more weather data here */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      {/* Second box */}
      <div className="container mx-auto mt-4 flex" data-aos="fade-up">
        <div className="w-2/3 p-4 bg-blue-200 border border-blue-400 mr-4">
          {/* Content of the second box */}
          <p>{text1}</p>
        </div>
        {/* Third box */}
        <div className="w-1/3 p-4 bg-green-200 border border-green-400 relative overflow-hidden">
          {/* Content of the third box */}
          <img src={imageSrc2} alt="" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        </div>
      </div>

      {/* Fourth box */}
      <div className="container mx-auto mt-4 flex" data-aos="fade-up">
        <div className="w-1/3 p-4 bg-yellow-200 border border-yellow-400 mr-4 relative overflow-hidden">
          {/* Content of the fourth box */}
          <img src={imageSrc3} alt="" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        </div>

        {/* Fifth box */}
        <div className="w-2/3 p-4 bg-purple-200 border border-purple-400">
          {/* Content of the fifth box */}
          <p>{text2}</p>
        </div>
      </div>
    </>
  );
}  
// Main component
export default function Wisata() {
  return (
    <div>
      {/* Full-width image container */}
      <div className="w-full mb-32">
        <img src={danauToba} alt="Full width" className="w-full h-auto" />
      </div>
      
      {/* Danau Toba*/}
      <div className="mb-12">
        <BoxSet 
          headerText="Danau Toba"
          imageSrc={danauToba}
          imageSrc2={danauToba}
          imageSrc3={danauToba2}
          text1="Danau Toba, yang dikenal sebagai Tao Toba dalam Bahasa Batak, adalah danau alami berukuran besar yang terletak di kaldera gunung supervulkan. Dengan panjang 100 kilometer, lebar 30 kilometer, dan kedalaman mencapai 508 meter, Danau Toba adalah danau terbesar di Indonesia dan juga danau vulkanik terbesar di dunia. Terletak di tengah bagian utara pulau Sumatra, dengan ketinggian permukaan sekitar 900 meter, Danau Toba menawarkan pemandangan yang mempesona dan tak terlupakan."
          text2="Danau Toba bukan hanya tentang keindahan alam semata, tetapi juga tentang sejarah dan budaya yang kaya. Danau ini adalah situs letusan supervulkan yang diperkirakan terjadi 69.000 hingga 77.000 tahun yang lalu, mewakili peristiwa perubahan iklim. Letusan ini adalah letusan eksplosif terbesar di Bumi dalam 25 juta tahun terakhir. Menurut teori bencana Toba, letusan ini memiliki konsekuensi global bagi populasi manusia karena membunuh sebagian besar manusia yang hidup pada waktu itu. Danau Toba juga merupakan salah satu dari dua puluh taman geologi di Indonesia, dan diakui pada Juli 2020 sebagai salah satu Geopark Global UNESCO."
          text3="Ini mau video"
        />
      </div>

      {/* Gunung Sibayak*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Gunung Sibayak"
          imageSrc={danauToba}
          imageSrc2={gunungSibayak}
          imageSrc3={gunungSibayak2}
          text1="Gunung Sibayak, yang dikenal sebagai “gunung raja” oleh masyarakat Karo, adalah gunung berapi aktif yang terletak di Kabupaten Karo, Sumatera Utara. Dengan ketinggian mencapai 2.212 meter, Gunung Sibayak menawarkan pemandangan alam yang memukau dan petualangan mendaki yang menantang. Gunung ini terkenal dengan fumarol belerangnya yang menguap, menciptakan lanskap yang penuh dengan lembah, sungai, dan batu-batuan vulkanik. Keindahan alam ini menawarkan banyak peluang untuk fotografi."
          text2="Gunung Sibayak merupakan destinasi pendakian yang populer karena akses menuju gunung ini cukup mudah. Ada tiga akses pendakian mulai desa Jaranguda (jalur wisata), Sidebuk 2 (semangat gunung), dan jalur 54 (penatapan). Jalur wisata adalah jalur yang paling direkomendasikan karena paling dekat, aman, dan singkat. Selain itu, pendakian ini memberikan pengalaman yang tak terlupakan, terutama saat matahari terbit. Dari puncak Gunung Sibayak, Anda dapat menikmati pemandangan Gunung Sinabung yang memiliki kerucut api yang sempurna."
          text3="Ini mau video"
        />
      </div>

      {/*Bukit Lawang*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Bukit Lawang"
          imageSrc={danauToba}
          imageSrc2={bukitLawang}
          imageSrc3={bukitLawang2}
          text1="Bukit Lawang adalah sebuah desa wisata yang terletak di Kecamatan Bohorok, Kabupaten Langkat, Provinsi Sumatera Utara. Desa ini berada di tepi hutan lebat Gunung Leuser National Park, membuat batas antara hutan dan desa menjadi kabur. Di sini, monyet bisa terlihat berlarian di atas atap rumah dan suara jangkrik bisa terdengar di malam hari. Desa ini menawarkan suasana yang damai dan santai, dengan sinar matahari yang kuat di pagi hari dan hujan lebat di sore dan malam hari."
          text2="Bukit Lawang dikenal sebagai tempat perlindungan hewan terbesar untuk orangutan Sumatera, dengan sejumlah orangutan yang mendiami area ini. Desa ini juga merupakan titik akses utama ke Gunung Leuser National Park dari sisi timur. Hutan hujan di sekitar Bukit Lawang adalah bagian dari Gunung Leuser National Park, salah satu ekosistem hutan tropis paling kaya dan beragam di planet ini. Selain orangutan, taman ini juga menjadi rumah bagi macan tutul, babun, macaque, dan monyet daun Thomas."
          text3="Ini mau video"
        />
      </div>
      {/*Air Terjun Sipiso Piso*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Air Terjun Sipiso Piso"
          imageSrc={danauToba}
          imageSrc2={airTerjunSipisoPiso}
          imageSrc3={airTerjunSipisoPiso2}
          text1="Air Terjun Sipiso Piso adalah air terjun yang berada di Desa Tongging, Kecamatan Merek, Kabupaten Karo, Provinsi Sumatra Utara. Air terjun ini memiliki ketinggian hingga 120 meter dan airnya mengucur begitu deras membentuk garis vertikal yang terlihat sempurna. Air terjun ini terbentuk oleh aliran Sungai Asahan yang bermula dari Danau Toba. Aliran sungai tersebut kemudian jatuh dari tebing batu kapur yang menjulang tinggi membentuk air terjun yang indah."
          text2="Nama piso pada air terjun ini diambil dari kata “piso” yang berarti pisau. Sebab, jika melihat air terjun ini dari kejauhan, bentuknya seperti pisau kecil dan panjang. Di sekitar air terjun, terdapat pepohonan yang rimbun dan hijau, serta perkebunan kopi yang memberikan pemandangan yang memukau. Melalui air terjun ini, kamu bisa melihat bukit, benatangan Pulau Samosir, hingga pematang sawah dan ladang. Air Terjun Sipiso Piso menawarkan berbagai aktivitas menarik bagi para pengunjung. Anda bisa menikmati air terjun dari dekat, berjalan-jalan di sekitar hutan, atau bahkan mencoba berbagai aktivitas olahraga di sekitar air terjun."
          text3="Ini mau video"
        />
      </div>

      {/*Gua Kelelawar*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Gua Kelelawar"
          imageSrc={danauToba}
          imageSrc2={guaKelelawar}
          imageSrc3={guaKelelawar2}
          text1="Gua Kelelawar adalah gua yang menjadi rumah bagi ribuan kelelawar. Gua ini terletak di berbagai lokasi di Indonesia, seperti di Pulau Sangiang, Banten, dan di Bukit Lawang, Kabupaten Langkat, Sumatera Utara. Gua ini menawarkan pengalaman wisata alam yang tak terlupakan. Tersembunyi di balik rimbunnya hutan hujan tropis, gua ini merupakan rumah bagi ribuan kelelawar yang menari dengan indah di langit-langit gua."
          text2="Keunikan dari Gua Kelelawar terletak pada penghuninya, yaitu kelelawar. Kelelawar adalah binatang malam, yang berburu pada malam hari di kegelapan dan tidur pada siang hari. Banyak jenis kelelawar tidur di dalam ceruk gua yang gelap dan lembap. Gua merupakan tempat bermalam dan berhibernasi yang sangat cocok bagi kelelawar karena suhu gua agak mantap bila dibandingkan dengan keadaan di luarnya. Yang juga penting bagi kelangsungan hidup kelelawar ialah selalu adanya kelembapan tinggi di dalam gua."
          text3="Ini mau video"
        />
      </div>

      {/*Bukit Gundaling*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Bukit Gundaling"
          imageSrc={danauToba}
          imageSrc2={bukitGundaling}
          imageSrc3={bukitGundaling2}
          text1="Bukit Gundaling adalah sebuah destinasi wisata yang terletak di Kecamatan Brastagi dan Merdeka, Kabupaten Karo, Sumatera Utara. Bukit ini berada di ketinggian sekitar 1.500 meter di atas permukaan laut, sehingga suasana di sekitar bukit sangat sejuk. Bukit Gundaling menawarkan panorama alam yang memukau, termasuk pemandangan Gunung Sibayak, Gunung Sinabung, Kota Brastagi, dan lahan pertanian. Bukit ini juga banyak ditumbuhi pohon pinus, memberikan suasana yang segar dan menenangkan."
          text2="Bukit Gundaling memiliki berbagai daya tarik yang membuatnya menjadi favorit wisatawan. Di kawasan ini, Anda dapat menemukan bunga-bunga indah dan patung manusia yang menggunakan pakaian khas suku Batak Karo. Jika Anda merasa lelah setelah menyusuri bukit, tersedia bangku dan batu besar yang dapat digunakan untuk duduk atau Anda bisa menyewa tikar. Banyak wisatawan yang datang ke Bukit Gundaling sambil membawa bekal kemudian makan bersama di puncak bukit."
          text3="Ini mau video"
        />
      </div>

      {/*Taman Alam Lumbini*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Taman Alam Lumbini"
          imageSrc={danauToba}
          imageSrc2={tamanLumbini}
          imageSrc3={tamanLumbini2}
          text1="Taman Alam Lumbini adalah sebuah taman yang terletak di Desa Dolat Rayat, Kota Brastagi, Sumatera Utara. Taman ini merupakan replika dari Pagoda Shwedagon yang berada di negara Myanmar. Dengan luas kawasan kurang lebih 3 hektar, taman ini dipusatkan sebagai tempat peribadatan dan wisata religi agama Buddha. Bangunan dengan tinggi 46,8 meter, panjang 68 meter, dan lebar 68 meter ini menjadi salah satu replika Pagoda Shwedagon terbesar di luar Negara Myanmar."
          text2="Nama Lumbini merujuk pada taman tempat kelahiran dari Sang Buddha atau Siddartha Gautama. Taman ini memiliki berbagai daya tarik, di antaranya kemegahan bangunan Pagoda Emas yang merupakan replika dari Pagoda Shwedagon Myanmar. Selain itu, letaknya yang berada di dataran tinggi membuat taman ini memiliki suasana yang sejuk. Hal ini didukung dengan area taman yang asri dan alami. Melihat Kemegahan dan Keindahan Pagoda Pagoda Emas selain sebagai tempat ibadah umat Buddha, kuil ini juga terbuka untuk umum sebagai tempat wisata."
          text3="Ini mau video"
        />
      </div>

      {/*Pulau Berhala*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Pulau Berhala"
          imageSrc={danauToba}
          imageSrc2={pulauBerhala}
          imageSrc3={pulauBerhala2}
          text1="Taman Alam Lumbini adalah sebuah taman yang terletak di Desa Dolat Rayat, Kota Brastagi, Sumatera Utara. Taman ini merupakan replika dari Pagoda Shwedagon yang berada di negara Myanmar. Dengan luas kawasan kurang lebih 3 hektar, taman ini dipusatkan sebagai tempat peribadatan dan wisata religi agama Buddha. Bangunan dengan tinggi 46,8 meter, panjang 68 meter, dan lebar 68 meter ini menjadi salah satu replika Pagoda Shwedagon terbesar di luar Negara Myanmar."
          text2="Nama Lumbini merujuk pada taman tempat kelahiran dari Sang Buddha atau Siddartha Gautama. Taman ini memiliki berbagai daya tarik, di antaranya kemegahan bangunan Pagoda Emas yang merupakan replika dari Pagoda Shwedagon Myanmar. Selain itu, letaknya yang berada di dataran tinggi membuat taman ini memiliki suasana yang sejuk. Hal ini didukung dengan area taman yang asri dan alami. Melihat Kemegahan dan Keindahan Pagoda Pagoda Emas selain sebagai tempat ibadah umat Buddha, kuil ini juga terbuka untuk umum sebagai tempat wisata."
          text3="Ini mau video"
        />
      </div>

      {/*Pulau Berhala*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Pulau Berhala"
          imageSrc={danauToba}
          imageSrc2={pulauBerhala}
          imageSrc3={pulauBerhala2}
          text1="Pulau Berhala adalah sebuah pulau yang terletak di Selat Malaka dan masih termasuk dalam wilayah administratif provinsi Jambi. Pulau ini memiliki luas sekitar dan merupakan pulau terluar Indonesia di Selat Malaka dan berbatasan dengan negara Malaysia. Pulau ini dijaga oleh Tentara Nasional Indonesia (TNI) karena statusnya sebagai pulau terluar. Pulau Berhala memiliki topografi bergunung dengan hutan lebat dan pantai yang putih bersih."
          text2="Pulau Berhala menawarkan pantai eksotis dengan pasir putih yang bersih. Pulau ini memiliki pemandangan khas dengan pantai-pantai di sekitar Riau yang berbatu besar dan bersih. Pada awal dan akhir tahun, pantai Pulau Berhala menjadi tempat persinggahan penyu untuk bertelur. Pulau ini juga menyimpan warisan berupa benteng kuno yang dibangun oleh Jepang serta meriam peninggalan masa penjajahan Belanda."
          text3="Ini mau video"
        />
      </div>

    </div>
  );
}
