import { useState } from "react";
import "./Why.css"

export default function Why () {
    const items = [
       {
            title: "EDITORIAL STYLE ROOTED IN STORYTELLING",
            image: "https://i.postimg.cc/Y0C8zB39/photo-2026-05-11-00-29-36.jpg"
        },
        {
            title: "Specialized in wellness, beauty & lifestyle",
            image: "https://i.postimg.cc/j2Sv4YX2/photo-2026-05-11-00-29-54.jpg"
        },
        {
            title: "Seamless creative direction & styling",
            image: "https://i.postimg.cc/Qtb07dpc/photo-2026-05-11-00-29-44.jpg"
        },
        {
            title: "In-studio or natural light location options",
            image: "https://i.postimg.cc/prLkJMZy/photo-2026-05-11-00-30-08.jpg"
        },
        {
            title: "Designed for emotional brand connection",
            image: "https://i.postimg.cc/4d5Bcxzt/photo-2026-05-11-00-29-22.jpg"
        },
        {
            title: "Trusted by thoughtful, female brands",
            image: "https://i.postimg.cc/KzNJT8nB/photo-2026-05-11-00-28-50.jpg"
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