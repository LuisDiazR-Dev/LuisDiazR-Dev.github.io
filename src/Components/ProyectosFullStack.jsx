import About from './About'
import SocialBtn from './SocialBtn'

const ProyectosFullStack = () => {
	const { Github } = About.networks

	return <SocialBtn github={Github}></SocialBtn>
}

export default ProyectosFullStack
