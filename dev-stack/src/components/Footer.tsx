import FooterLogo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div className="container px-4">

            <div>
                {/* footer logo */}
                <div className="flex justify-center">
                    <img src={FooterLogo} alt="" />
                </div>

                {/* footer description */}
                <p>Curated tools, technologies, and resources for developers
                    building modern software.</p>

                {/* social media links */}
                <div className="flex">
                    <span><a href="#">GitHub</a></span>
                    <span><a href="#">Twiter</a></span>
                    <span><a href="#">Linkedin</a></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;