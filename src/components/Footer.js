import Link from "next/link";
import { Github, Heart, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="py-6 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
			<div className="max-w-7xl mx-auto text-center">
				<div className="flex items-center justify-center space-x-6 mb-4">
					<Link
						href="https://github.com/a-caibird/tailwind-gradient-color-palette"
						className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
					>
						<Github
							size={20}
							className="hover:scale-110 transition-transform duration-200"
						/>
					</Link>
					<Link
						href="https://twitter.com/acaibird"
						className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors duration-200"
					>
						<Twitter
							size={20}
							className="hover:scale-110 transition-transform duration-200"
						/>
					</Link>
				</div>
				<p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center">
					© {new Date().getFullYear()} Tailwind Gradient Color Palette. Made
					with{" "}
					<Heart
						size={16}
						className="mx-1 text-red-500 inline animate-pulse"
						fill="#ef4444"
					/>{" "}
					by{" "}
					<Link
						href="https://github.com/a-caibird"
						className="ml-1 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
					>
						Acaibird
					</Link>
				</p>
				<p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
					A beautiful collection of Tailwind gradients and glassmorphism effects
				</p>
			</div>
		</footer>
	);
}
