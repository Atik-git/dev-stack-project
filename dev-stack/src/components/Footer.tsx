import FooterLogo from "../assets/logo-text.png"
import { BsDot } from "react-icons/bs";
const Footer = () => {
    return (
        <div className=" px-4  pt-8 pb-12  shadow-sm md: mt-24">
            <div className="container mx-auto space-y-6">
                <div className="lg:grid lg:grid-cols-4 lg:gap-8 border-b-2 border-gray-200">

                    {/* footer logo , description and media links */}
                    <div className="space-y-6">
                        {/* footer logo */}
                        <div className="flex justify-center lg:block">
                            <img src={FooterLogo} alt="" />
                        </div>

                        {/* footer description */}
                        <p className="text-[12px] text-[#6B7280] text-center lg:text-left">Curated tools, technologies, and resources for developers
                            building modern software.</p>

                        {/* social media links */}
                        <div className="flex justify-evenly lg:justify-start items-center  pb-4 lg:gap-3">
                            <span><a href="#">GitHub</a></span>
                            <span className="lg:hidden"><BsDot /></span>
                            <span><a href="#">Twiter</a></span>
                            <span className="lg:hidden"><BsDot /></span> 
                            <span><a href="#">Linkedin</a></span>
                        </div>
                    </div>

                    {/* footer product section */}
                    <div className="hidden md:block space-y-2">
                        <h2 className="font-bold">PRODUCT</h2>
                        <ul className= "text-[#9CA3AF] text-[12px] space-y-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Products</a></li>
                        </ul>
                    </div>

                    {/* footer company section */}
                    <div  className="hidden md:block space-y-2">
                        <h2 className="font-bold">COMPANY</h2>
                        <ul className= "text-[#9CA3AF] text-[12px] space-y-1">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div  className="hidden md:block space-y-2">
                        <h2 className="font-bold">LEGAL</h2>
                        <ul className= "text-[#9CA3AF] text-[12px] space-y-1">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* copyright and privacy */}
                <div className="text-[10px] lg:text-[12px] text-[#9CA3AF] flex justify-between">
                    <p> &copy; 2026 Dev Stack. All rights reserved.</p>
                    <div className="space-x-2">
                        <span><a href="#">Privacy</a></span>
                        <span><a href="#">Terms</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;