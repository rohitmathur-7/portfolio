"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

function useMousePosition() {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const handler = (e: MouseEvent) =>
			setPos({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", handler);
		return () => window.removeEventListener("mousemove", handler);
	}, []);
	return pos;
}

const roles = ["Frontend Developer", "React Specialist", "WordPress Expert", "UI Engineer"];

function TypingRole() {
	const [roleIndex, setRoleIndex] = useState(0);
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const current = roles[roleIndex];
		const timeout = setTimeout(
			() => {
				if (!isDeleting) {
					setText(current.slice(0, text.length + 1));
					if (text.length === current.length) {
						setTimeout(() => setIsDeleting(true), 2000);
					}
				} else {
					setText(current.slice(0, text.length - 1));
					if (text.length === 0) {
						setIsDeleting(false);
						setRoleIndex((prev) => (prev + 1) % roles.length);
					}
				}
			},
			isDeleting ? 40 : 80
		);
		return () => clearTimeout(timeout);
	}, [text, isDeleting, roleIndex]);

	return (
		<span className="text-gradient">
			{text}
			<span className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle animate-pulse" />
		</span>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.3 },
	},
};

const childVariants = {
	hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
	},
};

export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const mouse = useMousePosition();
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	return (
		<section
			ref={sectionRef}
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Ambient gradient orbs */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
					style={{
						background:
							"radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
						left: `calc(30% + ${mouse.x * 0.02}px)`,
						top: `calc(20% + ${mouse.y * 0.02}px)`,
					}}
					animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
					style={{
						background:
							"radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
						right: `calc(20% + ${mouse.x * -0.015}px)`,
						bottom: `calc(25% + ${mouse.y * -0.015}px)`,
					}}
					animate={{ scale: [1.1, 1, 1.1], rotate: [0, -5, 0] }}
					transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
					style={{
						background:
							"radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)",
						left: "55%",
						top: "60%",
					}}
					animate={{ scale: [1, 1.2, 1] }}
					transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
				/>
			</div>

			{/* Dot grid pattern */}
			<div className="absolute inset-0 dot-pattern" />

			{/* Floating geometric shapes */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(5)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute opacity-[0.07]"
						style={{
							left: `${15 + i * 18}%`,
							top: `${20 + (i % 3) * 25}%`,
						}}
						animate={{
							y: [0, -30, 0],
							rotate: [0, 180, 360],
							opacity: [0.04, 0.08, 0.04],
						}}
						transition={{
							duration: 8 + i * 2,
							repeat: Infinity,
							ease: "easeInOut",
							delay: i * 0.5,
						}}
					>
						{i % 3 === 0 ? (
							<div className="w-16 h-16 border border-primary/30 rounded-lg" />
						) : i % 3 === 1 ? (
							<div className="w-12 h-12 border border-accent/30 rounded-full" />
						) : (
							<div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-secondary/30" />
						)}
					</motion.div>
				))}
			</div>

			{/* Main content */}
			<motion.div style={{ y, opacity }} className="relative z-10 w-full">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="mx-auto max-w-5xl px-6 text-center"
				>
					{/* Main heading */}
					<motion.div variants={childVariants} className="mb-4 mt-24">
						<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.15]">
							<span className="block overflow-hidden">
								<motion.span
									className="inline-block"
									initial={{ y: "100%" }}
									animate={{ y: 0 }}
									transition={{
										duration: 0.8,
										delay: 0.5,
										ease: [0.25, 0.4, 0.25, 1],
									}}
								>
									Hi, I&apos;m{" "}
									<span className="text-gradient">{siteConfig.name.split(" ")[0]}</span>
								</motion.span>
							</span>
							<span className="block overflow-hidden mt-4">
								<motion.span
									className="inline-block text-shimmer"
									initial={{ y: "100%" }}
									animate={{ y: 0 }}
									transition={{
										duration: 0.8,
										delay: 0.65,
										ease: [0.25, 0.4, 0.25, 1],
									}}
								>
									I craft digital experiences
								</motion.span>
							</span>
						</h1>
					</motion.div>

					{/* Typing role */}
					<motion.div
						variants={childVariants}
						className="text-xl md:text-2xl font-medium mb-6 h-10 flex items-center justify-center"
					>
						<TypingRole />
					</motion.div>

					{/* Description */}
					<motion.p
						variants={childVariants}
						className="text-base md:text-lg text-muted-light max-w-xl mx-auto mb-12 leading-relaxed"
					>
						{siteConfig.tagline}. Specializing in React, Next.js &amp;
						WordPress with a passion for pixel-perfect interfaces.
					</motion.p>

					{/* CTAs */}
					<motion.div
						variants={childVariants}
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<motion.a
							href="#projects"
							className="group relative px-8 py-4 bg-primary text-white rounded-xl font-medium overflow-hidden"
							whileHover={{ scale: 1.03, y: -2 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<span className="relative z-10 flex items-center gap-2">
								View My Work
								<motion.svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									animate={{ x: [0, 4, 0] }}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</motion.svg>
							</span>
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary"
								initial={{ x: "-100%" }}
								whileHover={{ x: 0 }}
								transition={{ duration: 0.4 }}
							/>
						</motion.a>

						<motion.a
							href="#contact"
							className="group relative px-8 py-4 rounded-xl font-medium border border-border-light text-foreground overflow-hidden"
							whileHover={{
								scale: 1.03,
								y: -2,
								borderColor: "rgba(99,102,241,0.5)",
							}}
							whileTap={{ scale: 0.98 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<span className="relative z-10">Let&apos;s Talk</span>
							<motion.div
								className="absolute inset-0 bg-primary/5"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.a>
					</motion.div>

					{/* Tech stack marquee */}
					<motion.div
						variants={childVariants}
						className="mt-20 relative overflow-hidden py-4"
					>
						<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
						<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
						<motion.div
							className="flex gap-8 items-center whitespace-nowrap"
							animate={{ x: ["0%", "-50%"] }}
							transition={{
								duration: 25,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							{[
								"React.js",
								"Next.js",
								"TypeScript",
								"WordPress",
								"Gutenberg",
								"Tailwind CSS",
								"Framer Motion",
								"JavaScript",
								"PHP",
								"Node.js",
								"React.js",
								"Next.js",
								"TypeScript",
								"WordPress",
								"Gutenberg",
								"Tailwind CSS",
								"Framer Motion",
								"JavaScript",
								"PHP",
								"Node.js",
							].map((tech, i) => (
								<span
									key={i}
									className="text-sm text-muted/40 font-mono tracking-wider flex items-center gap-3"
								>
									<span className="w-1 h-1 rounded-full bg-primary/30" />
									{tech}
								</span>
							))}
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
			>
				<motion.a
					href="#about"
					className="flex flex-col items-center gap-2 text-muted/50 hover:text-muted transition-colors"
					animate={{ y: [0, 6, 0] }}
					transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
				>
					<span className="text-[10px] font-mono uppercase tracking-[0.3em]">
						Scroll
					</span>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</motion.a>
			</motion.div>
		</section>
	);
}
