import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const styleClassLink = 'font-rubikBold cursor-pointer relative mx-5 py-1 px-3 text-gading transition ease-out border-b-0 hover:border hover:text-coklat1 hover:shadow-[10px_7px_black] hover:bg-gading hover:scale-110 rounded-2xl'

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
        <div className='sticky top-0 left-0 w-full z-50 flex flex-row justify-center items-center p-4 duration-1000' style={{ backgroundColor: bgColor }}>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-lg' to="/budaya">Budaya</Link>
                            </div>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-lg' to="/wisata">Wisata</Link>
                            </div>
                        </NavigationMenuItem>
                        <div id="logo" className='flex justify-center items-center z-50 '>
                            <Avatar>
                                <AvatarImage src="https://source.unsplash.com/aerial-photo-of-green-trees-near-mountain-under-cloudy-sky-8N30QSbW5ds" />
                                <AvatarFallback>Kelompok 8 - Sumatera Utara</AvatarFallback>
                            </Avatar>
                            <Link to="/">
                                <h1 className='glowing font-unna text-5xl text-gading font-bold mx-2'>DjedjakSoematra</h1>
                            </Link>     
                        </div>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-lg' to="/kuliner">Kuliner</Link>
                            </div>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <div className={styleClassLink}>
                                <Link className='text-lg' to="/aboutus">About Us</Link>
                            </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
        </div>
    );
}