import React from 'react';

import '../index.css'

export default function AboutUs() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-animation h-full w-full"></div>
            <div className="relative z-10">
                <div className="h-64 min-h-screen py-12">
                    <h1 className="font-Unna text-yellow-50 text-3xl font-bold mb-6 text-center py-4">The Founder</h1>
                    <hr className="card w-1/3 mx-auto border-b-2 border-black opacity-70 mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <PersonCard 
                            name="Bryan Yung"
                            role="Leader, gacor sir"
                            description="ctetur adipiscing elit. Duis dapibus libero sit amet lacus dapibus, a mattis turpis placerat."
                            imageSrc="https://coinedition.com/wp-content/uploads/2023/08/BTC-81.jpg"
                        />
                        <PersonCard
                            name="Jane Smith"
                            role="UI/UX Designer"
                            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            imageSrc="https://cdn.antaranews.com/cache/1200x800/2022/08/29/McLaren-720S-Daniel-Ricciardo-1_result.jpg"
                        />
                        <PersonCard
                            name="David Johnson"
                            role="Marketing Manager"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            imageSrc="https://via.placeholder.com/150"
                        />
                        <PersonCard
                            name="Emily Brown"
                            role="Content Writer"
                            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            imageSrc="https://via.placeholder.com/150"
                        />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-trueGray-900 to-black animate-gradient-preference py-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-Unna text-yellow-50 mb-4">References</h2>
                        <div className="text-yellow-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ReferenceItem title="Sumber" description="Indahnya negriku" />
                            <ReferenceItem title="Test!" description="Ku cinta aku terpnanah persona indonesia" />
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
    <div className="cursor-default card bg-white rounded-lg shadow-md overflow-hidden border-4 border-transparent animate-marching-ants duration-500 ease-linear">
        <img className="w-full h-40 object-cover" src={imageSrc} alt={name} />
        <div className="p-4">
            <h2 className="text-lg text-yellow-50 font-Unna">{name}</h2>
            <p className="font-serif text-yellow-50 text-base text-gray-600 mb-2">{role}</p>
            <p className="text-sm text-yellow-50">{description}</p>
        </div>
    </div>
);

const ReferenceItem = ({ title, description }) => (
    <div className="card border border-solid p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-yellow-50 font-rubik">{description}</p>
    </div>
);
