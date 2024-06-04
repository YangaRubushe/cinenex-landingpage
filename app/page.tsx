import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import BackgroundImage from "../public/background.jpg";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48" style={{ backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Discover the Best Movies
                </h1>
                <p className="mx-auto max-w-xl text-gray-200 md:text-xl">
                  CineNex is your getaway to the world of cinema. Your Next Movie Destination. Explore our vast collection of movies and start watching now.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  About Us
                </h2>
                <p className="mx-auto max-w-xl text-gray-400 md:text-xl">
                Welcome to CineNex, where movie magic meets mischief! We're your quirky, popcorn-loving pals in the world of cinema. Imagine cozying up on the couch, snacks abound, remote in hand, with amazing movies at your fingertips. Every night is an adventure at CineNex!
                </p>
                <p className="mx-auto max-w-xl text-gray-400 md:text-xl">
                My project, inspired by the seamless streaming experience of Netflix, is driven by a shared passion for innovation. As a Portfolio Project for Holberton School, it's more than just a requirement—it's a testament to my dedication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
