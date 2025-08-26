import selfFavIcon from '../self_FavIcon.webp'

export const Brand = () => {
	return (
		<div className=" flex items-center">
			<img src={selfFavIcon} className=" h-6 sm:h-9 rounded-full" alt="Logo" />
			<span className="self-center whitespace-nowrap mr-2 font-semibold dark:text-white text-gray-700">
				<i>Self</i>
			</span>
		</div>
	)
}
