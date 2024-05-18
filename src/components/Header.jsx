import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"

const styleClassLink = 'font-rubikBold cursor-pointer relative lg:mx-5 lg:py-1  px-1 lg:px-3 text-gading transition ease-out border-b-0 hover:border hover:text-coklat1 hover:shadow-[10px_7px_black] hover:bg-gading hover:scale-110 rounded-2xl'

export default function Header() {
    const [bgColor, setBgColor] = useState(''); 

    useEffect(() => {
        const handleScroll = () => {
            let currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                setBgColor('#571E03'); 
            } else {
                setBgColor(''); 
            }
        };
        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='sticky top-0 left-0 w-full flex flex-row justify-center items-center p-4 duration-1000' style={{ backgroundColor: bgColor, zIndex: 9999 }}>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-xs lg:text-xl ' to="/budaya">Budaya</Link>
                            </div>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-xs lg:text-xl ' to="/wisata">Wisata</Link>
                            </div>
                        </NavigationMenuItem>
                        <Link to="/">
                            <h1 className='glowing font-unna text-lg lg:text-5xl  text-gading font-bold mx-2'>DjedjakSoemoet</h1>
                        </Link>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-xs lg:text-xl ' to="/kuliner">Kuliner</Link>
                            </div>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-xs lg:text-xl ' to="/aboutus">About Us</Link>
                            </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
        </div>
    );
}