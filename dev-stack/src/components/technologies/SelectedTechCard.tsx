

import type { Technology } from "../../types";
import { RxCross2 } from "react-icons/rx";

const SelectedTechCard = ({ technology }: { technology: Technology;  }) => {
    const { name, category, icon } = technology;
    return (
        <div>
            <div className="flex justify-between items-center border border-gray-300 rounded-xl p-3">

                {/* technology icon, title and category */}
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10" src={icon} alt="" />

                    {/* technology name and category */}
                    <div>
                        <h3 className="font-bold text-[16px]">{name}</h3>
                        <p className="text-[10px]">{category}</p>
                    </div>
                </div>

                {/* Cross button */}
                <div className="text-red-500 text-[24px]">
                    <RxCross2/>
                </div>
            </div>
        </div>
    );
};

export default SelectedTechCard;