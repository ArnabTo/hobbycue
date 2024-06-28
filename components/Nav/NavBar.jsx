import Image from 'next/image';
import Logo from '../../public/HobbyCue Logo.png'
import GroupPng from '../../public/Group.png'
import HobbyPng from '../../public/Hobbies.png'
import BookPng from '../../public/bookmark_black_24dp 1.png'
import NotiPng from '../../public/notifications_black_24dp 1.png'
import CartPng from '../../public/Product 3.png'

const NavBar = () => {
    return (
        <div className='lg:max-w-7xl mx-auto'>
            <div className='grid grid-cols-3 justify-center items-center'>
                <div>
                    <Image src={Logo} />
                </div>
                <div>
                    <input type='search' placeholder='search here...' /><button>Search</button>
                </div>
                <div>
                    <ul className='flex gap-4'>
                        <li className='relative group'>
                            <div>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <Image src={GroupPng} />
                                    <span>Explore</span>
                                </div>
                                <div className='absolute w-40  group-hover:block'>
                                    <ul className='py-3 flex flex-col gap-1'>
                                        <li>People - Community</li>
                                        <li>Places - Venues</li>
                                        <li>Programs - Events</li>
                                        <li>Products - Store</li>
                                        <li>Blogs</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
            
                        <li><Image src={BookPng} /></li>
                        <li><Image src={NotiPng} /></li>
                        <li><Image src={CartPng} /> </li>
                        <li><button>Sign in</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;