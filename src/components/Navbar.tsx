"use client";

import { useState, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { siteConfig } from "@/data/portfolio";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const { scrollYProgress } = useScroll();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Track active section
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(`#${entry.target.id}`);
					}
				});
			},
			{ rootMargin: "-40% 0px -60% 0px" },
		);
		const sections = document.querySelectorAll("section[id]");
		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			{/* Scroll progress bar */}
			<motion.div
				className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-secondary z-[60] origin-left"
				style={{ scaleX: scrollYProgress }}
			/>

			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
					isScrolled
						? "glass-strong shadow-lg shadow-black/10"
						: "bg-transparent"
				}`}
			>
				<div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
					{/* Logo */}
					<motion.a
						href="#"
						className="relative group"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className="text-2xl font-bold tracking-tighter">
							<span className="text-gradient">R</span>
							<span className="text-foreground group-hover:text-primary transition-colors duration-300">
								.
							</span>
						</span>
						<motion.span
							className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent"
							initial={{ scaleX: 0 }}
							whileHover={{ scaleX: 1 }}
							transition={{ duration: 0.3 }}
						/>
					</motion.a>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center gap-1">
						{siteConfig.nav.map((item) => (
							<motion.a
								key={item.href}
								href={item.href}
								className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
									activeSection === item.href
										? "text-primary"
										: "text-muted hover:text-foreground"
								}`}
								whileHover={{ y: -1 }}
								transition={{ type: "spring", stiffness: 400 }}
							>
								{item.label}
								{activeSection === item.href && (
									<motion.span
										layoutId="activeNav"
										className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									/>
								)}
							</motion.a>
						))}
						<motion.a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="ml-3 text-sm px-5 py-2 border border-primary/50 text-primary rounded-lg font-medium relative overflow-hidden group"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							<span className="relative z-10 group-hover:text-white transition-colors duration-300">
								Resume
							</span>
							<motion.div
								className="absolute inset-0 bg-primary"
								initial={{ y: "100%" }}
								whileHover={{ y: 0 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.a>
					</div>

					{/* Mobile toggle */}
					<motion.button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-light transition-colors"
						aria-label="Toggle menu"
						whileTap={{ scale: 0.9 }}
					>
						<div className="flex flex-col gap-1.5 items-center">
							<motion.span
								animate={
									isMobileMenuOpen
										? { rotate: 45, y: 6, width: 20 }
										: { rotate: 0, y: 0, width: 20 }
								}
								transition={{ duration: 0.3 }}
								className="h-[1.5px] bg-foreground block origin-center"
							/>
							<motion.span
								animate={
									isMobileMenuOpen
										? { opacity: 0, width: 0 }
										: { opacity: 1, width: 14 }
								}
								transition={{ duration: 0.2 }}
								className="h-[1.5px] bg-foreground block"
							/>
							<motion.span
								animate={
									isMobileMenuOpen
										? { rotate: -45, y: -6, width: 20 }
										: { rotate: 0, y: 0, width: 20 }
								}
								transition={{ duration: 0.3 }}
								className="h-[1.5px] bg-foreground block origin-center"
							/>
						</div>
					</motion.button>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "100dvh" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
							className="md:hidden bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
						>
							{siteConfig.nav.map((item, i) => (
								<motion.a
									key={item.href}
									href={item.href}
									initial={{ opacity: 0, x: -30 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 30 }}
									transition={{
										delay: i * 0.08,
										duration: 0.4,
										ease: [0.25, 0.4, 0.25, 1],
									}}
									onClick={() => setIsMobileMenuOpen(false)}
									className={`text-3xl font-light tracking-tight transition-colors ${
										activeSection === item.href
											? "text-gradient"
											: "text-foreground hover:text-primary"
									}`}
								>
									{item.label}
								</motion.a>
							))}
							<motion.a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 30 }}
								transition={{
									delay: siteConfig.nav.length * 0.08,
									duration: 0.4,
								}}
								className="text-lg px-8 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all mt-4"
							>
								Resume
							</motion.a>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
}
