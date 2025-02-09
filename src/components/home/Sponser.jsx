"use client"
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import malamam from '@/image/Home/sponser/malamam.jpeg';
import canva from '@/image/Home/sponser/canva.png';
import pretemam from '@/image/Home/sponser/pretemam.jpeg';
import abirsir from '@/image/Home/sponser/abirsir.jpeg';
import motinsir from '@/image/Home/sponser/motinsir.jpeg';
import kohinurmam from '@/image/Home/sponser/kohinurmam.jpeg';
import siamsir from '@/image/Home/sponser/siamsir.jpeg';
import google from '@/image/Home/sponser/google.png';
import microsoft from '@/image/Home/sponser/microsoft.png';
import farhan from '@/image/Home/sponser/farhan.jpeg';
import sakib from '@/image/Home/sponser/sakib.png';
const Sponser = () => {
  return (
    <div className="py-[60px] px-4 text-center max-w-6xl mx-auto">
      <p className=" font-normal text-black dark:text-white">Trusted by our users from the very beginning </p>
      <div className="mt-9 bg-white/50 dark:bg-white/5 backdrop-blur-lg p-12 rounded-xl ">
        <Marquee pauseOnHover autoFill speed={30}>
          
       
          

          

          <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={siamsir}
            alt="siamsir logo"
          />
           <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={malamam}
            alt="malamam logo"
          />





          <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={pretemam}
            alt="pretemam logo"
          />
          <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={abirsir}
            alt="abirsir logo"
          />

          <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={motinsir}
            alt="motinsir logo"
          />

            <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={kohinurmam}
            alt="kohinurmam logo"
          />

          <Image
            height={200}
            width={300}
            className="max-w-[90px] max-h-[50px]  hover:scale-110 mx-4 duration-500"
            src={canva}
            alt="canva logo"
          />
          <Image
            height={200}
            width={300}
            className="max-w-[90px] max-h-[50px]  hover:scale-110 mx-4 duration-500"
            src={google}
            alt="google logo"
          />

          
            <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={farhan}
            alt="farhan logo"
          />
         
         <Image
            height={50}
            width={50}
            className="max-w-[90px] max-h-[50px] rounded-full hover:scale-110 mx-4 duration-500"
            src={sakib}
            alt="sakib logo"
          />


          
          <Image
            height={200}
            width={300}
            className="max-w-[90px] max-h-[50px]  hover:scale-110 mx-4 duration-500"
            src={microsoft}
            alt="microsoft logo"
          />
         
        </Marquee>
      </div>
    </div>
  );
};

export default Sponser;

// className="flex flex-wrap mt-9 items-center justify-center gap-9"
