import React from 'react';

const AddOwn = () => {
    return (
        <div className='bg-[#F7FDFF] py-28 mb-20 lg:mb-28'>
            <div className="max-w-[1300px] mx-auto">
                <div>
                    <div className="bg-white border border-[#CED4DA] px-6 lg:px-11 py-10 rounded-lg mx-5">
                        <div className="mb-6 flex justify-center lg:justify-start items-center gap-2 lg:gap-6 ">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0002 0.333313C7.80016 0.333313 0.333496 7.79998 0.333496 17C0.333496 26.2 7.80016 33.6666 17.0002 33.6666C26.2002 33.6666 33.6668 26.2 33.6668 17C33.6668 7.79998 26.2002 0.333313 17.0002 0.333313ZM23.6668 18.6666H18.6668V23.6666C18.6668 24.5833 17.9168 25.3333 17.0002 25.3333C16.0835 25.3333 15.3335 24.5833 15.3335 23.6666V18.6666H10.3335C9.41683 18.6666 8.66683 17.9166 8.66683 17C8.66683 16.0833 9.41683 15.3333 10.3335 15.3333H15.3335V10.3333C15.3335 9.41665 16.0835 8.66665 17.0002 8.66665C17.9168 8.66665 18.6668 9.41665 18.6668 10.3333V15.3333H23.6668C24.5835 15.3333 25.3335 16.0833 25.3335 17C25.3335 17.9166 24.5835 18.6666 23.6668 18.6666Z" fill="#0096C8" />
                            </svg>
                            <span className="font-semibold text-2xl">Add your own</span>
                        </div>
                        <p className="mb-8 text-center lg:text-start">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                        <button className="px-7 py-2 border-[#8064A2] border rounded-lg font-semibold text-[#8064A2] hover:bg-[#8064A2] hover:text-white flex mx-auto lg:inline-block">Add new</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOwn;