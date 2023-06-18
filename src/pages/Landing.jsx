import React from 'react'
import logo from "../assets/logo.svg"
import lady from "../assets/lady.svg"
import man from "../assets/man.svg"
import computer from "../assets/computer.svg"
import hourglass from "../assets/hourglass.svg"
import twomen from "../assets/twomen.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"

function Landing() {
    return (
        <div className=''>
            <div className="bg-[url('../public/pinkbg.svg')] bg-no-repeat bg-cover mb-8">
                <div className='flex items-center justify-between px-4 py-4 mb-4'>
                    <img className='h-7' src={logo} alt="" />
                    <button
                        className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full"
                        type="button">
                        Join Waitlist
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-4 text-center py-64'>
                    <h1 className='font-bold text-3xl'>100x your sales reachout & qualification with human-sounding virtual agents.</h1>
                    <p className='text-xl'>Holistic approach with voice call, email, whatsapp & linkedin interaction with potential leads</p>
                    <button className='bg-transparent font-bold py-2 px-4 rounded-full outline mb-8'>Express Interest</button>
                    <p className='text-xl'>Never before seen, fastest lead reachout, personalization quality and conversion</p>
                </div>
            </div>
            <div className='flex items-center justify-around gap-x-8 px-2 py-2'>
                <div>
                    <img className='rounded-md' src={lady} alt="" />
                </div>
                <div className='max-w-sm'>
                    <h2 className='font-bold text-2xl py-2'>Reach out to more leads in less time.</h2>
                    <p className='text-gray-500 text-justify'>You can reach 100x more leads than before! Our virtual agents work as per lead customer timezone to reach out to your prospects and qualify them so that your sales team can focus on closing deals.</p>
                </div>
            </div>
            <div className='flex flex-row-reverse items-center justify-around gap-x-8 px-2 py-2'>
                <div>
                    <img className='rounded-md' src={man} alt="" />
                </div>
                <div className='max-w-sm'>
                    <h2 className='font-bold text-2xl py-2'>Boost salesperson productivity with AI.</h2>
                    <p className='text-gray-500 text-justify'>Our platform leverages AI to boost your salesperson's productivity. The virtual agents can prioritize leads, qualify prospects and even engage in initial conversations. Saving salesperson's time spent in top of funnel, where drop off is 80-90%</p>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-4">
                <div className='text-center'>
                    <h2 className='font-bold text-2xl py-2'>How it works</h2>
                    <p className=''>Integrate with your sales tech stack, VoIP, email, whatsapp, linkedin, CRM etc and start using virtual sales agents for for top-of-quality reach out & qualification  for your salesreps.</p>
                </div>
                <div className='flex items-center justify-around px-8 py-8'>
                    <div className='flex flex-col items-center justify-center text-center max-w-xs px-6 py-4'>
                        <h2 className='text-6xl text-gray-300 mb-2 font-semibold'>01</h2>
                        <p className='font-semibold mb-4'>Inbound sales enquiry</p>
                        <p className='text-sm px-2 py-2'>The bot will assist with initial calls and will handle all entry-level queries.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center max-w-xs px-6 py-4'>
                        <h2 className='text-6xl text-gray-300 mb-2 font-semibold'>02</h2>
                        <p className='font-semibold mb-4'>Outbound calls automation with sales agent</p>
                        <p className='text-sm px-2 py-2'>Our virtual agent automatically engages with leads, qualifies them, and schedules follow-up calls.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center max-w-xs px-6 py-4'>
                        <h2 className='text-6xl text-gray-300 mb-2 font-semibold'>03</h2>
                        <p className='font-semibold mb-4'>Qualification of lead and set up of demos with salesperson</p>
                        <p className='text-sm px-2 py-2'>After successfully identifying a lead of high quality, virtal agent will setup a demo with your sale representative</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-around gap-x-8 px-2 py-2'>
                <div className='relative'>
                    <img className='rounded-full' src={twomen} alt="" />
                    <img className='rounded-full absolute -bottom-24 -right-16' src={hourglass} alt="" />
                </div>
                <div className='max-w-sm'>
                    <h2 className='font-bold text-2xl py-2'>Quicker, more intelligent sales and support.</h2>
                    <p className='text-gray-500 text-justify mb-2'>Ability to customize the virtual agent for your business and continuously improve its performance. </p>
                    <p className='text-gray-500 text-justify mb-2'>To scale the outbound calling process quickly and efficiently.</p>
                    <p className='text-gray-500 text-justify mb-2'>Personalized conversations with prospects, improving the chances of closing deals.</p>
                </div>
            </div>
            <div className='flex flex-row-reverse items-center justify-around gap-x-8 px-2 py-2'>
                <div>
                    <img className='' src={computer} alt="" />
                </div>
                <div className='max-w-sm'>
                    <h2 className='font-bold text-2xl py-2'>Protecting your data is our top priority</h2>
                    <p className='text-gray-500 text-justify'> Your data is safe, and you have complete control over it. SalesAgent.ai will never use your data without your permission, and we will only use it for the services you have selected.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-x-8 gap-y-8 px-16 py-16 bg-gray-100 rounded-md mx-8 my-8'>
                <p className='font-bold text-3xl max-w-3xl'>With our AI-powered sales agent, increase your monthly sales, optimize monthly sales forecasting, and provide high quality leads to salesperson for demos and closure</p>
                <button
                    className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                    type="button">
                    Get in touch with us
                </button>
            </div>
            <div className='flex items-center justify-around gap-x-8 px-2 py-2 mx-8'>
                <div className=''>
                    <img src={logo} alt="" />
                </div>
                <div className=''>
                    <p>Terms & Conditions • Privacy Policy</p>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-around gap-x-8 px-2 py-2'>
                    <div>
                        <p>©2023 salesagents.ai</p>
                    </div>
                    <div className='flex items-center justify-between gap-x-8 px-2 py-2'>
                        <img src={linkedin} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing