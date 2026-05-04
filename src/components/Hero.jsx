import {useRef, useState, useEffect} from "react";
import "./Hero.css";

//typing & erasing
function useTypewriter (text, typingSpeed = 110, erasingSpeed = 65, pauseTime = 2200) {
    const[displayed, setDisplayed] = useState("");

    useEffect(() => {
        let timer;
        let currentIndex = 0;
        let erasing = false;

        function tick() {
            if (!erasing) {
                //Typing
                if (currentIndex < text.length) {
                    currentIndex++;
                    setDisplayed(text.slice(0, currentIndex));
                    timer = setTimeout(tick, typingSpeed);
                } else {
                    //Done. pause and erase
                    timer = setTimeout(() => {
                        erasing = true;
                        tick();
                    }, pauseTime);
                }
            } else {
                //erasing
                if (currentIndex > 0) {
                    currentIndex--;
                    setDisplayed(text.slice(0, currentIndex));
                    timer = setTimeout(tick, erasingSpeed);
                } else {
                    //erase done. pause and type
                    erasing = false;
                    timer = setTimeout(tick, typingSpeed);
                }
            }
        }
        //loop
        timer = setTimeout(tick, typingSpeed);

        return () => clearTimeout(timer);
    }, []);
    return displayed;
}
        
        

export default function Hero() {
    const heroRef = useRef(null);
    const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
    const [revealed, setRevealed] = useState(false);

    const title = useTypewriter("GENTLE SHOT IT");

    const handleMouseMove = (e) => {
        const rect = heroRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        if (!revealed) setRevealed(true);
    };

    const handleMouseLeave = () => {
        setMouse({ x: -9999, y: -9999});
    };

    const spotlightStyle = {
       /* WebkitMaskImage: `radial-gradient(circle 300px at ${mouse.x}px ${mouse.y}px, black 0%, black75%, transparent 100%)`,*/
        maskImage: `radial-gradient(circle 250px at ${mouse.x}px ${mouse.y}px, black 0%, black 100%, transparent 100%)`
    };
    return (
        <section className="hero" ref={heroRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                {/*Layer 1 - color*/}
            <div className="bg-color" />

                {/*Layer 2 - img revealed by spotlight*/}
            <div className="bg-photo"style={spotlightStyle} />

                {/*navbar*/}
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="https://i.postimg.cc/Jh33DYxP/l1.png"
                    alt="GSI logo"
                    className="logo-img"
                    />
                </div>

                <div className="navbar-nav">
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </nav>
    

            <div className="hero-content">
                <h1 className="hero-title">
                    {title}
                    <span className="blink-bar" />
                </h1>
                <p>
                    Gentle-shot-it creates soulful, editorial style photography and styling for modern wellness, beauty, and lifestyle brands.
                    Rooted in intention, driven by detail, and captured with care.
                </p>
            </div>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}