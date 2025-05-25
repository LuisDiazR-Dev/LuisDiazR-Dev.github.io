export const ProjectCard = () => {
	return (
		<article className="w-full max-w-sm md:max-w-xs lg:max-w-sm bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
			<header className="h-48 overflow-hidden">
				<img
					src="https://via.placeholder.com/320x192"
					alt="Project screenshot"
					className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
				/>
			</header>

			<section className="p-4">
				<h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
					Project Title
				</h2>
				<p className="text-gray-700 dark:text-gray-300 text-sm">
					This is a brief description of the project. It highlights the main
					features and technologies used.
				</p>
			</section>

			<footer className="p-4 pt-0">
				<button
					className="mt-2 inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
					onClick={() => window.open('https://example.com', '_blank')}
				>
					View Project
				</button>
			</footer>
		</article>
	)
}
