"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { aboutData, siteConfig } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function StatCard({
	value,
	label,
	index,
}: {
	value: string;
	label: string;
	index: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{
				delay: 0.4 + index * 0.1,
				type: "spring",
				stiffness: 200,
				damping: 20,
			}}
			whileHover={{ y: -4, scale: 1.02 }}
			className="group relative p-6 rounded-2xl bg-surface border border-border overflow-hidden card-hover-border"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			<motion.div
				className="text-4xl font-bold text-gradient mb-1"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
			>
				{value}
			</motion.div>
			<div className="text-sm text-muted font-medium">{label}</div>
		</motion.div>
	);
}

export default function About() {
	return (
		<section id="about" className="py-32 px-6 relative">
			{/* Background effect */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />
			</div>

			<div className="mx-auto max-w-6xl relative">
				<SectionHeading title="About Me" subtitle="Who I am" />

				<div className="grid lg:grid-cols-12 gap-8">
					{/* Main text card spanning 7 cols */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
						className="lg:col-span-7 relative"
					>
						<div className="p-8 md:p-10 rounded-2xl bg-surface border border-border card-hover-border">
							<div className="absolute top-6 right-6 text-xs font-mono text-muted/30">
								&lt;about&gt;
							</div>

							<div className="space-y-5">
								{aboutData.paragraphs.map((p, i) => (
									<motion.p
										key={i}
										initial={{ opacity: 0, y: 15 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
										className="text-muted-light leading-[1.8] text-[15px]"
									>
										{i === 0 ? (
											<>
												<span className="text-2xl font-serif text-gradient float-left mr-2 mt-1 leading-none">
													{p.charAt(0)}
												</span>
												{p.slice(1)}
											</>
										) : (
											p
										)}
									</motion.p>
								))}
							</div>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.6, duration: 0.5 }}
								className="mt-8 flex flex-wrap gap-3"
							>
								{["React", "Next.js", "WordPress", "TypeScript"].map((tag) => (
									<span
										key={tag}
										className="px-3 py-1.5 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 rounded-lg"
									>
										{tag}
									</span>
								))}
							</motion.div>

							<div className="absolute bottom-6 right-6 text-xs font-mono text-muted/30">
								&lt;/about&gt;
							</div>
						</div>
					</motion.div>

					{/* Stats grid spanning 5 cols */}
					<div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
						{aboutData.highlights.map((stat, i) => (
							<StatCard
								key={stat.label}
								value={stat.value}
								label={stat.label}
								index={i}
							/>
						))}

						{/* Location card */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
							className="col-span-2 p-6 rounded-2xl bg-surface border border-border card-hover-border"
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
									<svg
										className="w-5 h-5 text-accent"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<div className="text-sm text-muted mb-0.5">Based in</div>
									<div className="font-semibold">{siteConfig.location}</div>
								</div>
								<div className="ml-auto">
									<span className="relative flex h-3 w-3">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
										<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
