import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Rohit Mathur | Frontend Developer",
	description:
		"Frontend Developer specializing in React.js, Next.js, and WordPress Gutenberg. Building modern, scalable web applications with clean code and great user experiences.",
	keywords: [
		"Rohit Mathur",
		"Frontend Developer",
		"React.js",
		"Next.js",
		"WordPress",
		"Gutenberg",
		"Web Developer",
		"Jaipur",
	],
	authors: [{ name: "Rohit Mathur" }],
	openGraph: {
		title: "Rohit Mathur | Frontend Developer",
		description:
			"Frontend Developer specializing in React.js, Next.js, and WordPress Gutenberg.",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rohit Mathur | Frontend Developer",
		description:
			"Frontend Developer specializing in React.js, Next.js, and WordPress Gutenberg.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="min-h-screen">{children}</body>
		</html>
	);
}
