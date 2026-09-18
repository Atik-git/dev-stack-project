import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../../types";
import SelectedTechCard from "./SelectedTechCard";
import {toast} from "react-toastify";


const SelectedTechnologies = ({ selectedTechnologies, setSelectedTechnologies }: { selectedTechnologies: Technology[]; setSelectedTechnologies: Dispatch<SetStateAction<Technology[]>>; }) => {

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast(`Stack is empty`)
    }
    return (
        <div className="border border-gray-200 p-4 rounded-xl shadow-sm space-y-2">
            <h2 className="font-bold text-[18px]">Your Stack</h2>
            <p className="text-gray-400 text-[12px] md:text-[16px]">{ selectedTechnologies.length === 0? 'No technologies selected yet' : `${selectedTechnologies.length} Technology Selected`}</p>

            <div className= {`${selectedTechnologies.length !== 0 ? "hidden" : "block"}`}>
                {
                    selectedTechnologies.length === 0 &&  <div className="flex justify-center items-center border border-dashed rounded-2xl border-gray-300 py-6">
                <p className="text-gray-300">your stack is empty</p>
            </div>
                }
            </div>
           <div className= {`space-y-4 ${selectedTechnologies.length === 0 ? "hidden" : "block"}`}>
            {
                 selectedTechnologies.length !== 0 && selectedTechnologies.map((technology, i) =>  <SelectedTechCard key={i} technology = {technology} selectedTechnologies = {selectedTechnologies} setSelectedTechnologies = {setSelectedTechnologies}></SelectedTechCard>)
            }
           </div>

           {
            selectedTechnologies.length !== 0 && <button onClick={handleRemoveAll} className="w-full py-2 border border-[#ed8c85] rounded-lg text-[#d82c20] mt-6">Remove All</button>
           }
        </div>
    );
};

export default SelectedTechnologies;