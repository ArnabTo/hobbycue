'use client'
import Image from 'next/image';
import Logo from '../../public/HobbyCue Logo.png'
import ShortLogo from '../../public/shortlogo.png'
import GroupPng from '../../public/Group.png'
import HobbyPng from '../../public/Hobbies.png'
import BookPng from '../../public/bookmark_black_24dp 1.png'
import NotiPng from '../../public/notifications_black_24dp 1.png'
import CartPng from '../../public/Product 3.png'
import { useState } from 'react';
import Login from '../Auth/Login';
import Join from '../Auth/Join';

const NavBar = () => {

    const [menu, setMenuState] = useState(false);
    const [tab, setTabState] = useState('signIn');

    const handleMenuBar = () => {
        setMenuState(!menu)
    }

    const handleSignIn = () => {
        setTabState('signIn')
    }
    const handleJoinIn = () => {
        setTabState('joinIn')
    }
    const signInButtonStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: tab === 'signIn' ? '#8064A2' : '#939CA3',
        borderBottom: tab === 'signIn' ? '3px solid #8064A2' : 'none',
        cursor: 'pointer',
        marginRight: '10px',
    };
    const joinInButtonStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: tab === 'joinIn' ? '#8064A2' : '#939CA3',
        borderBottom: tab === 'joinIn' ? '3px solid #8064A2' : 'none',
        cursor: 'pointer',
        marginRight: '10px',
    };


    return (
        <div className='max-w-[1300px] mx-auto my-4'>
            <div className='hidden lg:grid grid-cols-2 items-center'>
                <div className='grid grid-cols-2'>
                    <div className='mx-auto'>
                        <Image className='' src={Logo} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className='w-[300px] px-3 py-3 bg-[#F8F9FA] border-black outline-none' type='search' placeholder='search here...' />
                        <button className='bg-[#8064A2] text-white p-4 rounded-r-md'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.83333 2C4.17185 2 2 4.17185 2 6.83333C2 9.49481 4.17185 11.6667 6.83333 11.6667C7.92439 11.6667 8.92964 11.2977 9.74023 10.6836L12.862 13.8047C12.9234 13.8687 12.997 13.9198 13.0784 13.9549C13.1598 13.9901 13.2474 14.0087 13.3361 14.0096C13.4248 14.0105 13.5128 13.9937 13.5949 13.9602C13.6771 13.9267 13.7517 13.8771 13.8144 13.8144C13.8771 13.7517 13.9267 13.6771 13.9602 13.5949C13.9937 13.5128 14.0105 13.4248 14.0096 13.3361C14.0087 13.2474 13.9901 13.1598 13.9549 13.0784C13.9198 12.997 13.8687 12.9234 13.8047 12.862L10.6836 9.74023C11.2977 8.92964 11.6667 7.92439 11.6667 6.83333C11.6667 4.17185 9.49481 2 6.83333 2ZM6.83333 3.33333C8.77423 3.33333 10.3333 4.89244 10.3333 6.83333C10.3333 7.76524 9.97135 8.60687 9.38281 9.23242C9.32552 9.2739 9.2752 9.32422 9.23372 9.38151C8.60803 9.9708 7.7659 10.3333 6.83333 10.3333C4.89244 10.3333 3.33333 8.77423 3.33333 6.83333C3.33333 4.89244 4.89244 3.33333 6.83333 3.33333Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <ul className='flex gap-6 justify-center items-center'>
                        <li className='relative group'>
                            <div>
                                <div className='flex justify-center items-center gap-1 cursor-pointer'>
                                    <Image src={GroupPng} />
                                    <span className='font-medium'>Explore</span>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99991 5.07101L2.17891 1.25001C1.76491 0.836014 1.09291 0.836014 0.678908 1.25001C0.264908 1.66401 0.264908 2.33601 0.678908 2.75001L5.29291 7.36401C5.68391 7.75501 6.31691 7.75501 6.70691 7.36401L11.3209 2.75001C11.7349 2.33601 11.7349 1.66401 11.3209 1.25001C10.9069 0.836014 10.2349 0.836014 9.82091 1.25001L5.99991 5.07101Z" fill="#939CA3" />
                                    </svg>
                                </div>
                                <div className='absolute w-52 hidden group-hover:block shadow-lg rounded-md'>
                                    <ul className='py-4 flex flex-col gap-1'>
                                        <li className='bg-white text-gray-600 px-5 py-1'>People - Community</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Places - Venues</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Programs - Events</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Products - Store</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Blogs</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className='relative group'>
                            <div>
                                <div className='flex justify-center items-center gap-1 cursor-pointer'>
                                    <Image src={BookPng} />
                                    <span className='font-medium'>Explore</span>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99991 5.07101L2.17891 1.25001C1.76491 0.836014 1.09291 0.836014 0.678908 1.25001C0.264908 1.66401 0.264908 2.33601 0.678908 2.75001L5.29291 7.36401C5.68391 7.75501 6.31691 7.75501 6.70691 7.36401L11.3209 2.75001C11.7349 2.33601 11.7349 1.66401 11.3209 1.25001C10.9069 0.836014 10.2349 0.836014 9.82091 1.25001L5.99991 5.07101Z" fill="#939CA3" />
                                    </svg>
                                </div>
                                <div className='absolute w-52 hidden group-hover:block shadow-lg rounded-md'>
                                    <ul className='py-4 flex flex-col gap-1'>
                                        <li className='bg-white text-gray-600 px-5 py-1'>People - Community</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Places - Venues</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Programs - Events</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Products - Store</li>
                                        <li className='bg-white text-gray-600 px-5 py-1'>Blogs</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className='cursor-pointer'><Image src={BookPng} /></li>
                        <li className='cursor-pointer'><Image src={NotiPng} /></li>
                        <li className='cursor-pointer'><Image src={CartPng} /> </li>
                        <li><button className='border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white px-8 py-2 rounded-md'>Sign in</button></li>
                    </ul>
                </div>
            </div>
            {/* MOBILE NAV */}
            <div className='md:hidden flex justify-between items-center px-4 shadow-lg shadow-[#F3F3F3]'>
                <div><Image className='' src={ShortLogo} /></div>
                <div>
                    <ul className='flex gap-4 justify-center items-center'>
                        {
                            !menu &&
                            <>
                                <li className='cursor-pointer'>
                                    <svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.25 0C3.25778 0 0 3.25778 0 7.25C0 11.2422 3.25778 14.5 7.25 14.5C8.88658 14.5 10.3945 13.9465 11.6104 13.0254L16.293 17.707C16.3851 17.803 16.4955 17.8796 16.6176 17.9324C16.7397 17.9852 16.8712 18.0131 17.0042 18.0144C17.1373 18.0158 17.2692 17.9906 17.3924 17.9403C17.5156 17.89 17.6275 17.8157 17.7216 17.7216C17.8157 17.6275 17.89 17.5156 17.9403 17.3924C17.9906 17.2692 18.0158 17.1373 18.0144 17.0042C18.0131 16.8712 17.9852 16.7397 17.9324 16.6176C17.8796 16.4955 17.803 16.3851 17.707 16.293L13.0254 11.6104C13.9465 10.3945 14.5 8.88658 14.5 7.25C14.5 3.25778 11.2422 0 7.25 0ZM7.25 2C10.1613 2 12.5 4.33866 12.5 7.25C12.5 8.64786 11.957 9.9103 11.0742 10.8486C10.9883 10.9108 10.9128 10.9863 10.8506 11.0723C9.91205 11.9562 8.64886 12.5 7.25 12.5C4.33866 12.5 2 10.1613 2 7.25C2 4.33866 4.33866 2 7.25 2Z" fill="#8064A2" />
                                    </svg>
                                </li>
                                <li className='cursor-pointer'>
                                    <svg width="24" height="24" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99999 20C9.09999 20 9.99999 19.1 9.99999 18H5.99999C5.99999 19.1 6.88999 20 7.99999 20ZM14 14V9C14 5.93 12.36 3.36 9.49999 2.68V2C9.49999 1.17 8.82999 0.5 7.99999 0.5C7.16999 0.5 6.49999 1.17 6.49999 2V2.68C3.62999 3.36 1.99999 5.92 1.99999 9V14L0.70999 15.29C0.0799904 15.92 0.51999 17 1.40999 17H14.58C15.47 17 15.92 15.92 15.29 15.29L14 14Z" fill="#8064A2" />
                                    </svg>
                                </li>
                            </>
                        }
                        <li onClick={handleMenuBar}>
                            {
                                menu ? <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L7 5.58997L2.11 0.699971C1.72 0.309971 1.09 0.309971 0.700001 0.699971C0.310001 1.08997 0.310001 1.71997 0.700001 2.10997L5.59 6.99997L0.700001 11.89C0.310001 12.28 0.310001 12.91 0.700001 13.3C1.09 13.69 1.72 13.69 2.11 13.3L7 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.41 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z" fill="#6D747A" />
                                </svg>
                                    :
                                    <svg width="24" height="24" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z" fill="#8064A2" />
                                    </svg>
                            }

                        </li>
                    </ul>
                </div>
            </div>
            {/* MOBILE NAV ITEM */}
            {menu && (
                <div className='mt-8'>
                    <div className='flex justify-center items-center gap-10 mb-6'>
                        <button onClick={handleSignIn} style={signInButtonStyle} >Sign In</button>
                        <button onClick={handleJoinIn} style={joinInButtonStyle} >Join In</button>
                    </div>
                    <div>
                        <div>
                            {
                                tab === 'signIn' ?
                                    <>
                                        <Login />
                                    </>
                                    :
                                    <>
                                        <Join/>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;