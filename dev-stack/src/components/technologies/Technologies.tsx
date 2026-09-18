import { use, useState } from "react";
import type { TechnologyProps, Technology } from "../../types";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";

const Technologies = ({ techDataPromise }: TechnologyProps) => {
    
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])
    const technologies = use(techDataPromise);
    return (
        <div className="px-4 md:px-0 container mx-auto mb-12">
            <div className="mb-6 md: space-y-3">
                {/* explore technologies heading */}
                <h2 className="text-center lg:text-start text-[24px] md:text-4xl font-bold">Explore the <span className="bg-linear-to-r from-[#f8701e] via-rose-500 to-[#ec4a94] bg-clip-text text-transparent">Technologies</span></h2>

                {/* explore technologies description */}
                <p className="text-center lg:text-start text-[12px] lg:text-[16px] text-[#6B7280] ">Pick one technology per category to build your ideal stack</ p>
            </div>
            <div className="grid lg:grid-cols-4 gap-4">
                <div className="grid lg:grid-cols-3 gap-4 lg:col-span-3">
                    {
                        technologies.map((technology, i) => <TechnologyCard key={i} technology={technology} selectedTechnologies = {selectedTechnologies} setSelectedTechnologies = {setSelectedTechnologies} 
                        ></TechnologyCard>)
                    }
                </div>
                <div>
                    <SelectedTechnologies selectedTechnologies = {selectedTechnologies} setSelectedTechnologies = {setSelectedTechnologies} 
                     ></SelectedTechnologies>
                </div>
            </div>
        </div>
    );
};

export default Technologies;