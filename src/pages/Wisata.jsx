import React from 'react';
import dToba from '../assets/danauToba.jpeg';

// Function to generate a set of boxes
function BoxSet({ imageSrc, text1, text2, text3 }) {
  return (
    <>
      {/* First box */}
      <div className="container mx-auto mt-4 flex">
        <div className="w-full bg-gray-200 border border-gray-400 relative" style={{ paddingBottom: '37.5%' }}>
          {/* Content of the first box */}
          <img src={imageSrc} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* Second box */}
      <div className="container mx-auto mt-4 flex">
        <div className="w-3/4 p-4 bg-blue-200 border border-blue-400 mr-4">
          {/* Content of the second box */}
          <p>{text1}</p>
        </div>
        {/* Third box */}
        <div className="w-1/4 p-4 bg-green-200 border border-green-400">
          {/* Content of the third box */}
          <p>{text2}</p>
        </div>
      </div>
      {/* Fourth box */}
      <div className="container mx-auto mt-4 flex">
        <div className="w-1/3 p-4 bg-yellow-200 border border-yellow-400 mr-4">
          {/* Content of the fourth box */}
          <p>{text3}</p>
        </div>
        {/* Fifth box */}
        <div className="w-2/3 p-4 bg-purple-200 border border-purple-400">
          {/* Content of the fifth box */}
          <p>This is the content of the fifth box.</p>
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
      
      {/* Call the function to display the first set of boxes with dynamic content */}
      <div className="mb-8"> {/* Add margin bottom to create space between sets */}
        <BoxSet 
          imageSrc={dToba}
          text1="Danau Toba (Batak Toba: Surat Batak: ᯖᯀᯬ ᯖᯬᯅ, translit. Tao Toba) adalah danau alami berukuran besar di Indonesia yang terletak di kaldera gunung supervulkan."
          text2="Content of the third box."
          text3="This is the content of the fourth box."
        />
      </div>
      
      {/* Call the function again to display the second set of boxes with different content */}
      <div className="mb-8"> {/* Add margin bottom to create space between sets */}
        <BoxSet 
          imageSrc={dToba}
          text1="Different text for the second set."
          text2="Another content for the third box."
          text3="Modified content for the fourth box."
        />
      </div>
    </div>
  );
}
