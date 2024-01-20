import { FaArrowRight } from "react-icons/fa6";
import { HeroProps } from "../types"
import demoImg from '../assets/tarminal-chat-app.png'


const Hero: React.FC<HeroProps> = ({ isClickedMenu }) => {
    return (
        <div className={`${!isClickedMenu ? 'mt-24' : 'mt-4'} `}>
            <div>
                <p className="sub-headline text-[#CBFC01] text-[.9rem] font-semibold">Real-Time Chat, Command-Line Power</p>
                <h2 className="text-white text-[36px] font-black">
                    Connect, Chat, Collaborate - All from your <span className="text-[#CBFC01]">Command Line!</span>
                </h2>
                <p className="main-headline text-white text-opacity-70 leading-[27px] mt-4 text-[.9rem]">
                    Join public chat rooms, create new spaces, and engage in real-time conversations, all within the simplicity of your terminal.
                </p>
            </div>

            <button className="inline-flex py-[21px] px-[45px] items-center gap-[21px] bg-[#CBFC01] mt-4 rounded text-[#151515] font-bold text-[18px]">
                Get Started
                <FaArrowRight />
            </button>
            <div className="w-[568px] h-[568px] flex-shrink-0 rounded-full bg-[#CBFC01] mt-16">
                <img className="w-[500px] h-[260px] flex-shrink-0 rotate-[-45deg] rounded-[31.676px] border-2.5 border-solid border-white border-opacity-50 mt-4" src={demoImg} alt="tarminal-chat-app demo" />
                <img className="w-[500px] h-[260px] flex-shrink-0 rotate-[-45deg] rounded-[31.676px] border-2.5 border-solid border-white border-opacity-50 mt-12 ml-4" src={demoImg} alt="tarminal-chat-app demo" />
            </div>
           
        </div>
    )
}

export default Hero