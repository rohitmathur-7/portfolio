"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.5 }}
			className="mb-20"
		>
			<div className="flex items-center gap-4 mb-4">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: 60 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
					className="h-px bg-gradient-to-r from-primary to-transparent"
				/>
				<motion.span
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="text-xs font-mono uppercase tracking-[0.3em] text-primary"
				>
					{subtitle}
				</motion.span>
			</div>

			<div className="overflow-hidden">
				<motion.h2
					initial={{ y: "100%" }}
					whileInView={{ y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.7,
						ease: [0.25, 0.4, 0.25, 1],
						delay: 0.1,
					}}
					className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
				>
					{title}
					<motion.span
						className="text-primary"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8 }}
					>
						.
					</motion.span>
				</motion.h2>
			</div>
		</motion.div>
	);
}
