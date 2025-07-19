export interface IconProps extends React.SVGProps<SVGSVGElement> {
	size?: 'sm' | 'md' | 'lg'
}

export const AllProjectIcon: React.FC<IconProps> = ({
	className,
	size = 'md',
	...props
}) => {
	const sizeClass =
		size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'

	return (
		<svg
			className={`${sizeClass} ${className ?? ''}`}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 18 18"
			{...props}
		>
			<path d="..." />
		</svg>
	)
}
