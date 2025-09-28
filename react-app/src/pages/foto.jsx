import { useEffect, useRef } from "react";
import ikhsan1 from "../assets/ikhsan1.png";
import ikhsan2 from "../assets/ikhsan2.png";

function Foto() {
    const imgRef = useRef(null);

    useEffect(() => {
        const images = [ikhsan1, ikhsan2];
        let index = 0;

        // bikin sentinel di dalam React
        const sentinel = document.createElement("div");
        sentinel.id = "scroll-sentinel";
        sentinel.style.position = "absolute";
        sentinel.style.top = window.innerHeight * 1.5 + "px";
        sentinel.style.left = "0";
        sentinel.style.width = "1px";
        sentinel.style.height = "1px";
        sentinel.style.pointerEvents = "none";
        document.body.appendChild(sentinel);

        // slideshow effect
        const addGlitchEffect = () => {
        if (!imgRef.current) return;
        imgRef.current.classList.add("glitch");

        setTimeout(() => {
            imgRef.current.style.opacity = 0;
            setTimeout(() => {
            index = (index + 1) % images.length;
            imgRef.current.src = images[index];
            imgRef.current.style.opacity = 1;
            imgRef.current.classList.add("rgb-glitch");
            }, 400);
        }, 500);
        };

        const interval = setInterval(addGlitchEffect, 5000);

        return () => {
        clearInterval(interval);
        sentinel.remove(); // hapus sentinel pas komponen hilang
        };
    }, []);

    return (
        <main className="flex left-1/2">
        <img
            ref={imgRef}
            id="slideshow"
            src={ikhsan1}
            alt="ikhsan1"
            className="fixed z-10 bottom-14 md:w-1/3 w-2/3 left-1/2 -translate-x-1/2"
        />
        </main>
    );
}

export default Foto;
