
import BannerImage from "../assets/banner.png"
const Banner = () => {
    return (
        <div className="md:flex md:items-center md:justify-center px-4 md:px-0 py-12 md:py-30 space-y-4  md:container md:mx-auto">
            <div className="space-y-4 flex-1">
                {/* banner-title */}
                <h1 className="text-3xl md:text-6xl text-center md:text-left font-bold md:mb-8">Build Your Ideal <br /> <span className="bg-linear-to-r from-[#f8701e] via-rose-500 to-[#ec4a94] bg-clip-text text-transparent">Develpnment Stack</span></h1>

                {/* banner-description */}
                <p className="text-center text-[#475569] text-[14px] md:text-[16px] md:text-left md:mb-15">Explore frontend, backend, database, and tooling
                    options, compare them side by side, and put together
                    the stack that fits your next project.</p>

                {/* banner explore-technologies and learn-more buttons  */}
                <div className="flex md:block md:space-x-5  justify-center items-center gap-4 md:mt-8">
                    <button className="bg-linear-to-r from-[#f8701e] via-rose-500 to-[#ec4a94] w-45 h-10 rounded-md text-[12px] md:text-[14px] text-white">Explore Technologies</button>
                    <button className="border border-gray-200 w-45 h-10 rounded-md text-[12px] md:text-[14px] text-[#374151]">Learn More</button>
                </div>
            </div>

            {/* banner-image-for-mobile */}
            <div className="flex-1">
                <div className="flex justify-center md:justify-end items-center ">
                    <img src={BannerImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;