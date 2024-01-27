import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { HeroProps } from "../types"
import demoImg from '../assets/tarminal-chat-app.png'
import Downloads from './Downloads';



const Hero: React.FC<HeroProps> = ({ isClickedMenu }) => {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            await copy('npm install -g tarminal-chat-app');
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        } catch (err) {
            console.error('Error copying to clipboard', err);
        }
    };

    return (
        <div className={`${!isClickedMenu ? 'mt-24' : 'mt-4'} `}>
            <div>
                <p className="sub-headline text-[#CBFC01] text-[.9rem] font-semibold">Real-Time Chat, Command-Line Power</p>
                <h2 className="text-white text-[36px] font-black">
                    Connect, Chat, Collaborate - All from your <span className="text-[#CBFC01]">Command Line!</span>
                </h2>
                <p className="main-headline text-white text-opacity-70 leading-[27px] mt-8 text-[.9rem]">
                    Join public chat rooms, create new spaces, and engage in real-time conversations, all within the simplicity of your terminal.
                </p>
            </div>

            <div className='w-[90%] max-w-[350px] mb-20'>
                <button
                    className="cta py-[9px] px-[18px] text-center leading-8 bg-[#CBFC01] border-dashed border-2 text-[#151515] border-[#151515] p-4 mt-8 rounded font-bold text-2xl relative"
                    onClick={handleCopyClick}
                >
                    {isCopied && (
                        <span className="absolute inset-0 flex items-center justify-center bg-[#151515] text-[#CBFC01] rounded-xl opacity-75">
                            Copied!
                        </span>
                    )}
                    $ npm install -g <br /> tarminal-chat-app
                </button>
                <div>
                    <Downloads />
                </div>
            </div>


            <div className="w-[568px] h-[568px] flex-shrink-0 rounded-full bg-[#CBFC01] mt-16">
                <img className="w-[500px] h-[260px] flex-shrink-0 rotate-[-45deg] rounded-[31.676px] border-2.5 border-solid border-white border-opacity-50 mt-4" src={demoImg} alt="tarminal-chat-app demo" />
                <img className="w-[500px] h-[260px] flex-shrink-0 rotate-[-45deg] rounded-[31.676px] border-2.5 border-solid border-white border-opacity-50 mt-12 ml-4" src={demoImg} alt="tarminal-chat-app demo" />
            </div>

        </div>
    )
}

export default Hero