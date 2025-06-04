import { projectsList } from '../../../data/AboutMeCV'
import { CardProject } from './CardProject'
import styled from 'styled-components'

// Importación necesaria
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

// Importa los estilos de Swiper (esto es muy importante si no los tienes en el CSS global)
// import 'swiper/swiper-bundle.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface GridProjectsProps {
	activeTab: string
}

export const GridProjects = ({ activeTab }: GridProjectsProps) => {
	const filteredProjects = projectsList.filter((project) => {
		if (activeTab === 'all-projects') return true
		if (activeTab === 'react') return project.category.includes('React')
		if (activeTab === 'wordpress') return project.category.includes('WordPress')
		return false
	})

	return (
		<SwiperContainer
			// Número de slides visibles por defecto
			slidesPerView={1}
			// Espacio entre slides en px
			spaceBetween={10}
			// Flechas de navegación
			navigation={true}
			// Permite arrastrar con el cursor
			grabCursor={true}
			// Pagination (los puntitos)
			pagination={{
				clickable: true,
			}}
			// Responsividad (media queries de swiper)
			breakpoints={{
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1280: {
					slidesPerView: 3,
				},
			}}
			// Otros módulos que deseas activar
			modules={[Pagination, Navigation, Autoplay]}
			// Clase para estilizar
			className="mySwiper"
			// loop: vuelve al primer slide al llegar al final
			loop={true}
			// autoplay: puedes activar para auto-slide
			// autoplay={{ delay: 3000, disableOnInteraction: false }}

			// velocidad de transición
			speed={250}
		>
			{filteredProjects.map((project) => (
				<SwiperSlide key={project.id}>
					<CardProject project={project} />
				</SwiperSlide>
			))}
		</SwiperContainer>
	)
}

// Estilos personalizados con styled-components
const SwiperContainer = styled(Swiper)`
	width: 100%;
	height: 100%;
	padding: 48px;

	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* Pagination */
	.swiper-pagination-bullet {
		background: #0033ff9a;
		opacity: 0.7;
		transition: opacity 0.3s;
		width: 8px;
		height: 8px;
	}
	.swiper-pagination-bullet-active {
		opacity: 1;
		background: #007aff;
	}

	/* Flechas de navegación */
	.swiper-button-next,
	.swiper-button-prev {
		color: #0033ff9a;
		transition: color 0.3s;
		width: 8px;
		height: 8px;
	}
	.swiper-button-next:hover,
	.swiper-button-prev:hover {
		color: #007aff;
	}
`
