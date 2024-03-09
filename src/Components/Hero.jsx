import styled from "styled-components"




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


const Hero = () => {
    return (
        <SectionStyled class="">
            <img src={about.imgProfile} alt="foto de perfil" />
            <span className="badge rounded-pill text-bg-danger ms-2">Disponible para trabajar</span>

            <h1>Hola, Soy {about.name} </h1>
            <p>{about.detailsA} <strong>{about.emphasis}</strong>{about.detailsB}</p>

            <a href={about.linkedIn} target="_blank" rel="noopener noreferrer" >LinkedIn</a>
            <a href={about.gitHub} target="_blank" rel="noopener noreferrer" >GitHub</a>
        </SectionStyled>

    )
}

export default Hero



const SectionStyled = styled.section`
/* border: 1px solid #80808055; */
max-width: 60ch;
/* text-wrap: balance; */
/* text-wrap: pretty; */


img{
    width: 60px;
}

strong{
    /* color: #7E1328; */
    color: crimson;
}
a{
    padding-right: 12px;
}
`