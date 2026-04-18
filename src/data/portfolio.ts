export const siteConfig = {
	name: "Rohit Mathur",
	title: "Frontend Developer",
	tagline: "Building pixel-perfect, high-performance web experiences",
	description:
		"Frontend Developer based in Jaipur, India. Specializing in React.js, Next.js, and WordPress Gutenberg block development. Building modern, scalable web applications with clean code and great user experiences.",
	email: "rohitmathur.mathur.6@gmail.com",
	phone: "+91 6376380600",
	location: "Jaipur, India",
	social: {
		github: "https://github.com/rohitmathur-7",
		linkedin: "https://linkedin.com/in/rohitmathur7",
		leetcode: "https://leetcode.com/rohitmathur7",
		codechef: "https://www.codechef.com/users/rohitmathur7",
	},
	nav: [
		{ label: "About", href: "#about" },
		{ label: "Projects", href: "#projects" },
		{ label: "Skills", href: "#skills" },
		{ label: "Experience", href: "#experience" },
		{ label: "Contact", href: "#contact" },
	],
};

export const aboutData = {
	paragraphs: [
		"I'm a Frontend Developer at rtCamp, passionate about crafting clean, performant, and accessible web experiences. With a strong foundation in React.js, Next.js, and WordPress development, I build solutions that are both beautiful and functional.",
		"I've contributed to WordPress core releases (6.7 and 6.8), working on Gutenberg block development. I love solving real-world problems with elegant code and collaborating with cross-functional teams to deliver impactful projects.",
		"When I'm not coding, you'll find me exploring new technologies, solving problems on competitive programming platforms, or contributing to open source.",
	],
	highlights: [
		{ value: "3+", label: "Years Experience" },
		{ value: "10+", label: "Projects Built" },
		{ value: "2", label: "WP Core Releases" },
		{ value: "5+", label: "Clients Served" },
	],
};

export const projectsData = [
	{
		title: "Watchflix",
		subtitle: "Netflix Clone with AI-Powered Recommendations",
		description:
			"A full-featured Netflix clone with AI-powered movie recommendations using Google's Gemini API. Features smart natural language search, dynamic content fetching from TMDB, and a responsive modern UI.",
		problem:
			"Users struggle to discover movies matching their mood or preferences through traditional category-based browsing.",
		solution:
			"Integrated Gemini API for natural language movie search and smart recommendations based on mood, genre, and custom queries.",
		tech: ["React.js", "Redux", "Tailwind CSS", "Gemini API", "TMDB API"],
		image: "/projects/watchflix.png",
		live: "https://watchfliix.netlify.app/",
		github: "https://github.com/rohitmathur-7/watchflix",
		featured: true,
	},
	{
		title: "Food Delivery App",
		subtitle: "Swiggy-Inspired Food Ordering Platform",
		description:
			"A responsive food delivery application with live restaurant data, cart management, and a clean user interface. Built with performance and scalability in mind.",
		problem:
			"Need for a fast, responsive food ordering interface with efficient state management across components.",
		solution:
			"Utilized Redux for global state handling ensuring efficient cart management and smooth data flow with optimized rendering.",
		tech: ["React.js", "Redux", "Tailwind CSS", "Swiggy API"],
		image: "/projects/food-delivery.png",
		live: "#",
		github: "https://github.com/rohitmathur-7/food-delivery",
		featured: true,
	},
	{
		title: "WordPress Gutenberg Contributions",
		subtitle: "Core Contributor to WordPress 6.7 & 6.8",
		description:
			"Contributed to WordPress core, focusing on Gutenberg block editor improvements. Worked on block development, performance optimization, and enhanced editing experience for millions of users worldwide.",
		problem:
			"WordPress block editor needed improvements in usability, performance, and developer experience.",
		solution:
			"Contributed code patches, bug fixes, and feature improvements to the Gutenberg project as part of the WordPress core team.",
		tech: ["WordPress", "PHP", "JavaScript", "React.js", "Gutenberg"],
		image: "/projects/gutenberg.png",
		live: "https://wordpress.org/",
		github: "https://github.com/WordPress/gutenberg",
		featured: true,
	},
	{
		title: "Developer Portfolio",
		subtitle: "Modern Portfolio with Next.js",
		description:
			"A high-performance, SEO-optimized portfolio website built with Next.js 14 and Tailwind CSS. Features smooth animations, responsive design, and a clean minimal aesthetic.",
		problem:
			"Needed a fast, modern portfolio to showcase projects and attract freelance clients and job opportunities.",
		solution:
			"Built with Next.js App Router for optimal performance, Framer Motion for smooth animations, and Tailwind CSS for a polished UI.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		image: "/projects/portfolio.png",
		live: "#",
		github: "#",
		featured: false,
	},
	{
		title: "Custom WordPress Themes",
		subtitle: "Enterprise-Grade Theme Development",
		description:
			"Developed custom WordPress themes for enterprise clients with focus on performance, accessibility, and scalable architecture. Included custom Gutenberg blocks and plugin integrations.",
		problem:
			"Enterprise clients needed highly customized, performant WordPress sites that go beyond standard themes.",
		solution:
			"Built custom themes with optimized performance, custom block patterns, and reusable components for maintainability.",
		tech: ["WordPress", "PHP", "JavaScript", "CSS3", "Gutenberg"],
		image: "/projects/wp-themes.png",
		live: "#",
		github: "#",
		featured: false,
	},
];

export const skillsData = {
	frontend: {
		title: "Frontend",
		skills: [
			{ name: "React.js", level: 95 },
			{ name: "Next.js", level: 85 },
			{ name: "TypeScript", level: 80 },
			{ name: "JavaScript", level: 95 },
			{ name: "HTML5", level: 95 },
			{ name: "CSS3", level: 90 },
			{ name: "Tailwind CSS", level: 90 },
			{ name: "Redux Toolkit", level: 85 },
			{ name: "Framer Motion", level: 75 },
		],
	},
	backend: {
		title: "Backend & CMS",
		skills: [
			{ name: "WordPress", level: 90 },
			{ name: "Gutenberg", level: 90 },
			{ name: "PHP", level: 80 },
			{ name: "REST APIs", level: 85 },
			{ name: "Node.js", level: 70 },
		],
	},
	tools: {
		title: "Tools & Platforms",
		skills: [
			{ name: "Git & GitHub", level: 90 },
			{ name: "Figma", level: 75 },
			{ name: "VS Code", level: 95 },
			{ name: "Linux/CLI", level: 80 },
			{ name: "Vercel", level: 80 },
		],
	},
};

export const experienceData = [
	{
		role: "Software Engineer",
		company: "rtCamp",
		period: "Jan 2023 – Present",
		location: "Remote",
		description: [
			"Developed and maintained secure, scalable, high-performance websites using modern web technologies (React / WordPress / PHP / JS).",
			"Collaborated with cross-functional teams to design, implement, and deliver client projects including custom themes, plugin development, performance optimization, and maintenance.",
			"Contributed to WordPress 6.8 and WordPress 6.7 core releases, working on Gutenberg block editor improvements.",
			"Built custom Gutenberg blocks and block patterns for enterprise clients, improving content editing workflows.",
		],
		tech: ["React.js", "WordPress", "PHP", "JavaScript", "Gutenberg"],
	},
	{
		role: "B.Tech in Computer Science",
		company: "Poornima College of Engineering",
		period: "2019 – 2023",
		location: "Jaipur, India",
		description: [
			"Graduated with 82% aggregate, specializing in Computer Science.",
			"Active in competitive programming on CodeChef, HackerRank, LeetCode, and Codeforces.",
			"Built multiple full-stack projects during coursework and personal exploration.",
		],
		tech: ["C", "C++", "JavaScript", "Data Structures", "Algorithms"],
	},
];
