import nightIcon from "../assets/night.png";

function Navbar() {
    return (
        <nav
        className="fixed z-50 bottom-0 left-1/2 -translate-x-1/2 md:w-[80%] w-[98%] h-15 
                    bg-[rgba(226,34,34,0.9)] backdrop-blur-md 
                    text-white flex justify-around p-3 rounded-t-3xl 
                    shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.2)]"
        >
        {/* kiri */}
        <div className="button1-navbar flex gap-2 hidden md:block">
            <button
            id="toggleMode2"
            className="hover:translate-y-[-3px] rounded-3xl hover:shadow-md transition duration-300"
            >
            <img src={nightIcon} alt="mode" className="w-[35px]" />
            </button>
        </div>

        {/* tengah */}
        <div className="menu-navbar flex flex-1 justify-center font-serif">
            <a href="#home" className="py-2">
            <span className="block mx-3 md:hidden relative group">
                Home
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            <span className="hidden mx-6 md:block relative group">
                Home
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            </a>

            <a href="#background" className="py-2">
            <span className="block mx-3 md:hidden relative group">
                Background
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            <span className="hidden mx-6 md:block relative group">
                Background
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            </a>

            <a href="#skills" className="py-2">
            <span className="block mx-3 md:hidden relative group">
                Tools
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            <span className="hidden mx-6 md:block relative group">
                Tools
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            </a>

            <a href="#project" className="py-2">
            <span className="block mx-3 md:hidden relative group">
                Project
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            <span className="hidden mx-6 md:block relative group">
                Project
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-white
                                transition-all duration-500 group-hover:w-full 
                                group-hover:left-0"></span>
            </span>
            </a>
        </div>

        {/* kanan */}
        <div className="button2-navbar flex gap-2 items-center">
            <a href="#contact">
            <button
                className="py-1 px-5 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] 
                        text-white rounded-3xl font-serif shadow-md hover:shadow-xl hover:scale-105 
                        transition duration-300 ease-in-out hidden md:block"
            >
                Contact
            </button>
            </a>
        </div>
        </nav>
    );
}

export default Navbar;
