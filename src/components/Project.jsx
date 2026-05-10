import "./Project.css"

export default function Project () {
    return (
        <section id="projects">
            <div className="past">
                <div className="past-track">
                    <span className="past-text">Past Projects</span>
                    <span className="past-text">Past Projects</span>
                    <span className="past-text">Past Projects</span>
                    <span className="past-text">Past Projects</span>
                    <span className="past-text">Past Projects</span>
                    <span className="past-text">Past Projects</span>
                </div>
            </div>
            
            <div className="project">
                <figure>
                    <img src="https://i.postimg.cc/9F7x34VT/Screenshot-2026-03-15-121427.png"
                    alt="project"
                    className="side-P"/>
                    <figcaption>Editorial campaign</figcaption>
                </figure>

                <figure>
                    <img src="https://i.postimg.cc/9F7x34VT/Screenshot-2026-03-15-121427.png"
                    alt="project"
                    className="center-P"
                    />
                    <figcaption>Fashion Shoots IN-Studio</figcaption>
                </figure>

                <figure>
                <img src="https://i.postimg.cc/9F7x34VT/Screenshot-2026-03-15-121427.png"
                    alt="project"
                    className="side-P"
                    />
                    <figcaption>Natural Light Shoots</figcaption>
                </figure>
            </div>
        </section>
    );
}