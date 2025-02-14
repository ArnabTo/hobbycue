
const Login = () => {
    return (
        <div className="mx-5">
            <form>
                <input className="bg-[#EBEDF0] w-full rounded-md placeholder:text-[#939CA3] placeholder:px-4 my-4 py-2" placeholder="Email" type='text' />
                <input className="bg-[#EBEDF0] w-full rounded-md placeholder:text-[#939CA3] placeholder:px-4 my-4 py-2" placeholder="Email" type='password' />
                <div className="flex justify-between items-center mt-2">
                    <span><input type='checkbox' /> Remember me</span>
                    <span className="flex items-center gap-2">
                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5.33335H9.33333V4.00002C9.33333 2.16002 7.84 0.666687 6 0.666687C4.16 0.666687 2.66666 2.16002 2.66666 4.00002V5.33335H2C1.26666 5.33335 0.666664 5.93335 0.666664 6.66669V13.3334C0.666664 14.0667 1.26666 14.6667 2 14.6667H10C10.7333 14.6667 11.3333 14.0667 11.3333 13.3334V6.66669C11.3333 5.93335 10.7333 5.33335 10 5.33335ZM6 11.3334C5.26666 11.3334 4.66666 10.7334 4.66666 10C4.66666 9.26669 5.26666 8.66669 6 8.66669C6.73333 8.66669 7.33333 9.26669 7.33333 10C7.33333 10.7334 6.73333 11.3334 6 11.3334ZM4 5.33335V4.00002C4 2.89335 4.89333 2.00002 6 2.00002C7.10666 2.00002 8 2.89335 8 4.00002V5.33335H4Z" fill="#939CA3" />
                        </svg>
                        Frgot password?
                    </span>
                </div>
                <button className="bg-[#8064A2] w-full text-white py-2 rounded-md my-6">Continue</button>
            </form>

            <div className="flex justify-center items-center gap-4 my-5">
                <svg width="145" height="2" viewBox="0 0 145 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="145" height="2" fill="#CED4DA" />
                </svg>
                <span className="text-sm font-semibold text-center lg:text-start">Or connect with</span>
                <svg width="145" height="2" viewBox="0 0 145 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="145" height="2" fill="#CED4DA" />
                </svg>
            </div>
            
            <button className="w-full flex items-center border-[#8064A2] border-2 rounded-lg px-10 py-2 mb-6">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.44813 8.00005C3.44813 7.48043 3.53438 6.98218 3.6885 6.51493L0.992253 4.45605C0.466753 5.52293 0.170753 6.72518 0.170753 8.00005C0.170753 9.27393 0.466503 10.4753 0.991128 11.5416L3.68588 9.47868C3.53325 9.01355 3.44813 8.51718 3.44813 8.00005Z" fill="#FBBC05" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18212 3.27275C9.311 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2214 0 8.18212 0C5.01612 0 2.29512 1.8105 0.992249 4.456L3.68837 6.51487C4.30962 4.62912 6.0805 3.27275 8.18212 3.27275Z" fill="#EA4335" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18212 12.7274C6.08062 12.7274 4.30975 11.371 3.6885 9.48523L0.992249 11.5437C2.29512 14.1896 5.01612 16.0001 8.18212 16.0001C10.1361 16.0001 12.0017 15.3062 13.4019 14.0062L10.8426 12.0277C10.1205 12.4826 9.21112 12.7274 8.18212 12.7274Z" fill="#34A853" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2642 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z" fill="#4285F4" />
                </svg>
                <span className="mx-auto"> Continue with Google</span>
            </button>
            <button className="w-full flex items-center border-[#8064A2] border-2 rounded-lg px-10 py-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.9255 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94434 3.125 9.77172 3.125C10.647 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5537C9.55994 5.25 9.25 5.86666 9.25 6.49931V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z" fill="#1877F2" />
                    <path d="M11.1141 10.3125L11.4688 8H9.25V6.49931C9.25 5.86666 9.55991 5.25 10.5537 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77172 3.125C7.94434 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.15728 15.9667 7.57475 16 8 16C8.42525 16 8.84269 15.9667 9.25 15.9028V10.3125H11.1141Z" fill="white" />
                </svg>
                <span className="mx-auto">Continue with Facebook</span>
            </button>
        </div>
    );
};

export default Login;