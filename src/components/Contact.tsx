"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const socialLinks = [
	{
		label: "GitHub",
		href: siteConfig.social.github,
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
			</svg>
		),
	},
	{
		label: "LinkedIn",
		href: siteConfig.social.linkedin,
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		label: "LeetCode",
		href: siteConfig.social.leetcode,
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
			</svg>
		),
	},
];

function FloatingInput({
	id,
	label,
	type = "text",
	value,
	onChange,
	required = true,
}: {
	id: string;
	label: string;
	type?: string;
	value: string;
	onChange: (value: string) => void;
	required?: boolean;
}) {
	const [isFocused, setIsFocused] = useState(false);
	const isActive = isFocused || value.length > 0;

	return (
		<div className="relative group">
			<input
				type={type}
				id={id}
				required={required}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-surface border border-border text-foreground placeholder-transparent focus:outline-none focus:border-primary/50 transition-all duration-300 group-hover:border-border-light"
				placeholder={label}
			/>
			<label
				htmlFor={id}
				className={`absolute left-4 transition-all duration-300 pointer-events-none ${
					isActive
						? "top-2 text-[10px] font-mono uppercase tracking-wider text-primary"
						: "top-1/2 -translate-y-1/2 text-sm text-muted"
				}`}
			>
				{label}
			</label>
			<motion.div
				className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
				initial={false}
				animate={{
					width: isFocused ? "calc(100% - 24px)" : "0%",
					x: isFocused ? "-50%" : "0%",
				}}
				transition={{ duration: 0.3 }}
			/>
		</div>
	);
}

export default function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const subject = encodeURIComponent(
			`Portfolio Contact from ${formState.name}`,
		);
		const body = encodeURIComponent(
			`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
		);
		window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
		setIsSubmitted(true);
		setTimeout(() => setIsSubmitted(false), 3000);
	};

	return (
		<section id="contact" ref={sectionRef} className="py-32 px-6 relative">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
			</div>

			<div className="mx-auto max-w-6xl relative">
				<SectionHeading title="Get In Touch" subtitle="Let's connect" />

				<div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
					{/* Contact info - 2 cols */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: 0.7,
							ease: [0.25, 0.4, 0.25, 1],
						}}
						className="lg:col-span-2 space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold mb-3">
								Let&apos;s build something{" "}
								<span className="text-gradient">amazing</span>
							</h3>
							<p className="text-muted-light text-sm leading-relaxed">
								I&apos;m always excited to work on new projects and collaborate
								with great people. Whether you have a question or just want to
								say hi, my inbox is open.
							</p>
						</div>

						{/* Contact details */}
						<div className="space-y-4">
							<motion.a
								href={`mailto:${siteConfig.email}`}
								className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border group card-hover-border"
								whileHover={{ x: 4 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
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
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<div className="text-[10px] font-mono uppercase tracking-wider text-muted mb-0.5">
										Email
									</div>
									<span className="text-sm text-foreground">
										{siteConfig.email}
									</span>
								</div>
							</motion.a>

							<motion.div
								className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border"
								initial={{ opacity: 0, y: 10 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.2, duration: 0.5 }}
							>
								<div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
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
									<div className="text-[10px] font-mono uppercase tracking-wider text-muted mb-0.5">
										Location
									</div>
									<span className="text-sm text-foreground">
										{siteConfig.location}
									</span>
								</div>
							</motion.div>
						</div>

						{/* Social links */}
						<div>
							<p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-3">
								Find me on
							</p>
							<div className="flex gap-3">
								{socialLinks.map((link, i) => (
									<motion.a
										key={link.label}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all card-hover-border"
										aria-label={link.label}
										initial={{ opacity: 0, y: 10 }}
										animate={isInView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
										whileHover={{ y: -3, scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										{link.icon}
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Form - 3 cols */}
					<motion.form
						initial={{ opacity: 0, x: 40 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: 0.7,
							delay: 0.2,
							ease: [0.25, 0.4, 0.25, 1],
						}}
						onSubmit={handleSubmit}
						className="lg:col-span-3 space-y-5"
					>
						<div className="p-8 rounded-2xl bg-surface border border-border card-hover-border">
							<div className="space-y-5">
								<div className="grid sm:grid-cols-2 gap-4">
									<FloatingInput
										id="name"
										label="Your Name"
										value={formState.name}
										onChange={(v) => setFormState({ ...formState, name: v })}
									/>
									<FloatingInput
										id="email"
										label="Your Email"
										type="email"
										value={formState.email}
										onChange={(v) => setFormState({ ...formState, email: v })}
									/>
								</div>

								<div className="relative group">
									<textarea
										id="message"
										required
										rows={6}
										value={formState.message}
										onChange={(e) =>
											setFormState({
												...formState,
												message: e.target.value,
											})
										}
										className="peer w-full px-4 pt-6 pb-3 rounded-xl bg-surface border border-border text-foreground placeholder-transparent focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none group-hover:border-border-light"
										placeholder="Message"
									/>
									<label
										htmlFor="message"
										className={`absolute left-4 transition-all duration-300 pointer-events-none ${
											formState.message.length > 0
												? "top-2 text-[10px] font-mono uppercase tracking-wider text-primary"
												: "top-4 text-sm text-muted peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
										}`}
									>
										Your Message
									</label>
								</div>

								<motion.button
									type="submit"
									className="w-full relative py-4 bg-primary text-white font-medium rounded-xl overflow-hidden group"
									whileHover={{ scale: 1.01, y: -1 }}
									whileTap={{ scale: 0.99 }}
									transition={{
										type: "spring",
										stiffness: 400,
										damping: 17,
									}}
								>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-primary-light via-secondary to-primary-light"
										animate={isSubmitted ? { x: 0 } : { x: ["-100%", "100%"] }}
										transition={
											isSubmitted
												? {}
												: { duration: 3, repeat: Infinity, ease: "linear" }
										}
										style={{ opacity: 0.3 }}
									/>
									<span className="relative z-10 flex items-center justify-center gap-2">
										{isSubmitted ? (
											<>
												<motion.svg
													className="w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													initial={{ scale: 0, rotate: -180 }}
													animate={{ scale: 1, rotate: 0 }}
													transition={{ type: "spring", stiffness: 300 }}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</motion.svg>
												Sent!
											</>
										) : (
											<>
												Send Message
												<svg
													className="w-4 h-4 group-hover:translate-x-1 transition-transform"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14 5l7 7m0 0l-7 7m7-7H3"
													/>
												</svg>
											</>
										)}
									</span>
								</motion.button>
							</div>
						</div>
					</motion.form>
				</div>
			</div>
		</section>
	);
}
