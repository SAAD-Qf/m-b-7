import Image from "next/image";
import Navbar from "./Navbar/page";
import cof from "../app/public/cof.jpg"

export default function Home() {
  return (
    <div className="'min-h-max w-screen min-w-full 
    bg-gradient-to-r from-black to-slate-400
                 absolute bg-cover'">
                  <Navbar/>
                  <br />
   <div className='text-4xl lg:text-2xl text-center justify-center bg-gradient-to-r from-black to-slate-400 rounded-xl font-serif  px-4 py-2 shadow-2xl shadow-orange-900 animate-bounce'>
      Im Mahar Ahmed Sarfraz
      </div>
      
      <br />
      <br />
      <br />
      <br />
      
      {/* The Full Stack Developer */}
      <p className="text-3xl lg:text-6xl text-center justify-center shadow-2xl shadow-orange-900 rounded-xl font-serif mb-4 px-4 py-2">
        Welcome to My Watch Shop
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      
     
      
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     
      <footer>
        <p className='text-black flex font-sans text-sm text-center justify-center items-end'>
                Copyright © 2024 This Website. All Rights Reserved.
        </p>
     </footer>
    </div>
  );
}
