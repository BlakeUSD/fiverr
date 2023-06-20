import React from 'react'
import logo from "../assets/logo.svg"
import messages from "../assets/messages.svg"
import inspection from "../assets/inspection.svg"
import yellowball from "../assets/yellowball.svg"
import handshake from "../assets/handshake.svg"
import download from "../assets/download.svg"
import magnifyingglass from "../assets/magnifyingglass.svg"
import rocket from "../assets/rocket.svg"
import hillcurve from "../assets/hillcurve.svg"
import valleycurve from "../assets/valleycurve.svg"
import computer from "../assets/computer.svg"
import linkedinblue from "../assets/linkedinblue.svg"
import twitterblue from "../assets/twitterblue.svg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function OtherLanding() {
    return (
        <div>
            <section className="bg-[url('../public/pinkbg.svg')] bg-no-repeat bg-cover mb-32">
                <nav className='flex items-center justify-between px-4 py-4 mb-4'>
                    <img className='h-7' src={logo} alt="" />
                    <button
                        className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full"
                        type="button">
                        Join Waitlist
                    </button>
                </nav>
                <div className='flex flex-col items-start justify-evenly gap-y-4 h-screen max-w-3xl ml-32'>
                    <h1 className='font-bold text-7xl'>The AI-powered solution for increasing sales by up to 50%</h1>
                    <p className='text-2xl'>Revolutionize your sales process with our intelligent sales assistant, powered by the latest AI technology.</p>
                    <button className='flex items-center gap-x-4 bg-transparent font-bold py-2 px-8 rounded-full outline outline-1'>Express Interest <ArrowRightAltIcon /></button>
                </div>
                <div className='flex items-center justify-center'>
                    <p>
                        <KeyboardDoubleArrowDownIcon />
                    </p>
                </div>
            </section>
            <section className='flex items-center justify-evenly gap-x-8 px-2 py-2 mb-32'>
                <div className=''>
                    <img className='object-contain max-w-xl rounded-md shadow-md' src={messages} alt="" />
                </div>
                <div className='max-w-sm'>
                    <p className='text-blue-500 font-semibold'>Enquiry</p>
                    <h2 className='font-bold text-2xl py-2'>Meet customer demands </h2>
                    <p className='text-gray-500 text-justify'>Intelligently answering questions and connecting more genuinely with customers. It also takes into account the customer's time zone, tone, and even culture.</p>
                </div>
            </section>
            <section className='flex flex-row-reverse items-center justify-evenly gap-x-8 px-2 py-2 mb-32'>
                <div>
                    <img className='object-contain max-w-xl rounded-md shadow-md' src={inspection} alt="" />
                </div>
                <div className='max-w-sm'>
                    <p className='text-blue-500 font-semibold'>Filter Leads</p>

                    <h2 className='font-bold text-2xl py-2'>Identify & resolve quality leads</h2>
                    <p className='text-gray-500 text-justify'>Filter quality leads from all received calls. Prioritise leads, qualify prospects, and even initiate conversations. Engages with leads automatically, qualifies them, and arranges follow-up calls.</p>
                </div>
            </section>
            <section className='flex items-center justify-evenly gap-x-8 px-2 py-2 mb-32'>
                <div className=''>
                    <img className='object-contain max-w-xl rounded-md shadow-md' src={yellowball} alt="" />
                </div>
                <div className='max-w-sm'>
                    <p className='text-blue-500 font-semibold'>Quality Leads</p>
                    <h2 className='font-bold text-2xl py-2'>Move quality leads to the next level</h2>
                    <p className='text-gray-500 text-justify'>Quality leads will be submitted to the sales team, and a demo with sales representative will be scheduled.</p>
                </div>
            </section>
            <section className='flex flex-row-reverse items-center justify-evenly gap-x-8 px-2 py-2 mb-32'>
                <div>
                    <img className='object-contain max-w-xl rounded-md shadow-md' src={handshake} alt="" />
                </div>
                <div className='max-w-sm'>
                    <p className='text-blue-500 font-semibold'>Close deal</p>

                    <h2 className='font-bold text-2xl py-2'>Quicker, more intelligent sales and support.</h2>
                    <p className='text-gray-500 text-justify mb-2'>Spend time in closing deal, we will do basic qualification and set up the meetings with highly qualified leads</p>
                    <p className='text-gray-500 text-justify mb-2'>Personalized conversations with a greater number of prospects, improving the chances of closing deals.</p>
                </div>
            </section>
            <section className="gap-x-8 gap-y-8 px-4 py-4 mb-32 flex flex-col items-center justify-center">
                <div className='flex items-center justify-around px-8 py-8 relative'>
                    <div className='flex flex-col items-center justify-center max-w-xs px-6 py-4 h-64 gap-y-2'>
                        <img src={download} alt="" />
                        <p className='font-semibold'>Enquiry</p>
                        <p className='text-sm px-2 py-2'>Receive number of enquiries and handle like human.</p>
                    </div>
                    <div>
                        <img src={hillcurve} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center max-w-xs px-6 py-4 h-64 gap-y-2'>
                        <img src={magnifyingglass} alt="" />
                        <p className='font-semibold px-2'>Filter Leads</p>
                        <p className='text-sm px-2 py-2'>Automatically engages with leads and arranges follow-up calls..</p>
                    </div>
                    <div>
                        <img src={valleycurve} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center max-w-xs px-6 py-4 h-64 gap-y-2'>
                        <img src={rocket} alt="" />
                        <p className='font-semibold'>Quality Leads</p>
                        <p className='text-sm px-2 py-2'>Quality leads will be redirected to a sales representative.</p>
                    </div>
                </div>
                <div>
                    <button className='flex items-center gap-x-4 bg-transparent font-bold py-2 px-8 rounded-full outline outline-1'>Express Interest <ArrowRightAltIcon /></button>
                </div>
            </section >
            <section className='flex flex-row-reverse items-center justify-evenly gap-x-8 px-2 py-2 mb-32'>
                <div>
                    <img className='max-w-xl rounded-md shadow-md' src={computer} alt="" />
                </div>
                <div className='max-w-sm'>
                    <p className='text-blue-500 font-semibold'>Security</p>

                    <h2 className='font-bold text-2xl py-2'>Protecting your data is our top priority</h2>
                    <p className='text-gray-500 text-justify mb-2'>Your data is safe, and you have complete control over it. SalesAgent.ai will never use your data without your permission, and we will only use it for the services you have selected.</p>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center gap-x-8 gap-y-8 px-16 py-16 bg-blue-500 text-white my-8 mb-24'>
                <p className='font-bold text-3xl max-w-3xl'>Want to increase your sales by more than 50%?</p>
                <button
                    className="bg-white hover:bg-gray-300 text-blue-500 font-semibold py-2 px-4 rounded-md"
                    type="button">
                    Get in touch with us
                </button>
            </section>
            <section className='flex items-center justify-around gap-x-8 px-2 py-2 mx-8'>
                <div className=''>
                    <img src={logo} alt="" />
                </div>
                <div className=''>
                    <p>Terms & Conditions • Privacy Policy</p>
                </div>
            </section>
            <section className='mb-8 mx-8'>
                <div className='flex items-center justify-around gap-x-8 px-2 py-2 mx-8'>
                    <div>
                        <p>©2023 salesagents.ai</p>
                    </div>
                    <div className='flex items-center justify-between gap-x-8 px-2 py-2'>
                        <img src={linkedinblue} alt="" />
                        <img src={twitterblue} alt="" />
                    </div>
                </div>
            </section>
        </div >
    )
}

export default OtherLanding