import logoWhite from "../../assets/images/logowhite.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import ig from "../../assets/images/ig.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/youtube.svg";
import loc from "../../assets/images/footer-loc.svg";
import call from "../../assets/images/call.svg";
import time from "../../assets/images/time.svg";
import { links } from "../../data";

const Footer = () => {
	return (
		<div className="w-full flex flex-col bg-gray-900">
			<div className="w-full lg:h-[450px] flex lg:flex-row flex-col lg:py-0 py-10 lg:gap-0 gap-16 lg:items-center justify-around lg:px-[310px] px-5">
				<div className="flex flex-col gap-4">
					<img
						src={logoWhite}
						alt="logo"
						className="w-[40%]"
					/>
					<p className="text-gray-300 max-w-[420px]">
						Vel non nibh vestibulum massa ullam corper bib endum ultrices venenatis, id id sed
						mass.
					</p>
					<div className="flex items-center gap-6 mt-5">
						<a href="">
							<img
								src={facebook}
								alt="facebook"
								className="cursor-pointer"
							/>
						</a>
						<a href="">
							<img
								src={twitter}
								alt="twitter"
								className="cursor-pointer"
							/>
						</a>
						<a href="">
							<img
								src={ig}
								alt="ig"
								className="cursor-pointer"
							/>
						</a>
						<a href="">
							<img
								src={linkedin}
								alt="linkedin"
								className="cursor-pointer"
							/>
						</a>
						<a href="https://www.youtube.com/@Learncityng">
							<img
								src={youtube}
								alt="youtube"
								className="cursor-pointer"
							/>	
						</a>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<span className="uppercase text-gray-300 font-bold text-[26px]">contact info</span>
					<div className="flex flex-col gap-5">
						<div className="flex items-center gap-2">
							<img
								src={loc}
								alt="location"
							/>
							<span className="text-gray-300">State Road 54 Trinity, Florida</span>
						</div>
						<div className="flex items-center gap-2">
							<img
								src={call}
								alt="phone"
							/>
							<span className="text-gray-300">Call: 666 333 9999</span>
						</div>
						<div className="flex items-center gap-2">
							<img
								src={time}
								alt="working-hours"
							/>
							<span className="text-black">8:00am -18:00 pm, Sat: Closed</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between lg:py-0 py-5 lg:h-[80px] border-t border-[#5F5F5F] lg:px-[310px] px-5 gap-7">
				<span className="text-gray-300 font-medium">
					© AFT, All rights reserved - Developed by AFT Solutions
				</span>
				<div className="hidden lg:flex items-center gap-7">
					{links.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className="text-gray-300"
						>
							{item.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
