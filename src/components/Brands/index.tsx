import { brands } from "../../data"

const Brands = () =>{

    return <div className="w-full flex-col items-center justify-center gap-8 lg:px-[310px] px-5 mt-[140px]">

        <span className="text-title lg-text-[48px] text-[35px] font-bold text-center">
                Great Field / Stadium Rental Services
        </span>

        <div className="w-full flex-col items-center gap-5 flex-wrap">
            
                {brands.map((item, index: number) =>(

                    <div key={index} className="flex flex-col gap-2 items-center lg:w-auto w-full">

                        <img src={item.image} alt={item.title} className="w-1/2"/>
                        <span className="font-bold text-title text-[26px]">{item.title}</span>

                    </div>

                ))}

        </div>
    </div>

    
}

export default Brands