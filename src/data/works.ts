import type { ImageMetadata } from "astro";
import workOneImage from "../assets/works/work-1.jpg";
import workTwoImage from "../assets/works/work-2.jpeg";
import workThreeImage from "../assets/works/work-3.jpg";

export interface Work {
	id: string;
	title?: string;
	category?: string;
	writingModel?: string;
	description?: string;
	modelSteps?: string[];
	image: ImageMetadata;
	alt?: string;
	isFictional?: boolean;
	aiAssisted?: boolean;
	credits?: string[];
}

export const works: Work[] = [
	{
		id: "work-1",
		title: "إعلان تسويقي عقاري",
		writingModel: "نموذج AIDA",
		description: "تم تطبيق نموذج AIDA وهو ترتيب الفقرات حسب أثرها كالتالي: انتباه، اهتمام، رغبة، فعل.",
		modelSteps: ["انتباه", "اهتمام", "رغبة", "فعل"],
		image: workOneImage,
		alt: "إعلان تسويقي عقاري",
	},
	{
		id: "work-2",
		image: workTwoImage,
		alt: "إعلان تسويقي عقاري",
	},
	{
		id: "work-3",
		image: workThreeImage,
		alt: "إعلان تسويقي عقاري",
	},
	
];
