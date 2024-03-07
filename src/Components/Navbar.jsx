import styled from "styled-components"

const NavbarStyled = styled.nav`
background-color: #dfdede;
border-radius: 25px;
/* display: flex; */
/* width: 356px; */
/* margin: auto; */
/* padding: 0 10px; */
/* text-align: center; */
/* justify-content: space-evenly; */
/* align-items: center; */
font-size: 0.9rem;

button{
  background-color: transparent;
  padding: 5px;
  transition: all 0.1s ease;


  &:hover{  transform: scale(1.2); /* Cambia el tamaño en un 10% más grande */}
}

a{
  /* display: inline-block; */
  color: #565656;
  &:hover{color: orange;}
}
`


const Navbar = () => {
  return (
    <div className="text-center ">
      <NavbarStyled className="row  mx-auto mt-3 mb-3  p-2   d-inline-flex  row-cols-auto">
        <a className='text-decoration-none ' href="/experiencia">Experiencia</a>
        <a className='text-decoration-none ' href="/proyectos">Proyectos</a>
        <a className='text-decoration-none ' href="/sobreMi">Sobre mí</a>
        <a className='text-decoration-none ' href="/contacto">Contacto</a>
      </NavbarStyled>

    </div>
  )
}
export default Navbar