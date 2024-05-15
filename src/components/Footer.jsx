import { Link } from 'react-router-dom';


const ReferenceItem = ({ title, description }) => (
    <div className=" p-0">
        <h3 className={`text-xl font-semibold mb-4 flex items-center text-yellow-50 ${title === 'Budaya' || title === 'Wisata' || title === 'Kuliner' ? 'hover:text-yellow-400' : ''}`}>
            {title}
        </h3>
        <p className="text-yellow-50 font-rubik">{description}</p>
    </div>
);

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-trueGray-900 to-black animate-gradient-preference py-2 mx-auto flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-yellow-50  p-1 flex flex-col md:flex-row justify-start items-start">
                    <div className="text-justify w-8/12 mr-20">
                        <ReferenceItem title="Djedjak Soemoet" description="Sumatera Utara, terletak  pada bagian utara Pulau Sumatera Indonesia, dengan Medan sebagai ibu kotanya. Keindahan alam yang memukau, serta warisan budaya dari macam-macam suku membuat Sumatera Utara sangat menarik untuk dijelajahi." />
                    </div>
                    <div className="h-16 my-auto w-2/12 ml-8">
                        <Link to="/Budaya">
                            <ReferenceItem title="Budaya"  />
                        </Link>
                    </div>
                    <div className="h-16 my-auto w-2/12 ml-10">
                        <Link to="/Wisata">
                            <ReferenceItem title="Wisata"  />
                        </Link>
                    </div>
                    <div className="h-16 my-auto w-2/12 ml-8">
                        <Link to="/Kuliner">
                            <ReferenceItem title="Kuliner" />
                        </Link>
                    </div>
                </div>
                <div className="text-yellow-50 mt-3">
                    <p className="text-sm">&copy; 2024 YourWebsite. All rights reserved.</p>
                </div>
                <div className="w-fit flex mt-3 items-center max-w-6xl">
                    
                </div>
            </div>
            <div className="mb-8 flex items-center justify-center text-m text-center text-yellow-50 mt-8">
                <p></p>
            </div>
        </div>
    );
}
