import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Tailwind Gradient Color Palette",
	description:
		"Find beautiful color palettes with Tailwind CSS color codes. Copy and use them instantly in your projects.",
	keywords: [
		"tailwind css",
		"color palette",
		"color codes",
		"web design",
		"css colors",
		"gradient color",
	],
	viewport: "width=device-width, initial-scale=1",
	openGraph: {
		title: "Gradient Color Palette",
		description:
			"Find and copy beautiful color palettes with ready-to-use Tailwind CSS color codes.",
		type: "website",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<meta name="twitter:title" content="Tailwind Graddient Color Palette" />
				<meta
					name="twitter:description"
					content="Find and copy beautiful color palettes with ready-to-use Tailwind CSS color codes."
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
