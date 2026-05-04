import "./Navbar.css"

export default function () {
    return (
        <>
        <div className="navbar-container">
            <div className="navbar">
            <a href="#home">
                <div className="navbar-logo">
                <img src="https://i.postimg.cc/25PNh1cY/gs.png"
                alt="GSI logo"
                className="logo-img"
                />
                </div>
            </a>
                <div className="navbar-nav" >
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </div>
        </div>
        </>
    )
}