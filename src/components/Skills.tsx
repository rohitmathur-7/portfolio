"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, string> = {
	Frontend: "⚡",
	"Backend & CMS": "🔧",
	"Tools & Platforms": "🛠",
};

const categoryGradients: Record<string, string> = {
	Frontend: "from-primary to-secondary",
	"Backend & CMS": "from-accent to-primary",
	"Tools & Platforms": "from-secondary to-accent-warm",
};

function SkillPill({
	skill,
	delay,
	gradient,
}: {
	skill: { name: string; level: number };
	delay: number;
	gradient: string;
}) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, y: 20 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				delay,
				type: "spring",
				stiffness: 200,
				damping: 20,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative group"
		>
			<motion.div
				className="relative px-4 py-3 rounded-xl bg-surface border border-border overflow-hidden cursor-default card-hover-border"
				whileHover={{ y: -3, scale: 1.02 }}
				transition={{ type: "spring", stiffness: 400, damping: 20 }}
			>
				{/* Animated fill background */}
				<motion.div
					className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-[0.06]`}
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: skill.level / 100 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
					style={{ transformOrigin: "left" }}
				/>

				<div className="relative flex items-center justify-between gap-3">
					<span className="text-sm font-medium text-foreground whitespace-nowrap">
						{skill.name}
					</span>
					<AnimatePresence>
						{isHovered && (
							<motion.span
								initial={{ opacity: 0, scale: 0.5, x: 10 }}
								animate={{ opacity: 1, scale: 1, x: 0 }}
								exit={{ opacity: 0, scale: 0.5, x: 10 }}
								className={`text-xs font-mono font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
							>
								{skill.level}%
							</motion.span>
						)}
					</AnimatePresence>
				</div>
			</motion.div>
		</motion.div>
	);
}

function SkillCategory({
	category,
	delay,
}: {
	category: { title: string; skills: { name: string; level: number }[] };
	delay: number;
}) {
	const icon = categoryIcons[category.title] || "💡";
	const gradient = categoryGradients[category.title] || "from-primary to-secondary";

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.7,
				delay,
				ease: [0.25, 0.4, 0.25, 1],
			}}
			className="relative"
		>
			<div className="p-8 rounded-2xl bg-surface border border-border card-hover-border">
				{/* Category header */}
				<div className="flex items-center gap-3 mb-8">
					<motion.div
						className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-lg"
						whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
						transition={{ duration: 0.5 }}
					>
						{icon}
					</motion.div>
					<div>
						<h3 className="text-lg font-bold">{category.title}</h3>
						<p className="text-xs text-muted font-mono">
							{category.skills.length} skills
						</p>
					</div>
				</div>

				{/* Skills grid */}
				<div className="grid grid-cols-2 gap-2">
					{category.skills.map((skill, i) => (
						<SkillPill
							key={skill.name}
							skill={skill}
							delay={delay + i * 0.06}
							gradient={gradient}
						/>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default function Skills() {
	const categories = [
		skillsData.frontend,
		skillsData.backend,
		skillsData.tools,
	];

	return (
		<section id="skills" className="py-32 px-6 relative">
			{/* Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
			</div>

			<div className="mx-auto max-w-6xl relative">
				<SectionHeading
					title="Skills & Tech"
					subtitle="My toolkit"
				/>

				<div className="grid md:grid-cols-3 gap-6">
					{categories.map((cat, i) => (
						<SkillCategory key={cat.title} category={cat} delay={i * 0.15} />
					))}
				</div>

				{/* Bottom marquee */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="mt-16 relative overflow-hidden py-4"
				>
					<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
					<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
					<motion.div
						className="flex gap-6 whitespace-nowrap"
						animate={{ x: ["0%", "-50%"] }}
						transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
					>
						{[
							"Responsive Design",
							"Performance Optimization",
							"Accessibility",
							"SEO",
							"CI/CD",
							"Agile",
							"Code Review",
							"Testing",
							"API Design",
							"Block Development",
							"Responsive Design",
							"Performance Optimization",
							"Accessibility",
							"SEO",
							"CI/CD",
							"Agile",
							"Code Review",
							"Testing",
							"API Design",
							"Block Development",
						].map((item, i) => (
							<span
								key={i}
								className="text-xs font-mono text-muted/30 uppercase tracking-widest flex items-center gap-4"
							>
								<span className="w-1 h-1 rounded-full bg-primary/20" />
								{item}
							</span>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
