import styled from "styled-components"

const NavbarStyled = styled.div`
background-color: #dfdede;
border-radius: 25px;
display: flex;
width: 356px;
margin: auto;
padding: 0 10px;
text-align: center;
justify-content: space-evenly;
align-items: center;
font-size: 0.9rem;

button{
  background-color: transparent;
  padding: 5px;
  transition: all 0.1s ease;


  &:hover{  transform: scale(1.2); /* Cambia el tamaño en un 10% más grande */}
}

a{
  color: #565656;
  &:hover{color: orange;}
}
`


const Navbar = () => {
  return (
    <NavbarStyled>
      <a className="text-decoration-none" href="/experiencia">Experiencia</a>
      <a href="/proyectos">Proyectos</a>
      <a href="/sobreMi">Sobre mí</a>
      <a href="/contacto">Contacto</a>
    </NavbarStyled>
  )
}
export default Navbar