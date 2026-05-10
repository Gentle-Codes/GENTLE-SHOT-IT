import { useState } from "react";
import "./Why.css"

export default function Why () {
    const items = [
       {
            title: "EDITORIAL STYLE ROOTED IN STORYTELLING",
            image: "https://i.postimg.cc/26kJrCTz/Screenshot-2026-03-15-121358.png"
        },
        {
            title: "Specialized in wellness, beauty & lifestyle",
            image: "https://i.postimg.cc/9F7x34VT/Screenshot-2026-03-15-121427.png"
        },
        {
            title: "In-studio or natural light location options",
            image: "https://i.postimg.cc/Wzch3XxF/me.jpg"
        },
        {
            title: "Seamless creative direction & styling",
            image: "https://i.postimg.cc/V5QWsR1w/framer01.avif"
        },
        {
            title: "Designed for emotional brand connection",
            image: "https://i.postimg.cc/9F7x34VT/Screenshot-2026-03-15-121427.png"
        },
        {
            title: "Trusted by thoughtful, female-founded brands",
            image: "https://i.postimg.cc/0N8ZJcSz/Screenshot-2026-03-15-121458.png"
        },
    ];
    const [activeIndex, setActiveIndex] = useState (0);
    const isLast = activeIndex === items.length - 1;

    return (
        <div className="why">
            <div className= {`box ${activeIndex === items.length - 1 ? "last-active" : ""}`}>
            {items.map((item, index) => (
                    <div
                    key={index}
                    className={`item ${ activeIndex === index ? "active" : ""}`}
                    onMouseEnter={() => setActiveIndex (index)}
                    >
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>

            <div className="right">
                <img 
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                />
            </div>
        </div>
    );
}