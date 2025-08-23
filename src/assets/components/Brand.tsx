import selfFavIcon from '../self_FavIcon.webp'

export const Brand = () => {
	return (
		<div className=" flex items-center">
			<img src={selfFavIcon} className=" h-6 sm:h-9 rounded-full" alt="Logo" />
			<span className="self-center whitespace-nowrap  font-normal dark:text-white">
				<i>LuisDíRest.Dev </i>
			</span>
		</div>
	)
}
