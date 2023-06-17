import React from 'react'
import fog from "../assets/fog.svg"
import avatar from "../assets/avatar.svg"
import slack from "../assets/slack.svg"
import googlemeet from "../assets/googlemeet.svg"

function AccountPage() {
    return (
        <div className='h-screen'>
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
            <div>
                <div className=''>
                    <h2 className='font-semibold text-xl'>Account Details</h2>
                    <p>You are currently using a basic account. Your FogTeams basic account will expire in <span className='text-orange-500 font-semibold'>100 days</span>.</p>
                    <div className='inline-flex text-purple-600 bg-purple-200'>
                        <p className='font-bold py-2 px-4 rounded-l'>Add members</p>
                    </div>
                    <p className=''>smith@fogteams.com, john@fogteams.com, rik@fogteams.com</p>
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>Features</h2>
                    <ul>
                        <li>FogTeams Google meet Chrome extension to take and share meeting notes collaboratively, automatically accessible in the next meeting</li>
                        <li>Add and assign action items with deadlines</li>
                        <li>Auto email at the end of meeting</li>
                        <li>Create personal notes</li>
                        <li>Limited AI generated notes</li>
                    </ul>
                </div>
                <h2 className='font-semibold text-xl'>Download links</h2>
                <div className='flex items-center justify-start'>
                    <div className='font-semibold text-xl'>
                        <img className='px-2 py-2' src={slack} alt="" />
                        <div className='px-2 py-2'>
                            <p className='font-semibold'>
                                Slack App
                            </p>
                        </div>
                    </div>
                    <div className='font-semibold text-xl'>
                        <img className='px-2 py-2' src={googlemeet} alt="" />
                        <p className='font-semibold'>
                            Google Meet Extension
                        </p>
                    </div>
                </div>
                <p className='text-center text-gray-500 font-semibold'>
                    © 2023 FOGTeams
                </p>
            </div>
        </div>
    )
}

export default AccountPage