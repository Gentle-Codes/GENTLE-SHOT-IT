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
                    <img src="https://i.postimg.cc/Y0C8zB39/photo-2026-05-11-00-29-36.jpg"
                    alt="project"
                    className="side-P"/>
                    <figcaption>Community shoots</figcaption>
                </figure>

                <figure>
                    <img src="https://i.postimg.cc/4d5Bcxzt/photo-2026-05-11-00-29-22.jpg"
                    alt="project"
                    className="center-P"
                    />
                    <figcaption>Brand IN-Studio shoots</figcaption>
                </figure>

                <figure>
                <img src="https://i.postimg.cc/prLkJMZy/photo-2026-05-11-00-30-08.jpg"
                    alt="project"
                    className="side-P"
                    />
                    <figcaption>Natural Light Shoots</figcaption>
                </figure>
            </div>
        </section>
    );
}