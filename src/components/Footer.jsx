import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReferenceItem = ({ title, description }) => (
    <div className="p-0">
        <h3 className={`text-base lg:text-xl font-semibold mb-4 flex items-center text-yellow-50 ${title === 'Budaya' || title === 'Wisata' || title === 'Kuliner' ? 'hover:text-yellow-400' : ''}`}>
            {title}
        </h3>
        <p className="text-yellow-50 font-rubik ">{description}</p>
    </div>
);

const Footer = () => {
    const [timeData, setTimeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTimeData = async () => {
            try {
                const response = await axios.get('https://api.api-ninjas.com/v1/worldtime?lat=3.5896&lon=98.6736', {
                    headers: {
                        'X-Api-Key': 'GP38WB5ze7cv/YpYduxCDA==pua8FfQFrx1jTrCR'
                    }
                });
                setTimeData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching time data:', error);
                setLoading(false);
            }
        };

        fetchTimeData();
    }, []);

    return (
        <div className="bg-gradient-to-r from-trueGray-900 to-black animate-gradient-preference py-2 mx-auto flex justify-center items-center relative">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-yellow-50 p-1 flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="text-justify text-sm lg:text-lg w-full lg:w-7/12">
                        <ReferenceItem title="Djedjak Soemoet" description="Sumatera Utara, terletak pada bagian utara Pulau Sumatera Indonesia, dengan Medan sebagai ibu kotanya. Keindahan alam yang memukau, serta warisan budaya dari macam-macam suku membuat Sumatera Utara sangat menarik untuk dijelajahi." />
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-end w-full md:w-5/12 mt-2 md:mt-0">
                        <div className="h-8 lg:h-16 w-auto mb-4 md:mb-0 md:mr-4 lg:mr-20">
                            <Link to="/Budaya">
                                <ReferenceItem title="Budaya" />
                            </Link>
                        </div>
                        <div className="h-8 lg:h-16 w-auto mb-4 md:mb-0 md:mr-4 lg:mr-20">
                            <Link to="/Wisata">
                                <ReferenceItem title="Wisata" />
                            </Link>
                        </div>
                        <div className="h-10 w-auto">
                            <Link to="/Kuliner">
                                <ReferenceItem title="Kuliner" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-yellow-50 mt-0 lg:mt-3">
                    <p className="text-xs :lg:text-sm">&copy; 2024 DjedjakSoemoet. All rights reserved.</p>
                </div>
                <div className="absolute bottom-2 right-2 text-yellow-50 mt-3 lg:mt-0">
                    {loading ? (
                        <p className="text-sm">Loading current time...</p>
                    ) : timeData ? (
                        <div className="flex flex-col text-xs lg:flex-row lg:items-center">
                            <p>Date Now: {timeData.year}-{timeData.month}-{timeData.day}</p>
                            <p className="lg:ml-2">Time Now: {timeData.hour}:{timeData.minute}:{timeData.second}</p>
                        </div>
                    ) : (
                        <p className="text-sm">Failed to load time data</p>
                    )}
                </div>
            </div>
            <div className="mb-8 flex items-center justify-center text-yellow-50 mt-8">
                <p></p>
            </div>
        </div>
    );
};

export default Footer;
