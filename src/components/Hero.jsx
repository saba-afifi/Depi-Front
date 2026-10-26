import React from "react"
import homeHero from "../assets/images/image 1.jpg"
import fb from "../assets/icons/basil_facebook-solid.svg"
import instagram from "../assets/icons/basil_instagram-solid.svg"
import x from "../assets/icons/Clip path group.svg"
import tiktok from "../assets/icons/ic_round-tiktok.svg"

export default function Hero() {
    return (
        <>
        <div div className="h-screen relative bg-cover text-white flex flex-col justify-center items-center text-center" style={{backgroundImage : `url(${homeHero})`}}>
        

        <h1 className='text-5xl w-140 font-bold mb-8 leading-16'>Redefining the Horizon of Modern Luxury Living</h1>

        <p className ='text-lg font-bold w-247 text-[#CEC7C7] mb-12'>We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest</p>
        
        <button className='w-64.5 py-2 bg-linear-to-r from-[#8E1616] to-[#C34B4B] rounded-lg'>Explore</button>
        </div>
        <div className="absolute top-140 p-6 flex flex-col gap-4 ">
            <img className='size-10 border-2 border-white rounded-full p-1' src={fb} alt="facebook" />
            <img className='size-10 border-2 border-white rounded-full p-1' src={instagram} alt="instagram"/>
            <img className='size-10 border-2 border-white rounded-full p-1'  src={x} alt="twitter"/>
            <img className='size-10 border-2 border-white rounded-full p-1' src={tiktok} alt="tiktok"/>

        </div>

    
        </>
    );
}