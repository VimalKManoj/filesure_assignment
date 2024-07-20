import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Media from "@/components/Media";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <Navbar/>
     <Hero/>
     <Services/>
     <Cases/>
     <Media/>
     <FAQ/>
     <Contact/>
    </main>
  );
}


{/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}