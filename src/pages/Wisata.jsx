import React from 'react';
import danauToba from '../assets/danauToba.jpeg';
import danauToba2 from '../assets/danauToba2.jpg';

// Function to generate a set of boxes
function BoxSet({ headerText, imageSrc, text1, text2, text3, imageSrc2, imageSrc3 }) {
  return (
    <>
      {/* Header */}
      <div className="text-center">
        <div className="relative inline-block mb-1">
          <h1 className="text-5xl font-bold inline-block">{headerText}</h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 mt-1"></div>
        </div>
      </div>

      {/* First box */}
      <div className="container mx-auto mt-4 relative pb-4">
        <div className="w-full p-4 bg-gray-200 border border-gray-400" style={{ paddingBottom: '37.5%', position: 'relative', overflow: 'hidden' }}>
          {/* Content of the first box */}
          <img src={imageSrc} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
          {/* Text on the photo */}
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white text-lg font-bold">{text3}</p>
          </div>
        </div>
      </div>

      {/* Second box */}
      <div className="container mx-auto mt-4 flex">
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
      <div className="container mx-auto mt-4 flex">
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
      <h1 className="flex justify-center bg-red-600 mt-2">Page Wisata</h1>
      
      <div className="mb-12">
        <BoxSet 
          headerText="Header Text"
          imageSrc={danauToba}
          text1="Danau Toba (Batak Toba: Surat Batak: ᯖᯀᯬ ᯖᯬᯅ, translit. Tao Toba) adalah danau alami berukuran besar di Indonesia yang terletak di kaldera gunung supervulkan. Danau ini memiliki panjang 100 kilometer (62 mil), lebar 30 kilometer (19 mi), dan kedalaman 508 meter (1.667 ft). Danau ini terletak di tengah pulau Sumatra bagian utara dengan ketinggian permukaan sekitar 900 meter (2.953 ft). Danau ini membentang vdari 2.88°N 98.52°E sampai 2.35°N 99.1°E. Danau Toba merupakan adalah danau terbesar di Indonesia sekaligus danau vulkanik terbesar di dunia.[1]"
          text2="Danau Toba terbentuk sebagai akibat dari letusan gunung berapi super masif berkekuatan VEI 8 sekitar 69.000 sampai 77.000 tahun yang lalu[2][3][4] yang memicu perubahan iklim global. Metode penanggalan terkini yang berakurat menetapkan letusan tersebut terjadi sekitar 74.000 tahun yang lalu.[5] Letusan ini merupakan letusan eksplosif terbesar di Bumi dalam 25 juta tahun terakhir. Menurut teori bencana Toba, letusan ini berdampak besar bagi populasi manusia di seluruh dunia; dampak letusan menewaskan sebagian besar manusia yang hidup waktu itu dan diyakini menyebabkan penyusutan populasi di Afrika Timur-Tengah dan India sehingga memengaruhi genetika populasi manusia di seluruh dunia sampai sekarang.[6]."
          text3="Ini mau video"
          imageSrc2={danauToba}
          imageSrc3={danauToba2}
        />
        
        <div className="mt-20"> {/* Add margin top to create space between BoxSets */}
          <BoxSet 
            headerText="Header Text"
            imageSrc={danauToba}
            text1="Danau Toba (Batak Toba: Surat Batak: ᯖᯀᯬ ᯖᯬᯅ, translit. Tao Toba) adalah danau alami berukuran besar di Indonesia yang terletak di kaldera gunung supervulkan. Danau ini memiliki panjang 100 kilometer (62 mil), lebar 30 kilometer (19 mi), dan kedalaman 508 meter (1.667 ft). Danau ini terletak di tengah pulau Sumatra bagian utara dengan ketinggian permukaan sekitar 900 meter (2.953 ft). Danau ini membentang vdari 2.88°N 98.52°E sampai 2.35°N 99.1°E. Danau Toba merupakan adalah danau terbesar di Indonesia sekaligus danau vulkanik terbesar di dunia.[1]"
            text2="Danau Toba terbentuk sebagai akibat dari letusan gunung berapi super masif berkekuatan VEI 8 sekitar 69.000 sampai 77.000 tahun yang lalu[2][3][4] yang memicu perubahan iklim global. Metode penanggalan terkini yang berakurat menetapkan letusan tersebut terjadi sekitar 74.000 tahun yang lalu.[5] Letusan ini merupakan letusan eksplosif terbesar di Bumi dalam 25 juta tahun terakhir. Menurut teori bencana Toba, letusan ini berdampak besar bagi populasi manusia di seluruh dunia; dampak letusan menewaskan sebagian besar manusia yang hidup waktu itu dan diyakini menyebabkan penyusutan populasi di Afrika Timur-Tengah dan India sehingga memengaruhi genetika populasi manusia di seluruh dunia sampai sekarang.[6]."
            text3="Ini mau video"
            imageSrc2={danauToba}
            imageSrc3={danauToba2}
          />
        </div>
      </div>
    </div>
  );
}
