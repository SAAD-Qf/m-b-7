import Contact from "../Contact/page"
import Navbar from "../Navbar/page";

export default function Home() {
  return (
    <div className="'min-h-max w-screen min-w-full 
                bg-gradient-to-r from-black to-slate-400
                absolute bg-cover items-center justify-center">
                  <Navbar />
                  
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-center">
        <Contact/>
      </main>
     
    </div>
  );
}