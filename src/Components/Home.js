import React from "react";
//import image from "../assets/bg-image.jpg"
 export default function Home(){
     return (
         <main className="  absolute object-cover w-full h-full">
             <section className="home-img  relative  justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <p> <h1 className="home-page-text-css  text-6xl text-white font-bold cursive leading-none lg:leading-snug "> "Absoluta sententia expositore non indiget"</h1></p>
                <p> <h1 className="home-page-text-css  text-4xl text-white cursive leading-none  ">    - An absolute judgment needs no expositor.</h1></p>
             </section>
         </main>
     );
 }