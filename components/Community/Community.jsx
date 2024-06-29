'use client'
import Image from 'next/image';
import CommunityPng from '../../public/Group 99.png'
const Community = () => {

    const handleScrolltoTOp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='bg-[#F7FDFF] mx-5'>
            <div className='max-w-[1300px] mx-auto pt-24'>
                <div>
                    <div>
                        <div className=' mb-24'>
                            <h2 className="italic font-medium text-2xl mb-8">Your <span className="text-[#8064A2]">Hobby</span>, Your <span className="text-[#0096C8]">Community</span></h2>
                            <button className="px-7 py-2 border rounded-lg font-semibold bg-[#8064A2] text-white">Get started</button>
                        </div>
                    </div>
                    <div className='relative'>
                        <button className='absolute -top-20 right-0 bg-white rounded-full shadow-md shadow-[#bcdcf5]' onClick={handleScrolltoTOp}>
                            <svg className='m-5' width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0067 7.08009C13.3334 6.75342 13.3334 6.22675 13.0067 5.90009L7.4667 0.360088C7.2067 0.100088 6.7867 0.100088 6.5267 0.360088L0.986699 5.90009C0.660032 6.22675 0.660033 6.75342 0.986699 7.08009C1.31337 7.40675 1.84003 7.40675 2.1667 7.08009L7.00003 2.25342L11.8334 7.08675C12.1534 7.40675 12.6867 7.40675 13.0067 7.08009Z" fill="#939CA3" />
                            </svg>
                        </button>
                    </div>
                    <Image src={CommunityPng} alt='community' />
                </div>
            </div>
        </div>
    );
};

export default Community;