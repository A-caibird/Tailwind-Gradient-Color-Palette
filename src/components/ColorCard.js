"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ColorCardTemplate(props) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(props.colorClassName);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="w-[400px] rounded-2xl shadow-xl relative">
			<div
				className={twMerge(
					props.colorClassName,
					"h-[200px] w-full rounded-t-2xl relative",
				)}
			>
				{/* Copy button in top right */}
				<button
					onClick={handleCopy}
					className="absolute top-3 right-3 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-200 group"
					aria-label="Copy color class"
				>
					{copied ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-gray-700 group-hover:text-gray-900"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
							/>
						</svg>
					)}
				</button>

				{/* Toast notification when copied */}
				{copied && (
					<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm">
						Copied!
					</div>
				)}
			</div>

			<div className="p-4 bg-gray-100 rounded-b-2xl">
				<SyntaxHighlighter language="jsx" style={docco}>
					{`<div
    className='${props.colorClassName}'
/>
`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
