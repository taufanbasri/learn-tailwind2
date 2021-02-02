function Navbar() {
    return (
        <div className="bg-gradient-to-br from-rose-500 to-pink-500">
            <div className="flex flex-col lg:flex-row">
                <div className="flex items-center justify-between px-4 py-4 border-b lg:py-0 border-rose-400 lg:border-b-0">
                <div>
                    <a href="#" className="font-semibold text-white uppercase">Brand</a>
                </div>
                <div>
                    <button className="block text-white focus:outline-none lg:hidden">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    </button>
                </div>
                </div>
                <div className="flex flex-col justify-between w-full py-4 lg:flex-row lg:py-0">
                <div className="flex flex-col lg:flex-row">
                    <a href="#" className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">Blog</a>
                    <a href="#" className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">Galery</a>
                    <a href="#" className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">About</a>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <a href="#" className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">Login</a>
                    <a href="#" className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">Register</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
