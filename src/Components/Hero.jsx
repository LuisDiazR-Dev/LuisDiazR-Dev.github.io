import styled from "styled-components"
import LogoLinkedIn from "./Icons/LinkedIn"


const Hero = () => {
    return (
        <SectionStyled class="">
            <img src={about.imgProfile} alt="foto de perfil" />
            <span className="badge rounded-pill text-bg-danger ms-2">Disponible para trabajar</span>

            <h1>Hola, Soy {about.name} </h1>
            <p>{about.detailsA} <strong>{about.emphasis}</strong>{about.detailsB}</p>



            <nav className="d-flex flex-wrap">
                <LogoLinkedIn /> <a href={about.linkedIn} target="_blank" rel="noopener noreferrer" >{about.logo}LinkedIn</a>
                <LogoLinkedIn /> <a href={about.gitHub} target="_blank" rel="noopener noreferrer" >GitHub</a>
            </nav>



        </SectionStyled >

    )
}

export default Hero

const about =
{
    imgProfile: 'https://ludirez.github.io/img/FotoDePerfil.png',
    name: 'Luis Díaz-R',
    detailsA: 'Como ',
    emphasis: 'Desarrollador Web Full Stack',
    //todo meter Self en detalles B
    detailsB: ', encuentro verdadera satisfacción en la creación continua de soluciones basadas en software sólidas, efectivas, livianas y flexibles.',
    linkedIn: 'https://www.linkedin.com/in/luis-diazr/',
    gitHub: 'https://github.com/LuisDiazR-Dev'
}














const SectionStyled = styled.section`
max-width: 60ch;
/* border: 1px solid #80808055; */
/* text-wrap: balance; */
/* text-wrap: pretty; */


img{
    width: 60px;
}

strong{
    color: crimson;
    color: #7F1D1D;
    color: #7E1328;
}
a{
    padding:  0 24px 0 4px;
}

`