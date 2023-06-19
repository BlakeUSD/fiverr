import React, { useState } from 'react'
import fog from "../assets/fog.svg"
import avatar from "../assets/avatar.svg"
import slack from "../assets/slack.svg"
import googlemeet from "../assets/googlemeet.svg"
import CloseIcon from '@mui/icons-material/Close';

function AccountPage() {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className='flex items-center justify-between shadow-md mx-2'>
                <div className="flex items-center py-2 px-2">
                    <div className="mr-1">
                        <img src={fog} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl">
                            <span className="font-bold">FOG</span>Teams
                        </h1>
                        <p className="text-purple-500 text-xs font-semibold text-right">Own Your Time</p>
                    </div>
                </div>
                <div className='mx-2'>
                    <img src={avatar} alt="" />
                </div>
            </nav>
            <div className='flex items-center justify-center relative'>
                <div className='h-screen max-w-7xl my-2'>
                    <div className='py-2 px-2'>
                        <div className='flex items-center justify-between px-2 py-2'>
                            <div className='flex items-center justify-center'>
                                <img className='px-2 py-2' src={avatar} alt="" />
                                <div className='px-2 py-2'>
                                    <p className='font-semibold text-2xl'>Smith Williams</p>
                                    <p className='text-sm text-gray-500'>smith@fogteams.com</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-x-4'>
                                <h1 className='text-orange-500 font-semibold text-2xl'>Basic account</h1>
                                <div>
                                    <button className="text-purple-800 bg-transparent hover:bg-purple-500 font-semibold hover:text-white py-2 px-4 mr-1 border border-purple-800 hover:border-transparent rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center text-xl">
                                        Upgrade your Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='leading-9 px-2 py-2'>
                        <div className='mb-4 text-left'>
                            <h2 className='font-semibold text-xl'>Account Details</h2>
                            <p>You are currently using a basic account. Your FogTeams basic account will expire in <span className='text-orange-500 font-semibold'>100 days</span>.</p>
                            <div className='inline-flex text-purple-600 bg-purple-200 px-1'>
                                <button onClick={openModal} className='font-semibold px-2'>Add members</button>
                            </div>
                            <p className='text-md'>smith@fogteams.com, john@fogteams.com, rik@fogteams.com</p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='font-semibold text-xl'>Features</h2>
                            <ul className='list-disc ml-8'>
                                <li>FogTeams Google meet Chrome extension to take and share meeting notes collaboratively, automatically accessible in the next meeting</li>
                                <li>Add and assign action items with deadlines</li>
                                <li>Auto email at the end of meeting</li>
                                <li>Create personal notes</li>
                                <li>Limited AI generated notes</li>
                            </ul>
                        </div>
                        <h2 className='font-semibold text-xl'>Download links</h2>
                        <div className='flex items-center'>
                            <div className='flex items-center justify-center font-semibold'>
                                <img className='px-2 py-2' src={slack} alt="" />
                                <p className=''>
                                    Slack App
                                </p>
                            </div>
                            <div className='flex items-center justify-center  font-semibold'>
                                <img className='px-2 py-2' src={googlemeet} alt="" />
                                <p className='font-semibold'>
                                    Google Meet Extension
                                </p>
                            </div>
                        </div>
                        <p className='text-xs text-center text-gray-500 font-semibold'>
                            © 2023 FOGTeams
                        </p>
                    </div>
                </div>

                {/* Popup starts*/}
                <div className={`${isOpen ? 'visible' : 'invisible'} flex items-center justify-center px-4 py-4 w-fit-content absolute h-screen w-full bg-gray-100 bg-opacity-80`}>
                    <div className="bg-white px-8 pt-6 pb-8 mb-4 rounded-lg shadow-md">
                        <div className='flex items-center justify-between'>
                            <h2 className='font-semibold px-2 py-2'>Invite</h2>
                            <CloseIcon onClick={closeModal} className='cursor-pointer' />
                        </div>
                        <hr className='mb-4' />
                        <div className="flex items-center justify-between gap-x-8 mb-2">
                            <input
                                className="appearance-none border rounded-sm py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                type="text"
                                placeholder="Email"
                            />
                            <button
                                className="bg-purple-300 hover:bg-purple-400 font-semibold text-white py-2 px-8 border hover:border-transparent rounded"
                                type="button"
                            >
                                Invite
                            </button>
                        </div>
                        <div>
                            <p className='text-sm text-gray-400 py-2 mb-2'>Add members from your organization</p>
                            <div className='flex flex-col gap-y-2'>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='bg-purple-200 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold'>S</div>
                                    <p>Smith <span className='text-gray-400'>(you)</span></p>
                                    <span className='absolute right-0 text-gray-400 text-sm'>Owner</span>
                                </div>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='bg-purple-200 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold'>J</div>
                                    <p>John</p>
                                    <span className='absolute right-0 text-gray-400 text-sm'>team</span>
                                </div>
                                <div className='flex items-center gap-x-2 relative'>
                                    <div className='bg-purple-200 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold'>R</div>
                                    <p>Rick</p>
                                    <span className='absolute right-0 text-gray-400 text-sm'>team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Popup ends */}

            </div >
        </>
    )
}

export default AccountPage