function Home() {
    return (
        <header
        className="flex justify-center items-center w-full h-[100vh] transition-colors duration-500 
                    bg-[radial-gradient(circle_at_center,var(--bg-color),var(--primary-color))] 
                    relative overflow-hidden ease-in-out"
        id="home"
        >
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none 
                        bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"
            ></div>

            <div className="intro text-center relative">
                <h2
                className="text-[20px] md:text-[50px] mr-[40px] md:mr-[90px] font-extrabold 
                            bg-gradient-to-r from-[var(--bg-color)] via-[var(--tertiary-color)] to-[var(--accent-color)] 
                            bg-clip-text text-transparent tracking-wider font-[Cinzel]"
                >
                I'AM
                </h2>
                <h1
                className="text-[30px] md:text-[80px] font-extrabold 
                            bg-gradient-to-r from-[var(--tertiary-color)] via-[var(--accent-color)] to-[var(--secondary-color)] 
                            bg-clip-text text-transparent uppercase tracking-wider font-[Cinzel]"
                >
                MUHAMMAD IKHSAN
                </h1>
                <h3
                className="text-[15px] md:text-[20px] ml-[30px] md:ml-[150px] font-semibold uppercase 
                            bg-gradient-to-r from-[var(--accent-color)] to-[var(--secondary-color)] 
                            bg-clip-text text-transparent tracking-wide font-[Cinzel]"
                >
                AS (IT) ENTHUSIAST
                </h3>
            </div>
        </header>

    )
}

export default Home;