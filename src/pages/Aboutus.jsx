import React from 'react';
import { Link } from 'react-router-dom';
import Bryan from '../assets/Profile/Bryan.jpeg';
import Sadu from '../assets/Profile/Sadu.jpeg';
import Jerikho from '../assets/Profile/Jerikho.jpeg';
import Kerby from '../assets/Profile/Kerby.jpeg';
import Instagram from '../assets/Icons/Instagram.svg';
import X from '../assets/Icons/X.svg';
import Fb from '../assets/Icons/Fb.svg';
import Yt from '../assets/Icons/Yt.svg';

export default function AboutUs() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-animation h-full w-full"></div>
            <div className="relative z-10">
                <div className="h-64 min-h-screen py-12" data-aos="fade-up">
                    <h1 className="font-Unna text-yellow-50 text-3xl font-bold mb-6 text-center py-4">The Founder</h1>
                    <hr className="card w-1/3 mx-auto border-b-2 border-black opacity-70 mb-8" />
                    <div className="text-justify grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
    <div className="relative cursor-pointer card rounded-lg shadow-md overflow-hidden border-4 border-transparent animate-marching-ants duration-100 ease-linear">
        <img className="w-full h-40 overflow-hidden transition-transform duration-300 transform hover:scale-110 object-cover" src={imageSrc} alt={name} />
        <div className="p-4">
            <h2 className="text-lg text-yellow-50 font-Unna">{name}</h2>
            <p className="font-serif text-yellow-50 text-base text-gray-600 mb-2">{role}</p>
            <p className="text-sm text-yellow-50">{description}</p>
        </div>
    </div>
);