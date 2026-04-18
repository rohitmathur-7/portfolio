"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projectsData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(
			"ontouchstart" in window || navigator.maxTouchPoints > 0,
		);
	}, []);
	return isMobile;
}

function ProjectCard({
	project,
	index,
}: {
	project: (typeof projectsData)[0];
	index: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const isMobile = useIsMobile();
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
		stiffness: 200,
		damping: 30,
	});
	const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
		stiffness: 200,
		damping: 30,
	});

	function handleMouse(e: React.MouseEvent) {
		if (isMobile || !ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width - 0.5);
		y.set((e.clientY - rect.top) / rect.height - 0.5);
	}

	function handleMouseLeave() {
		x.set(0);
		y.set(0);
		setIsHovered(false);
	}

	const emoji =
		project.title === "Watchflix"
			? "🎬"
			: project.title === "Food Delivery App"
				? "🍕"
				: project.title.includes("Gutenberg")
					? "📝"
					: project.title.includes("Portfolio")
						? "💼"
						: "🌐";

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.7,
				delay: index * 0.12,
				ease: [0.25, 0.4, 0.25, 1],
			}}
			style={{
				rotateX: !isMobile && isHovered ? rotateX : 0,
				rotateY: !isMobile && isHovered ? rotateY : 0,
				transformPerspective: isMobile ? undefined : 1200,
			}}
			onMouseMove={isMobile ? undefined : handleMouse}
			onMouseEnter={isMobile ? undefined : () => setIsHovered(true)}
			onMouseLeave={isMobile ? undefined : handleMouseLeave}
			className="group relative"
		>
			<div className="relative rounded-2xl bg-surface border border-border overflow-hidden card-hover-border transition-all duration-500">
				{/* Top accent line */}
				<div className="absolute top-0 left-0 right-0 h-px">
					<motion.div
						className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
						initial={{ scaleX: 0 }}
						whileHover={{ scaleX: 1 }}
						transition={{ duration: 0.5 }}
					/>
				</div>

				{/* Image area */}
				<div className="relative h-56 md:h-64 overflow-hidden bg-surface-light">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

					{/* Animated grid background */}
					<div className="absolute inset-0 line-pattern opacity-50" />

					{/* Project icon */}
					<div className="absolute inset-0 flex items-center justify-center">
						<motion.div
							className="text-7xl"
							animate={
								isHovered
									? { scale: 1.2, rotate: [0, -5, 5, 0] }
									: { scale: 1, rotate: 0 }
							}
							transition={{ duration: 0.5 }}
						>
							{emoji}
						</motion.div>
					</div>

					{/* Overlay on hover */}
					<motion.div
						className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent flex items-end p-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex gap-3">
							{project.live && project.live !== "#" && (
								<motion.a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
									initial={{ y: 20, opacity: 0 }}
									animate={
										isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
									}
									transition={{ delay: 0.1 }}
								>
									<svg
										className="w-3.5 h-3.5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
									Live
								</motion.a>
							)}
							{project.github && project.github !== "#" && (
								<motion.a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-surface-elevated text-foreground text-sm font-medium rounded-lg border border-border-light hover:border-primary/50 transition-colors"
									initial={{ y: 20, opacity: 0 }}
									animate={
										isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
									}
									transition={{ delay: 0.15 }}
								>
									<svg
										className="w-3.5 h-3.5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									Code
								</motion.a>
							)}
						</div>
					</motion.div>

					{/* Featured badge */}
					{project.featured && (
						<div className="absolute top-4 right-4">
							<span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full">
								Featured
							</span>
						</div>
					)}
				</div>

				{/* Content */}
				<div className="p-6 md:p-8">
					{/* Title row */}
					<div className="mb-4">
						<h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-all duration-300">
							{project.title}
						</h3>
						<p className="text-sm text-primary/70 font-medium">
							{project.subtitle}
						</p>
					</div>

					{/* Description */}
					<p className="text-sm text-muted-light leading-relaxed mb-5">
						{project.description}
					</p>

					{/* Problem / Solution */}
					<div className="space-y-3 mb-6">
						<div className="flex gap-3 text-sm">
							<span className="shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" />
							<div>
								<span className="text-red-400/80 font-medium text-xs uppercase tracking-wider">
									Challenge
								</span>
								<p className="text-muted text-[13px] mt-0.5">
									{project.problem}
								</p>
							</div>
						</div>
						<div className="flex gap-3 text-sm">
							<span className="shrink-0 w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />
							<div>
								<span className="text-green-400/80 font-medium text-xs uppercase tracking-wider">
									Solution
								</span>
								<p className="text-muted text-[13px] mt-0.5">
									{project.solution}
								</p>
							</div>
						</div>
					</div>

					{/* Tech stack */}
					<div className="flex flex-wrap gap-2">
						{project.tech.map((t) => (
							<motion.span
								key={t}
								whileHover={{ scale: 1.05, y: -1 }}
								className="px-3 py-1 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 rounded-lg hover:border-primary/30 transition-colors cursor-default"
							>
								{t}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default function Projects() {
	return (
		<section id="projects" className="py-32 px-6 relative">
			{/* Background effect */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
			</div>

			<div className="mx-auto max-w-6xl relative">
				<SectionHeading title="Featured Projects" subtitle="What I've built" />

				<div className="grid md:grid-cols-2 gap-8">
					{projectsData.map((project, i) => (
						<ProjectCard key={project.title} project={project} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
