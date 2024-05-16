import React from 'react';
import { Link } from 'react-router-dom';
import Bryan from '../assets/Profile/Bryan.jpeg';
import Sadu from '../assets/Profile/Sadu.jpeg';
import Jerikho from '../assets/Profile/Jerikho.jpeg';
import Kerby from '../assets/Profile/Kerby.jpeg';

export default function AboutUs() {
    return (
        <div className="flex justify-center items-center relative min-h-screen absolute bg-gradient-animation h-full w-full">
            <div className="min-h-screen py-12 text-justify" data-aos="fade-up">
                <h1 className="font-Unna text-yellow-50 text-3xl font-bold mb-6 text-center py-4">The Founder</h1>
                <hr className="card w-1/3 mx-auto border-b-2 border-black opacity-70 mb-8" />
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <PersonCard 
                            name="Bryan Yung"
                            role="Leader"
                            description="Seorang mahasiswa UMN yang merupakan ketua website DjedjakSoematra, Membagi tugas serta memberi arahan kepada anak buahnya. Beliau juga memiliki tugasnya sendiri, yaitu mendesign dan membuat bagian budaya, serta mengurus bagian API."
                            imageSrc={Bryan}
                        />
                        <PersonCard
                            name="Sadu Adyatma"
                            role="Anak Buah Bryan"
                            description="Seorang mahasiswa UMN yang berada di bawah kendali sang ketua, Bryan. Ia ditugaskan untuk mengerjakan dan mendesign bagian wisata, serta mengurus bagian API dalam website ini."
                            imageSrc={Sadu}
                        />
                        <PersonCard
                            name="Jerikho Ruben Rahmani"
                            role="Anak Buah Bryan"
                            description="Seorang mahasiswa UMN yang berada di bawah kendali sang ketua, Bryan. Ia ditugaskan untuk mengerjakan dan mendesign bagian Home & About us pada website ini."
                            imageSrc={Jerikho}
                        />
                        <PersonCard
                            name="Kerby Limitandy"
                            role="Anak Buah Bryan"
                            description="Seorang mahasiswa UMN yang berada di bawah kendali sang ketua, Bryan. Ia ditugaskan untuk mengerjakan dan mendesign bagian Kuliner & Home di website ini."
                            imageSrc={Kerby}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const PersonCard = ({ name, role, description, imageSrc }) => (
    <div className="w-full sm:w-3/4 md:w-full relative cursor-pointer card rounded-lg shadow-md overflow-hidden border-4 border-transparent animate-marching-ants duration-100 ease-linear">
        <div className='overflow-hidden'>
            <img className="w-full h-50 lg:h-40 overflow-hidden transition-transform duration-300 transform hover:scale-110 object-cover" src={imageSrc} alt={name} />
        </div>
        <div className="p-4">
            <h2 className="text-2xl lg:text-xl text-yellow-50 font-Unna">{name}</h2>
            <p className="font-serif text-yellow-50 text-xl lg:text-base text-gray-600 mb-2">{role}</p>
            <p className="text-base lg:text-sm  text-yellow-50">{description}</p>
        </div>
    </div>
);
