import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import Image from 'next/image'
import clipperLogo from "../components/icon/clipper.png"

import { BsFillKeyboardFill } from "react-icons/bs";

import { auth } from "../firebase/firebase";
import LogOutModal from "./LogOutModal";

const Header = ({ isShow }) => {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const [dropMenu, setDropMenu] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);



    const logout = async () => {
        await signOut(auth);
        router.push("/auth/signin")
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: '-100vh' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-100vh' }}
                transition={{ duration: 1, delay: 0.4 }}>

                <header>
                    <nav className="navbar">
                        <motion.div
                            transition={{ duration: 1, delay: 0.4 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                className="logo"
                                onClick={() => router.push("/")}
                                src={clipperLogo}
                                alt="Clipper"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="search-bar"
                        >
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search accounts and videos"
                            />
                            <button className="search-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 ml-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="nav-right"
                        >
                            {isShow && (
                                <>
                                    {user && (
                                        <motion.button
                                            animate={{ x: ['10px', '0px', '10px'] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 1,
                                                // repeatDelay: 1,
                                            }}
                                            onClick={() => router.push("/pin/create")}
                                            type="button"
                                            className="flex items center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 shadow-lg"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                            Upload
                                        </motion.button>
                                    )}
                                </>
                            )}

                            {user ? (
                                <div className="flex items-center">
                                    <img
                                        src={user?.photoURL}
                                        className="rounded-full w-10 cursor-pointer"
                                        alt="Avatar"
                                    />

                                </div>
                            ) : (
                                <button
                                    className="login-btn"
                                    onClick={() => router.push("/auth/signin")}
                                >
                                    Log in
                                </button>
                            )}
                            <div className="drop-down">
                                {dropMenu ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 17 17"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                        onClick={() => setDropMenu(false)}
                                    >
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 17 17"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                        onClick={() => setDropMenu(true)}

                                    >
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                    </svg>
                                )}
                                {dropMenu && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="menu z-[10000000000]"
                                    >
                                        <ul>
                                            {/* <li>
                        <div className="flex items-center px-3 gap-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                            />
                          </svg>
                          English
                        </div>
                      </li> */}
                                            {/* <li>
                        <div className="flex items-center px-3 gap-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                            />
                          </svg>
                          Feedback and help
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center px-3 gap-4">
                          <BsFillKeyboardFill className="text-[20px]" />
                          Keyboard shortcuts
                        </div>
                      </li> */}
                                            {user ? (
                                                <li>
                                                    <div
                                                        className="flex items-center px-3 gap-4"
                                                        onClick={() => setModalOpen(true)}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                                            />
                                                        </svg>
                                                        Log Out

                                                    </div>
                                                </li>
                                            ) : (
                                                <li>
                                                    <div
                                                        className="flex items-center px-3 gap-4"
                                                        onClick={() => router.push("/auth/signin")}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                                            />
                                                        </svg>
                                                        Log In
                                                    </div>
                                                </li>
                                            )}
                                        </ul>

                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                    </nav>
                </header>
                {modalOpen && <LogOutModal setModalOpen={setModalOpen} />}
            </motion.div>
        </>
    );
};

export default Header;
