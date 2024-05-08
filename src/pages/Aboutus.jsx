import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Bryan from '../assets/Profile/Bryan.jpeg';
import Sadu from '../assets/Profile/Sadu.jpeg';
import Instagram from '../assets/Icons/Instagram.svg';
import X from '../assets/Icons/X.svg';
import Fb from '../assets/Icons/Fb.svg';
import Yt from '../assets/Icons/Yt.svg';

import { FiUser, FiStar } from 'react-icons/fi';

export default function AboutUs() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-animation h-full w-full"></div>
            <div className="relative z-10">
                <div className="h-64 min-h-screen py-12" data-aos="fade-up">
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
                <div className="bg-gradient-to-r from-trueGray-900 to-black animate-gradient-preference py-4 mx-auto flex justify-center items-center" data-aos="fade-up">
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="text-yellow-50  p-1 flex flex-col md:flex-row justify-start items-start">
                            <div className="text-justify w-5/12 mr-20">
                                <ReferenceItem title="Djedjak Soematra" description="Kami dasdsamilih membuat website dengan tema Sumatera Utara, karena menurut kami provinsi ini memiliki banyak keberagaman yang dapat dikunjungi oleh para wisatawan" />
                            </div>
                            <div className="h-8 my-auto w-2/12 mr-4">
                                <Link to="/Budaya">
                                    <ReferenceItem title="Budaya"  />
                                </Link>
                            </div>
                            <div className="h-8 my-auto w-2/12 mr-4">
                                <Link to="/Wisata">
                                    <ReferenceItem title="Wisata"  />
                                </Link>
                            </div>
                            <div className="h-8 my-auto w-2/12">
                                <Link to="/Kuliner">
                                    <ReferenceItem title="Kuliner" />
                                </Link>
                            </div>
                        </div>
                        <div className="text-yellow-50 mt-4">
                            <p className="text-sm">&copy; 2024 YourWebsite. All rights reserved.</p>
                        </div>
                        <div className="w-fit flex mt-3 items-center max-w-6xl">
                            <img src={Instagram} alt="Instagram" className="cursor-pointer mr-2 rounded-full p-1 w-10 h-10 icon-shadow icon" />
                            <img src={X} alt="X" className="cursor-pointer rounded-full mr-2 p-1 w-10 h-10 icon-shadow icon" />
                            <img src={Fb} alt="Facebook" className="cursor-pointer rounded-full mr-2 p-1 w-10 h-10 icon-shadow icon" />
                            <img src={Yt} alt="YouTube" className="cursor-pointer rounded-full p-1 w-10 h-10 icon-shadow icon" />
                        </div>
                    </div>
                    <div className="mb-8 flex items-center justify-center text-m text-center text-yellow-50 mt-8">
                        <p></p>
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
    <div className=" p-0">
        <h3 className={`text-xl font-semibold mb-4 flex items-center text-yellow-50 ${title === 'Budaya' || title === 'Wisata' || title === 'Kuliner' ? 'hover:text-yellow-400' : ''}`}>
            {title}
        </h3>
        <p className="text-yellow-50 font-rubik">{description}</p>
    </div>
);


