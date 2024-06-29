'use client';
import Image from 'next/image';
import GroupPng from '../../public/Group 27.png'
import { useState } from 'react';
import Login from '../Auth/Login';
import Join from '../Auth/Join';
import LoginLanding from '../Auth/LoginLanding';
import JoinInLanding from '../Auth/JoinInLanding';
const Landing = () => {


    const [tab, setTabState] = useState('signIn');


    const handleSignIn = () => {
        setTabState('signIn')
    }
    const handleJoinIn = () => {
        setTabState('joinIn')
    }
    const signInButtonStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: tab === 'signIn' ? '#8064A2' : '#939CA3',
        borderBottom: tab === 'signIn' ? '3px solid #8064A2' : 'none',
        cursor: 'pointer',
    };
    const joinInButtonStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: tab === 'joinIn' ? '#8064A2' : '#939CA3',
        borderBottom: tab === 'joinIn' ? '3px solid #8064A2' : 'none',
        cursor: 'pointer',
    };

    return (
        <div className='bg-[#F7F5F9] px-6 lg:px-24 pt-8 lg:pt-24 mb-12 lg:mb-24'>
            <div className='max-w-[1300px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <div className='mb-12 lg:mb-24'>
                            <h2 className='italic font-semibold text-black text-xl lg:text-4xl mb-6'>Explore your <span className='text-[#0096C8]'>hobby</span> or <span className='text-[#8064A2]'>passion</span></h2>
                            <span>
                                <p className='w-full font-light text-base text-black mb-4 hidden lg:block'>
                                    Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                                </p>
                                <p className='w-full font-light text-base text-black lg:hidden mb-4'>
                                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
                                </p>
                                <p className='font-light text-base text-black mb-4 hidden lg:block'>
                                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                                </p>
                            </span>
                        </div>
                        <div>
                            <Image className='hidden lg:block' src={GroupPng} alt='landing png' />
                        </div>
                    </div>
                    <div className='mb-12 lg:mb-0'>
                        <div>
                            <div className='flex justify-center lg:justify-start items-center gap-8 lg:mx-24 mb-6'>
                                <button onClick={handleSignIn} style={signInButtonStyle} >Sign In</button>
                                <button onClick={handleJoinIn} style={joinInButtonStyle} >Join In</button>
                            </div>
                            <div>
                                <div className='lg:mx-24'>
                                    {
                                        tab === 'signIn' ?
                                            <>
                                                <LoginLanding />
                                            </>
                                            :
                                            <>
                                                <JoinInLanding />
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image className='lg:hidden' src={GroupPng} alt='landing png' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;