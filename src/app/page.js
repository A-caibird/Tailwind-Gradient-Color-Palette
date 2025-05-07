import ColorCardTemplate from "@/components/ColorCard";
import Footer from "@/components/Footer";
import colorList from "@/data";

export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-gray-50 dark:bg-gray-900">
				{/* Header Section */}
				<header className="py-8 px-4 sm:px-8 md:px-16 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
						Tailwind Gradient Color Palette
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Find and use beautiful gradient colors with ready-to-copy Tailwind
						CSS code
					</p>
				</header>
				{/* Instructions Section */}
				<section className="mb-12 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
						<h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
							How to Use
						</h2>
						<ol className="space-y-3 text-gray-700 dark:text-gray-300">
							<li>
								<span className="font-medium">Step 1:</span> Install Tailwind
								CSS in your project:
								<pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-2 overflow-x-auto text-sm">
									<code>
										npm install tailwindcss @tailwindcss/postcss postcss
									</code>
								</pre>
							</li>
							<li>
								<span className="font-medium">Step 2:</span> Click on any color
								card to copy its Tailwind CSS class
							</li>
							<li>
								<span className="font-medium">Step 3:</span> Paste the code into
								your React/Vue/Svelte/Solid elements
							</li>
						</ol>
					</div>
				</section>
				{/* Color Grid */}
				<section className="px-4 sm:px-8 pb-20">
					<div className="grid grid-cols-3 gap-16">
						{colorList.map((item, index) => {
							return <ColorCardTemplate key={item} colorClassName={item} />;
						})}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
