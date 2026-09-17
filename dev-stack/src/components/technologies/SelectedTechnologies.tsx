
const SelectedTechnologies = () => {
    return (
        <div className="border border-gray-200 p-4 rounded-xl shadow-sm space-y-2">
            <h2 className="font-bold text-[18px]">Your Stack</h2>
            <p className="text-gray-400 text-[12px] md:text-[16px]">No technologies selected yet</p>
            <div className="flex justify-center items-center border border-dashed rounded-2xl border-gray-300 py-6">
                <p className="text-gray-300">your stack is empty</p>
            </div>
        </div>
    );
};

export default SelectedTechnologies;