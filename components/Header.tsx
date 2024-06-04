import React from 'react';
import Image from 'next/image';
import CinenexLogo from '../public/cinenexlogo.png';
import HeaderBackground from '../public/background.jpg';

const Header = () => (
  <header className="relative w-full h-14 flex items-center justify-between px-4 lg:px-6" style={{ backgroundImage: `url(${HeaderBackground.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="relative z-10 flex justify-between w-full">
      <a className="flex items-center">
        <Image src={CinenexLogo} alt="Cinenex Logo" priority width={100} height={100} />
      </a>
      <a href="https://cine-nex.vercel.app/login" className="inline-flex h-9 items-center justify-center rounded-md bg-custom-red px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50"> Start Watching Now </a>
    </div>
  </header>
);

export default Header;
