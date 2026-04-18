"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function TimelineCard({
	item,
	index,
}: {
	item: (typeof experienceData)[0];
	index: number;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ["start end", "center center"],
	});
	const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, x: -40 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.7,
				delay: index * 0.2,
				ease: [0.25, 0.4, 0.25, 1],
			}}
			className="relative flex gap-8"
		>
			{/* Timeline column */}
			<div className="hidden md:flex flex-col items-center shrink-0">
				{/* Dot with glow */}
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{
						delay: index * 0.2 + 0.3,
						type: "spring",
						stiffness: 300,
					}}
					className="relative z-10"
				>
					<div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
					<div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
				</motion.div>

				{/* Animated line */}
				{index < experienceData.length - 1 && (
					<div className="relative w-px flex-1 bg-border/50 mt-2">
						<motion.div
							className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/0"
							style={{ height: lineHeight }}
						/>
					</div>
				)}
			</div>

			{/* Content card */}
			<motion.div
				className="flex-1 mb-12 group"
				whileHover={{ x: 4 }}
				transition={{ type: "spring", stiffness: 300, damping: 25 }}
			>
				<div className="p-8 rounded-2xl bg-surface border border-border card-hover-border relative overflow-hidden">
					{/* Subtle gradient on hover */}
					<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

					<div className="relative">
						{/* Period badge */}
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 + 0.4 }}
							className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-primary bg-primary/5 border border-primary/10 rounded-lg mb-4"
						>
							<svg
								className="w-3 h-3"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							{item.period}
						</motion.div>

						{/* Title */}
						<h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-all duration-300">
							{item.role}
						</h3>
						<div className="flex items-center gap-2 mb-1">
							<span className="text-primary/80 font-semibold text-sm">
								{item.company}
							</span>
							<span className="text-muted/30">•</span>
							<span className="text-xs text-muted flex items-center gap-1">
								<svg
									className="w-3 h-3"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
								</svg>
								{item.location}
							</span>
						</div>

						{/* Descriptions */}
						<ul className="mt-5 space-y-3">
							{item.description.map((desc, j) => (
								<motion.li
									key={j}
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.2 + 0.5 + j * 0.1,
										duration: 0.4,
									}}
									className="flex gap-3 text-sm text-muted-light leading-relaxed"
								>
									<span className="shrink-0 w-1 h-1 rounded-full bg-primary/50 mt-2" />
									{desc}
								</motion.li>
							))}
						</ul>

						{/* Tech tags */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								delay: index * 0.2 + 0.8,
								duration: 0.5,
							}}
							className="flex flex-wrap gap-2 mt-6"
						>
							{item.tech.map((t) => (
								<span
									key={t}
									className="px-2.5 py-1 text-[11px] font-mono text-muted bg-surface-elevated border border-border rounded-md"
								>
									{t}
								</span>
							))}
						</motion.div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function Experience() {
	return (
		<section id="experience" className="py-32 px-6 relative">
			{/* Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[120px]" />
			</div>

			<div className="mx-auto max-w-4xl relative">
				<SectionHeading title="Experience" subtitle="My journey" />

				<div className="relative mt-8">
					{experienceData.map((item, i) => (
						<TimelineCard key={item.company} item={item} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
