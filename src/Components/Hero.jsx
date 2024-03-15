import styled from 'styled-components'
import About from './About'
import SocialBtn from './SocialBtn'
import LogoLinkedIn from './Icons/LinkedIn'

const Hero = () => {
	return (
		<SectionStyled class="">
			<img src={About.imgProfile} alt="foto de perfil" />
			<span className="badge rounded-pill text-bg-danger ms-2">
				{About.status}
			</span>

			<h1>Hola, Soy {About.name} </h1>
			<p>
				{About.detailsA}
				<strong>{About.emphasis}</strong>
				{About.detailsB}
			</p>

			<SocialBtn />
		</SectionStyled>
	)
}

export default Hero

const SectionStyled = styled.section`
	max-width: 60ch;
	/* border: 1px solid #80808055; */
	/* text-wrap: balance; */
	/* text-wrap: pretty; */

	img {
		width: 60px;
	}

	strong {
		color: crimson;
		color: #7f1d1d;
		color: #7e1328;
	}
`
