import c1 from "../assets/images/Stad 1.jpg";
import c2 from "../assets/images/Stad 2.jpg";
import c3 from "../assets/images/Stad 3.jpg";
import c4 from "../assets/images/Stad 4.jpg";
import c5 from "../assets/images/Stad 5.jpg";
import c6 from "../assets/images/Stad 6.jpg";
import t1 from "../assets/images/Stad 1.jpg";
import t2 from "../assets/images/Stad 2.jpg";
import t3 from "../assets/images/Stad 3.jpg";
import t4 from "../assets/images/Stad 4.jpg";
import t5 from "../assets/images/Stad 5.jpg";
import t6 from "../assets/images/Stad 6.jpg";
import t7 from "../assets/images/Stad 7.jpg";
import t8 from "../assets/images/Stad 4.jpg";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import s1 from "../assets/images/car.svg";
import s2 from "../assets/images/save.svg";
import s3 from "../assets/images/money.svg";
import s4 from "../assets/images/cha.svg";
import vt from "../assets/images/vt.svg";
import loc from "../assets/images/loc.svg";
import date from "../assets/images/date.svg";
import d1 from "../assets/images/Schools/sch1.jpeg";
import d2 from "../assets/images/Schools/sch2.jpeg";
import d3 from "../assets/images/Schools/sch3.jpeg";
import d4 from "../assets/images/Schools/sch4.jpg";
import d5 from "../assets/images/Schools/sch5.jpg";
import d6 from "../assets/images/Schools/sch6.jpg";
import d7 from "../assets/images/Schools/sch7.jpg";
import a1 from "../assets/images/Agents/ag1.jpeg";
import a2 from "../assets/images/Agents/ag2.jpeg";
import a3 from "../assets/images/Agents/ag3.jpeg";
import a4 from "../assets/images/Agents/ag4.jpeg";
import a5 from "../assets/images/Agents/ag5.jpeg";
import a6 from "../assets/images/Agents/ag6.jpeg";
import a7 from "../assets/images/Agents/ag7.jpeg";

export const steps = [
	{
		id: "01",
		title: "Preferred Field",
		description: "Choose according to visual preference",
	},
	{
		id: "02",
		title: "Pick Location & Date",
		description: "Most preferred date of occasion / competition",
	},
	{
		id: "03",
		title: "Rent Your Field",
		description: "Being the first to rent your preferred comes with perks",
	},
	{
		id: "04",
		title: "Finish Process",
		description: "Congras on succesfull renting!",
	},
];

export const brands = [
	{ title: "CLUBFIELD", image: c1 },
	{ title: "STANDARD", image: c2 },
	{ title: "REDSAND", image: c3 },
	{ title: "SAND", image: c4 },
	{ title: "GRASS", image: c5 },
	{ title: "KIDS", image: c6 },
];

export const types = [
	{ title: "CLUBFIELD", price: "₦500,000", image: t1 },
	{ title: "STANDARD", price: "₦600,000", image: t2 },
	{ title: "COMPETITION", price: "₦500,000", image: t3 },
	{ title: "OPEN", price: "₦400,000", image: t4 },
	{ title: "WIDE", price: "₦300,000", image: t5 },
	{ title: "KIDS", price: "₦400,000", image: t6 },
	{ title: "CLEAR", price: "₦500,000", image: t7 },
	{ title: "OPEN", price: "₦600,000", image: t8 },
];

export const schls = [
	{ title: "ADELAYO ACADEMY", avail: "Monday - Friday", image: d1 },
	{ title: "LIFEFORTE", avail: "Monday - Friday", image: d2 },
	{ title: "DEEPER LIFE", avail: "Monday - Friday", image: d3 },
	{ title: "THE INTERNATIONAL SCHL", avail: "Monday - Friday", image: d4 },
	{ title: "ADESINA", avail: "Monday - Friday", image: d5 },
	{ title: "KINGSTON", avail: "Monday - Friday", image: d6 },
	{ title: "ROSEBUD", avail: "Monday - Friday", image: d7 },
	{ title: "VALE", avail: "Monday - Friday", image: d1},
];

export const agents = [
	{ title: "ADERIBIGBE", avail: "Monday - Friday", image: a1 },
	{ title: "LAGBAJA", avail: "Monday, Wednesday and Friday", image: a2 },
	{ title: "GBAJAMIALA", avail: "Tuesdays and Thursdays", image: a3 },
	{ title: "AJANLEKOKO", avail: "Monday - Friday", image: a4 },
	{ title: "AGUNBIADE", avail: "Wekends only!", image: a5 },
	{ title: "EFIRIN", avail: "Monday - Friday", image: a6 },
	{ title: "AHMED", avail: "Monday and Wednesdays", image: a7 },
	{ title: "JEREMIAH", avail: "Monday - Thursdays", image: a1},
];

export const plans = [
	{
		title: "essential",
		price: "$29.50",
		services: [
			"✓ Quisque rhoncus",
			"✓ Lorem ipsum dolor",
			"✓ Vivamus velit mir",
			"✓ Velit mir",
			"✓ Elit mir ivamus",
		],
	},
	{
		title: "recommended",
		price: "$44.40",
		services: [
			"✓ Quisque rhoncus",
			"✓ Lorem ipsum dolor",
			"✓ Vivamus velit mir",
			"✓ Elit mir ivamus",
			"✓ Lorem ipsum dolor",
			"✓ Ipsum dolor",
		],
	},
	{
		title: "pro",
		price: "$70.50",
		services: [
			"✓ Quisque rhoncus",
			"✓ Lorem ipsum dolor",
			"✓ Vivamus velit mir",
			"✓ Velit mir",
			"✓ Elit mir ivamus",
			"✓ Quisque rhoncus",
			"✓ Vivamus velit mir",
		],
	},
];

export const posts = [
	{ title: "Safest car rental services in 2024", date: "Feb 22,2024 / Tips", image: p1 },
	{ title: "Best car collection in the world", date: "Feb 22,2024 / Tips", image: p2 },
	{ title: "Which car is the best for travel", date: "Feb 22,2024 / Tips", image: p3 },
];

export const services = [
	{ title: "Different cars", description: "Sed euismod mauris corper libero.", icon: s1 },
	{ title: "Easy Booking", description: "Nisi maecenas fermentum neque.", icon: s2 },
	{ title: "100% best rate", description: "Mauris corper accumsan urna sed.", icon: s3 },
	{ title: "customer support", description: "Orci duis ut lectus metus nam sette.", icon: s4 },
];

export const links = [
	{ title: "Home", path: "/" },
	{ title: "Fields", path: "../Pages/Fields/" },
	{ title: "Schools", path: "../Pages/Schools" },
	{ title: "Agents", path: "../Pages/Agents" },
];

export const ulink = [
	{ title: "Login", path: "/Pages/Login" },
	{ title: "Sign Up", path: "/Pages/Login" },
];

export const selects = [
	{ title: "Field Type", 
		icon: vt, 
		options: ["Standard", "Sand", "Grass", "Kids"] 
	},
	{
		title: "Location",
		icon: loc,
		options: ["Bodija", "Akobo", "Mokola", "Gate"],
	},
	{
		title: "Date",
		icon: date,
		options: ["Today", "Tommorow", "Next Week"],
	},
];

export interface User {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	type: string;
	profilePicture?: string;
  }


// types.ts

export interface Agent {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	profilePicture?: string;
	type: string;
	collections: Collection[];
  }
  
  export interface Collection {
	id: string;
	name: string;
	fields: Field[];
  }
  
  export interface Field {
	id: string;
	name: string;
	location: string;
	description?: string;
  }
  