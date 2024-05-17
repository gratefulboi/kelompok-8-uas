import { Link } from 'react-router-dom';

const ReferenceItem = ({ title, description }) => (
    <div className="p-0">
        <h3 className={`text-lg lg:text-xl font-semibold mb-4 flex items-center text-yellow-50 ${title === 'Budaya' || title === 'Wisata' || title === 'Kuliner' ? 'hover:text-yellow-400' : ''}`}>
            {title}
        </h3>
        <p className="text-yellow-50 font-rubik ">{description}</p>
    </div>
);

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-trueGray-900 to-black animate-gradient-preference py-2 mx-auto flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-yellow-50 p-1 flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="text-justify text-baselg:text-lg w-full lg:w-7/12">
                        <ReferenceItem title="Djedjak Soemoet" description="Sumatera Utara, terletak pada bagian utara Pulau Sumatera Indonesia, dengan Medan sebagai ibu kotanya. Keindahan alam yang memukau, serta warisan budaya dari macam-macam suku membuat Sumatera Utara sangat menarik untuk dijelajahi." />
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-end w-full md:w-5/12 mt-4 md:mt-0">
                        <div className="h-10 lg:h-16 w-auto mb-0 md:mb-0 md:mr-20">
                            <Link to="/Budaya">
                                <ReferenceItem title="Budaya" />
                            </Link>
                        </div>
                        <div className="h-10 w-auto mb-0 lg:mb-0 lg:mr-20">
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
                <div className="text-yellow-50 lg:mt-3"> 
                    <p className="text-sm">&copy; 2024 DjedjakSoemoet. All rights reserved.</p>
                </div>
            </div>
            <div className="mb-8 flex items-center justify-center text-m text-center text-yellow-50 mt-8">
                <p></p>
            </div>
        </div>
    );
}
