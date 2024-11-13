import bg from "../../assets/images/bg.png";
import { selects } from "../../data";

const Header = () => {
	return (
		<div className="w-full lg:h-screen flex flex-col">

		<div
				className="w-full lg:h-[calc(110vh-75px)] bg-cover bg-fit flex items-center justify-center flex-col lg:py-0 py-5"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<span className="text-white font-bold lg:text-[63px] text-[52px] lg:text-left text-center">
					Best Fields For Your Events or Competitions
				</span>
				<span className="text-white text-[20px] lg:text-left text-center">
					We have many Fields / Stadiums up for rent.
				</span>
				<div className="flex flex-col gap-5 lg:px-[310px] pl-5 pr-7 w-full mt-10">
					<div className="w-full flex lg:flex-row flex-col items-center justify-between gap-5 lg:pb-0 pb-5">
						{selects.map((item) => (
							<div
								key={item.title}
								className="flex w-full flex-col gap-2"
							>
								<span className="font-medium text-white">{item.title}</span>
								<div className="relative inline-block w-full">
									<select className="text-disabled w-full h-[60px] outline-none px-3 appearance-none">
										{item.options.map((option, index: number) => (
											<option
												key={index}
												value={option}
												selected={index === 0}
												disabled={index === 0}
											>
												{option}
											</option>
										))}
									</select>
									<img
										src={item.icon}
										alt={item.title}
										className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
									/>
								</div>
							</div>
						))}
					</div>
					<button className="bg-primary w-full h-[60px] text-white font-bold">
						Find the Best fields
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
