import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../../types";
import { IoStar } from "react-icons/io5";
const TechnologyCard = ({ technology, selectedTechnologies, setSelectedTechnologies }: { technology: Technology; selectedTechnologies: Technology[], setSelectedTechnologies: Dispatch<SetStateAction<Technology[]>> }) => {
    console.log(selectedTechnologies, setSelectedTechnologies)
    const { name, category, description, icon, rating, difficulty, badge } = technology;
    return (
        <div className="border border-gray-200 relative p-4 space-y-4 rounded-xl shadow-sm">
            {/* badge */}
            <span className="absolute top-4 right-4 font-bold px-3 py-1 rounded-2xl text-[12px] text-[#0369A1] bg-[#E0F2FE]">{badge}</span>

            {/* technology title image  */}
            <div className="flex items-center gap-3">
                <img className="w-10 h-10" src={icon} alt="" />
                <h3 className="font-bold text-[18px]">{name}</h3>
            </div>

            {/* technology card description */}
            <p className="text-[#4B5563] text-[12px] md:text-[16px] border-b-2 border-gray-100 pb-3">{description}</p>

            {/* category difficulty and rating */}
            <div className="flex justify-between items-center text-nowrap">
                <span className=" bg-gray-100 py-1 px-3 rounded-md" >{category}</span>
                <span className="text-[12px]">{difficulty}</span>
                <span className="text-[#F59E0B] flex items-center gap-1">
                    <IoStar />
                    <span>
                        {rating}
                    </span>
                </span>
            </div>

            {/* Add to stack button */}
            <button className="border w-full rounded-lg py-2 text-white  bg-black">Add to Stack</button>

        </div>
    );
};

export default TechnologyCard;