import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import danauToba from '../assets/Wisata/danauToba.jpeg';
import danauToba2 from '../assets/Wisata/danauToba2.jpg';
import gunungSibayak from '../assets/Wisata/gunungSibayak.jpg';
import gunungSibayak2 from '../assets/Wisata/gunungSibayak2.jpg';
import bukitLawang from '../assets/Wisata/BukitLawang.jpg';
import bukitLawang2 from '../assets/Wisata/BukitLawang2.jpg';
import airTerjunSipisoPiso from '../assets/Wisata/AirTerjunSipisoPiso.jpg';
import airTerjunSipisoPiso2 from '../assets/Wisata/AirTerjunSipisoPiso2.jpg';
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



// Initialize AOS
AOS.init({ once: true });

// Function to generate a set of boxes
function BoxSet({ headerText, videoSrc, imageSrc, imageSrc2, imageSrc3, text1, text2, text3, children }) {
  return (
    <>
      {/* Header */}
      <div className="text-center" data-aos="fade-up">
        <div className="relative inline-block mb-1">
          <h1 className="text-5xl font-bold inline-block text-gading">{headerText}</h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-darkmas mt-1"></div>
        </div>
      </div>

      {/* First box */}
      <div className="container mx-auto mt-4 relative pb-4" data-aos="fade-up">
        <div className="w-full p-4 bg-gray-200 border border-gading" style={{ paddingBottom: '56.25%', position: 'relative', overflow: 'hidden' }}>
          {/* Content of the first box */}
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
          {/* Weather data container */}
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white text-lg font-bold">{text3}</p>
          </div>
        </div>
      </div>

      {/* Second box */}
      <div className="container mx-auto mt-4 flex" data-aos="fade-up">
        <div className="w-2/3 p-4 bg-krem border border-mas mr-4">
          {/* Content of the second box */}
          <p>{text1}</p>
        </div>
        {/* Third box */}
        <div className="w-1/3 p-4 bg-green-200 border border-mas relative overflow-hidden" data-aos="fade-up">
          {/* Content of the third box */}
          <img src={imageSrc2} alt="" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        </div>
      </div>
      
      {/* Fourth box */}
      <div className="container mx-auto mt-4 flex" data-aos="fade-up">
        <div className="w-1/3 p-4 bg-yellow-200 border border-mas mr-4 relative overflow-hidden" data-aos="fade-up">
          {/* Content of the fourth box */}
          <img src={imageSrc3} alt="" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        </div>
        
        {/* Fifth box */}
        <div className="w-2/3 p-4 bg-krem border border-mas" data-aos="fade-up">
          {/* Content of the fifth box */}
          <p>{text2}</p>
        </div>
      </div>
    </>
  );
}

// Main component
export default function Wisata() {
  const danauTobaVideoSrc = "https://www.youtube.com/embed/yTBjL2cTiuI?si=WZUJiXNcLK6uo0Ps";
  const gunungSibayakVideoSrc = "https://www.youtube.com/embed/15UeixJTBng?si=qZIEOOg7NZbfBYvw";
  const bukitLawangVideoSrc = "https://www.youtube.com/embed/XcV1TRntRhs?si=uj2nVVkm6ms0q6ks&amp;start=4";
  const airTerjunSipisoPisoVideoSrc = "https://www.youtube.com/embed/NNwMAIP_5x8?si=ebcjjca2W5LQHV36";
  const gunungSinabungVideoSrc = "https://www.youtube.com/embed/Hr3xnctkW5c?si=gHfWppjUQ10voCxo";
  const bukitGundalingVideoSrc = "https://www.youtube.com/embed/xUByowUIu48?si=ueJKhr5NNqOHWKzU";
  const tamanLumbiniVideoSrc = "https://www.youtube.com/embed/H_ZT1Q4WtPE?si=5c14HqZVr5Y-0XOJ";
  const pulauBerhalakVideoSrc = "https://www.youtube.com/embed/8icgNqxoTk0?si=r8YIhfZ8_6Ez91Oz";
  const bukitHolbungVideoSrc = "https://www.youtube.com/embed/9arlqJFMaLY?si=MBSzou2HMqoMFtaP";
  const airTerjunEfrataVideoSrc = "https://www.youtube.com/embed/fy2zrKdw6pY?si=MrwsDQ8uErgb7g-1";


  return (
    <div className='mb-10'>
      {/* Full-width image container */}
      <div className="w-full mb-32">
        <img src={danauToba} alt="Full width" className="w-full h-auto" />
      </div>
      
      {/* Danau Toba*/}
      <div className="mb-12">
        <BoxSet
          headerText="Danau Toba"
          videoSrc={danauTobaVideoSrc}
          imageSrc2={danauToba}
          imageSrc3={danauToba2}
          text1="Danau Toba, yang dikenal sebagai Tao Toba dalam Bahasa Batak, adalah danau alami berukuran besar yang terletak di kaldera gunung supervulkan. Dengan panjang 100 kilometer, lebar 30 kilometer, dan kedalaman mencapai 508 meter, Danau Toba adalah danau terbesar di Indonesia dan juga danau vulkanik terbesar di dunia. Terletak di tengah bagian utara pulau Sumatra, dengan ketinggian permukaan sekitar 900 meter, Danau Toba menawarkan pemandangan yang mempesona dan tak terlupakan."
          text2="Danau Toba bukan hanya tentang keindahan alam semata, tetapi juga tentang sejarah dan budaya yang kaya. Danau ini adalah situs letusan supervulkan yang diperkirakan terjadi 69.000 hingga 77.000 tahun yang lalu, mewakili peristiwa perubahan iklim. Letusan ini adalah letusan eksplosif terbesar di Bumi dalam 25 juta tahun terakhir. Menurut teori bencana Toba, letusan ini memiliki konsekuensi global bagi populasi manusia karena membunuh sebagian besar manusia yang hidup pada waktu itu. Danau Toba juga merupakan salah satu dari dua puluh taman geologi di Indonesia, dan diakui pada Juli 2020 sebagai salah satu Geopark Global UNESCO."
          text3="Weather data" // You might want to replace this with actual weather data
        />
      </div>
            {/* Gunung Sibayak*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Gunung Sibayak"
          videoSrc={gunungSibayakVideoSrc}
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
          videoSrc={bukitLawangVideoSrc}
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
          videoSrc={airTerjunSipisoPisoVideoSrc}
          imageSrc2={airTerjunSipisoPiso}
          imageSrc3={airTerjunSipisoPiso2}
          text1="Air Terjun Sipiso Piso adalah air terjun yang berada di Desa Tongging, Kecamatan Merek, Kabupaten Karo, Provinsi Sumatra Utara. Air terjun ini memiliki ketinggian hingga 120 meter dan airnya mengucur begitu deras membentuk garis vertikal yang terlihat sempurna. Air terjun ini terbentuk oleh aliran Sungai Asahan yang bermula dari Danau Toba. Aliran sungai tersebut kemudian jatuh dari tebing batu kapur yang menjulang tinggi membentuk air terjun yang indah."
          text2="Nama piso pada air terjun ini diambil dari kata “piso” yang berarti pisau. Sebab, jika melihat air terjun ini dari kejauhan, bentuknya seperti pisau kecil dan panjang. Di sekitar air terjun, terdapat pepohonan yang rimbun dan hijau, serta perkebunan kopi yang memberikan pemandangan yang memukau. Melalui air terjun ini, kamu bisa melihat bukit, benatangan Pulau Samosir, hingga pematang sawah dan ladang. Air Terjun Sipiso Piso menawarkan berbagai aktivitas menarik bagi para pengunjung. Anda bisa menikmati air terjun dari dekat, berjalan-jalan di sekitar hutan, atau bahkan mencoba berbagai aktivitas olahraga di sekitar air terjun."
          text3="Ini mau video"
        />
      </div>

      {/*Gunung Sinabung*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Gunung Sinabung"
          videoSrc={gunungSinabungVideoSrc}
          imageSrc2={gunungSinabung}
          imageSrc3={gunungSinabung2}
          text1="Gua Kelelawar adalah gua yang menjadi rumah bagi ribuan kelelawar. Gua ini terletak di berbagai lokasi di Indonesia, seperti di Pulau Sangiang, Banten, dan di Bukit Lawang, Kabupaten Langkat, Sumatera Utara. Gua ini menawarkan pengalaman wisata alam yang tak terlupakan. Tersembunyi di balik rimbunnya hutan hujan tropis, gua ini merupakan rumah bagi ribuan kelelawar yang menari dengan indah di langit-langit gua."
          text2="Keunikan dari Gua Kelelawar terletak pada penghuninya, yaitu kelelawar. Kelelawar adalah binatang malam, yang berburu pada malam hari di kegelapan dan tidur pada siang hari. Banyak jenis kelelawar tidur di dalam ceruk gua yang gelap dan lembap. Gua merupakan tempat bermalam dan berhibernasi yang sangat cocok bagi kelelawar karena suhu gua agak mantap bila dibandingkan dengan keadaan di luarnya. Yang juga penting bagi kelangsungan hidup kelelawar ialah selalu adanya kelembapan tinggi di dalam gua."
          text3="Ini mau video"
        />
      </div>

      {/*Bukit Gundaling*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Bukit Gundaling"
          videoSrc={bukitGundalingVideoSrc}
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
          videoSrc={tamanLumbiniVideoSrc}
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
          videoSrc={pulauBerhalakVideoSrc}
          imageSrc2={pulauBerhala}
          imageSrc3={pulauBerhala2}
          text1="Pulau Berhala adalah sebuah pulau yang terletak di Selat Malaka dan masih termasuk dalam wilayah administratif provinsi Jambi. Pulau ini memiliki luas sekitar dan merupakan pulau terluar Indonesia di Selat Malaka dan berbatasan dengan negara Malaysia. Pulau ini dijaga oleh Tentara Nasional Indonesia (TNI) karena statusnya sebagai pulau terluar. Pulau Berhala memiliki topografi bergunung dengan hutan lebat dan pantai yang putih bersih."
          text2="Pulau Berhala menawarkan pantai eksotis dengan pasir putih yang bersih. Pulau ini memiliki pemandangan khas dengan pantai-pantai di sekitar Riau yang berbatu besar dan bersih. Pada awal dan akhir tahun, pantai Pulau Berhala menjadi tempat persinggahan penyu untuk bertelur. Pulau ini juga menyimpan warisan berupa benteng kuno yang dibangun oleh Jepang serta meriam peninggalan masa penjajahan Belanda."
          text3="Ini mau video"
        />
      </div>

      
      {/*Bukit Holbung*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Bukit Holbung"
          videoSrc={bukitHolbungVideoSrc}
          imageSrc2={bukitHolbung}
          imageSrc3={bukitHolbung2}
          text1="Bukit Holbung, juga dikenal sebagai Bukit Teletubbies oleh masyarakat setempat, adalah sebuah destinasi wisata alam yang terletak di Dolok Raja, Kecamatan Harian, Kabupaten Samosir, Sumatera Utara. Bukit ini menawarkan pemandangan yang spektakuler, udara yang segar, dan pemandangan alam yang memesona bagi para pengunjung. Dari puncak bukit, Anda akan disuguhi panorama alam yang luar biasa, termasuk hamparan perbukitan hijau yang bergelombang dan pemandangan Danau Toba."
          text2="Salah satu daya tarik utama Bukit Holbung adalah pemandangannya yang menakjubkan. Terutama saat matahari terbit atau terbenam, pemandangan ini menjadi lebih dramatis dengan warna-warna yang indah. Bagi yang suka petualangan, Bukit Holbung juga menawarkan jalur hiking yang menantang. Selain mendaki ke puncak bukit, mayoritas pengunjung juga mengunjungi Bukit ini untuk berkemah. Menghabiskan malam di kawasan bukit ini dengan berkemah adalah pengalaman yang sangat berkesan."
          text3="Ini mau video"
        />
      </div>

      {/*Air Terjun Efrata*/}
      <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
        <BoxSet 
          headerText="Air Terjun Efrata"
          videoSrc={airTerjunEfrataVideoSrc}
          imageSrc2={airTerjunEfrata}
          imageSrc3={airTerjunEfrata2}
          text1="Air Terjun Efrata adalah sebuah wisata air terjun yang berlokasi di Desa Sosor Dolok, Kecamatan Harian, Kabupaten Samosir, Provinsi Sumatera Utara. Air terjun ini memiliki ketinggian sekitar 20 meter dan menawarkan keindahan dengan bentangan air yang jatuh keras dan melebar. Pesona air terjun yang luar biasa indah ini sudah terlihat jelas sejak di area parkir. Lokasinya tidak jauh dari Objek Wisata Menara Pandang Tele, sebuah menara yang sering dijadikan spot untuk menikmati keindahan alam serasa berada di atas awan."
          text2="Air Terjun Efrata memiliki beberapa daya tarik, yaitu sebagai berikut. Pertama, pemandangan Danau Toba yang bisa dinikmati selama perjalanan menuju air terjun ini. Kedua, udara sejuk di sekitar air terjun ini yang lebih sejuk dan cenderung dingin. Ketiga, fasilitas yang ada di sekitar kawasan wisata Air Terjun Efrata diantaranya: Area parkir kendaraan, warung makanan dan minuman, spot foto, toilet, dan gazebo."
          text3="Ini mau video"
        />
      </div>

    </div>
  );
}
