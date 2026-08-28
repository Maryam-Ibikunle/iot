import React from 'react'
import { useState } from 'react';
import { Settings, ToolCase, Wifi, ChartBar, Bell, Menu, X } from 'lucide-react';
import { navlinks } from '../constants';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className=''>
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed z-50 p-5"
                >
                    {isOpen ? (
                    <X className="w-6 h-6 text-red-600" />
                    ) : (
                    <Menu className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>

            <div className={`fixed top-0 left-0 z-40 sm:flex flex-col justify-between bg-gray-900 w-60 h-screen text-[#c8fbff] font-sans transition-transform duration-500 ease-in-out md:sticky lg:w-80 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div>
                    <div className={`uppercase text-[#00f0ff] p-10 font-sans text-2xl tracking-[0.25em]`}>kinetics</div>
                    <ul className='m-5 font-semibold'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `inline-flex w-full gap-4 p-5 ${
                                        isActive ? "text-gray-900 bg-[#00f0ff] rounded-2xl duration-200" : "bg-transparent"
                                    }`
                                    }
                            >
                                <ToolCase />
                                Overview
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/devices"
                                className={({ isActive }) =>
                                    `inline-flex w-full gap-4 p-5 ${
                                        isActive ? "text-gray-900 bg-[#00f0ff] rounded-2xl duration-200" : "bg-transparent"
                                    }`
                                    }
                            >
                                <Wifi />
                                Devices
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/realtime"
                                className={({ isActive }) =>
                                    `inline-flex w-full gap-4 p-5 ${
                                        isActive ? "text-gray-900 bg-[#00f0ff] rounded-2xl duration-200" : "bg-transparent"
                                    }`
                                    }
                            >
                                <ChartBar />
                                Real-time Data
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                                to="/alerts"
                                className={({ isActive }) =>
                                    `inline-flex w-full gap-4 p-5 ${
                                        isActive ? "text-gray-900 bg-[#00f0ff] rounded-2xl duration-200" : "bg-transparent"
                                    }`
                                    }
                            >
                                <Bell />
                                Alerts
                            </NavLink>
                        </li>
                    </ul>


                </div>
                <div className='inline-flex gap-4 mx-10 m-5'><Settings/><span>Settings</span></div>
            </div>
            </>
        )
    
    }

export default Navbar