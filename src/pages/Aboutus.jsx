import React from 'react';

import '../index.css'
import Bryan from '../assets/Profile/Bryan.jpeg'
import Sadu from '../assets/Profile/Sadu.jpeg'

import { FiUser, FiStar } from 'react-icons/fi';

export default function AboutUs() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-animation h-full w-full"></div>
            <div className="relative z-10">
                <div className="h-64 min-h-screen py-12"data-aos ="fade-up">
                    <h1 className="font-Unna text-yellow-50 text-3xl font-bold mb-6 text-center py-4">The Founder</h1>
                    <hr className="card w-1/3 mx-auto border-b-2 border-black opacity-70 mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <PersonCard 
                            name="Bryan Yung"
                            role="Leader Gacor"
                            description="Seorang mahasiswa UMN asal korea yang sedang mencari uang serta jati diri untuk bertahan hidup di dunia yang bahkan tidak menyediakan satu wanita pun untuknya"
                            imageSrc={Bryan}
                        />
                        <PersonCard
                            name="Sadu Adyatma"
                            role="Teman Bryan Yung"
                            description="Seorang mahasiswa yang sangat dekat sekali dengan bryan, memiliki sifat bercanda yang lumayan berkebalikan dengan temannya, Bryan. Aura wibu yang sangat kuat membuat Sadu di segani di linkungannya."
                            imageSrc={Sadu}
                        />
                        <PersonCard
                            name="Jerikho Ruben Rahmani"
                            role="Pecandu Vtuber No 1 di kalangan teman Bryan"
                            description="Hobi : Rasis"
                            imageSrc="https://via.placeholder.com/150"
                        />
                        <PersonCard
                            name="Kerby Limitandy"
                            role="Teman Bryan juga"
                            description="Pribadi yang sedikit mindblowing apalagi kalau sudah mencakup tentang ras berkulit hitam, beliau tidak segan-segan dan bersemangat untuk mengatai dan memaki kehitaman yang mereka miliki. 'Niggachu!'"
                            imageSrc="https://via.placeholder.com/150"
                        />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-trueGray-900 to-black animate-gradient-preference py-8"data-aos ="fade-up">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-Unna text-yellow-50 mb-4">References</h2>
                        <div className="text-yellow-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ReferenceItem title="Sumber" description="Indahnya negriku" />
                            <ReferenceItem title="Kontak" description="" />
                            <ReferenceItem title="10 Dosa besar Jerome" description="Saham Kalbe bangkrut setelah colab sama jerome." />
                            <ReferenceItem title="Siapa kita?" description="Goyang nasi padang pakai sambal randang" />
                        </div>
                    </div>
                    <div className="text-center text-yellow-50 mt-8">
                        <p className="text-sm">&copy; 2024 YourWebsite. All rights reserved.</p>
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

const ReferenceItem = ({ title, description }) => (
    <div className="card border border-solid p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 flex items-center text-yellow-50">
            <FiStar className="mr-1" /> {/* Icon */}
            {title}
        </h3>
        <p className="text-yellow-50 font-rubik">{description}</p>
    </div>
);
