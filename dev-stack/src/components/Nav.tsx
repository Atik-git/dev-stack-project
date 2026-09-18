import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <header className="shadow-sm sticky top-0 bg-white z-1">
            <div className="flex justify-between items-center py-3 px-4 lg:py-6 lg:px-0   lg:container mx-auto">
                {/* hamburger-icon */}
                <div className="hamburger-icon text-3xl lg:hidden">
                    <RxHamburgerMenu />
                </div>

                {/* Logo */}
                <div>
                    <img className="w-25 lg:w-35 h-auto " src={Logo} alt="Dev-stack-logo" />
                </div>

                {/* nav-links */}
                <div className="hidden lg:block">
                    <ul className="flex gap-8 text-[#475569]">
                    <li><a className="text-[#DB2777]" href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>

                {/* sign-in and sign-up buttons */}
                <div className="space-x-2 lg:space-x-6">
                    <button className="lg:text-base text-[12px] font-bold text-[#4B5563] cursor-pointer">Sign In</button>
                    <button className="bg-[#D91B7E] px-4 py-1 rounded-3xl text-white text-[12px] lg:text-base font-bold cursor-pointer">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Nav;