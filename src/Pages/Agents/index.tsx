import { useState } from "react"
import { agents } from "../../data";
const Agents = () =>{
    const [items, setItems] = useState([
        {title: "Bodija", active: true},
        {title: "Mokola", active: false},
        {title: "Sanyo", active: false},
        {title: "Oyo", active: false},
        {title: "Ogbomosho", active: false},
        {title: "Sango", active: false},
    ])

    const handleClick = (title: string) =>{
        setItems((prev) =>
            prev.map((i) =>{
                return{...i, active: i.title === title}
            })
        )
    }
    return (
		<div className="w-full lg:px-[310px] px-5 flex flex-col gap-8 items-center justify-center mt-[140px]">
			<span className="text-title lg:text-[48px] text-[35px] font-bold uppercase">
				Find by location
			</span>
			<div className="w-full flex items-center justify-center gap-5 overflow-x-auto">
				{items.map((item) => (
					<div
						key={item.title}
						onClick={() => handleClick(item.title)}
						className={`h-11 px-6 cursor-pointer font-medium flex items-center border justify-center text-[17px] ${
							item.active
								? "bg-gray-400 text-black border-title"
								: "bg-white text-disabled border-gray-300"
						}`}
					>
						{item.title}
					</div>
				))}
			</div>
			<div className="w-full flex items-center flex-wrap justify-center gap-5">
				{agents.map((item, index: number) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-2 lg:w-auto w-full"
					>
						<img
							src={item.image}
							alt={item.title}
							className="lg:h-[210px] w-full"
						/>
                        <a href="#">
						<span className="font-bold text-title text-[22px]">{item.title}</span></a>
						<div className="text-secondary">
							Available from <span className="font-semibold text-lg">{item.avail} weekly</span>
						</div>
						<span className="mt-1 font-bold border-b border-placeholder pb-1 text-sm cursor-pointer">
							RENT NOW
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Agents;
