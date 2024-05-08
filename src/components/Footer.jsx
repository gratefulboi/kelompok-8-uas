import { Link } from 'react-router-dom';
import Instagram from '../assets/Icons/Instagram.svg';
import X from '../assets/Icons/X.svg';
import Fb from '../assets/Icons/Fb.svg';
import Yt from '../assets/Icons/Yt.svg';

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
        <div className="bg-gradient-to-r from-trueGray-900 to-black animate-gradient-preference py-4 mx-auto flex justify-center items-center">
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
    );
}
