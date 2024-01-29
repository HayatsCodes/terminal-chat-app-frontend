import map from '../assets/map.png'
import mainInterfaceImg from '../assets/tarminal-chat-app-main-interface.png'
import joinRoomInterfaceImg from '../assets/join-chat-room-interface.png'
import createRoomInterfaceImg from '../assets/create-chat-room-interface.png'
import realTimeInterfaceImg from '../assets/real-time-chat-interface.png'

const Features = () => {
    return (
        <div id='features'>
            {/* <h3 className="features text-left text-[#CBFC01] mt-44 mb-8 text-xl font-bold ">Features</h3> */}
            <div className='mt-32 flex flex-col gap-16'>

                <div  className='mb-8 flex flex-col md:flex-row gap-8 items-start'>
                    <div className='w-[85%]'>
                        <h4 className='text-white text-2xl font-bold feature-text'>Command-line <span className='text-[#CBFC01] leading-[48px]'>Interface</span></h4>
                        <p className='feature-headline text-white text-opacity-70 leading-[24px] mt-4'> Experience chat like never before, directly from your command line.</p>
                    </div>
                    <div className="feature-img-container w-[300px] h-[300px] flex-shrink-0 rounded   bg-[#CBFC01]">
                        <img className="feature-img w-[500px] drop-shadow-xl h-[300px] flex-shrink-0 rounded border-2.5 border-solid border-white border-opacity-50 mt-4" src={mainInterfaceImg} alt="An image showing the tarminal-chat-app command-line interface" />
                    </div>
                </div>

                <div className='mb-8 flex flex-col md:flex-row-reverse gap-8 items-start'>
                    <div className='w-[85%]'>
                        <h4 className='text-white text-2xl font-bold feature-text'>Join Public Chat <span className='text-[#CBFC01] leading-[48px]'>Rooms</span></h4>
                        <p className='feature-headline text-white text-opacity-70 leading-[24px] mt-4'> Connect with a diverse community in public chat rooms.</p>
                    </div>
                    <div className="feature-img-container w-[300px] h-[300px] flex-shrink-0  rounded bg-[#CBFC01]">
                        <img className="feature-img w-[500px] drop-shadow-xl h-[300px] flex-shrink-0 rounded border-2.5 border-solid border-white border-opacity-50 mt-4" src={joinRoomInterfaceImg} alt="An image showing the join public chat room interface in the terminal" />
                    </div>
                </div>

                <div className='mb-8 flex flex-col md:flex-row gap-8 items-start'>
                    <div className='w-[85%]'>
                        <h4 className='text-white text-2xl font-bold feature-text'>Create Public Chat <span className='text-[#CBFC01] leading-[48px]'>Rooms</span></h4>
                        <p className='feature-headline text-white text-opacity-70 leading-[24px] mt-4'> Start your own conversations and build communities effortlessly.</p>
                    </div>
                    <div className="feature-img-container w-[300px] h-[300px] flex-shrink-0  rounded bg-[#CBFC01]">
                        <img className="feature-img w-[500px] drop-shadow-xl h-[300px] flex-shrink-0 rounded border-2.5 border-solid border-white border-opacity-50 mt-4" src={createRoomInterfaceImg} alt="An image showing the join public chat room interface in the terminal" />
                    </div>
                </div>

                <div className='mb-8 flex flex-col md:flex-row-reverse gap-8 items-start'>
                    <div className='w-[85%]'>
                        <h4 className='text-white text-2xl font-bold feature-text'>Real Time <span className='text-[#CBFC01] leading-[48px]'>Interaction</span></h4>
                        <p className='feature-headline text-white text-opacity-70 leading-[24px] mt-4'> Engage in dynamic conversations with users in real-time.</p>
                    </div>
                    <div className="feature-img-container w-[300px] h-[300px] flex-shrink-0  rounded bg-[#CBFC01]">
                        <img className="feature-img w-[500px] drop-shadow-xl h-[300px] flex-shrink-0 rounded border-2.5 border-solid border-white border-opacity-50 mt-4" src={realTimeInterfaceImg} alt="An image showing the join public chat room interface in the terminal" />
                    </div>
                </div>

                <div className='mb-8 flex flex-col md:flex-row gap-8 items-start'>
                    <div className='w-[85%]'>
                        <h4 className='text-white text-2xl font-bold feature-text'>Anyone, anywhere in the <span className='text-[#CBFC01] leading-[48px]'>world!</span></h4>
                        <p className='feature-headline text-white text-opacity-70 leading-[24px] mt-4 flex-shrink-0'> Chat with people from around the globe, with no geographical barriers.</p>
                    </div>
                    <img className="w-full md:w-[60%] mt-4" src={map} alt="world map" />
                </div>

            </div>
        </div>
    )
}

export default Features