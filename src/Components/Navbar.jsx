import styled from "styled-components"

const NavbarStyled = styled.nav`
/* background-color: #dfdede; */
border: 1px solid #80808055;

border-radius: 25px;
font-size: 0.80rem;

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
        <a className='text-decoration-none ' href="https://www.linkedin.com/in/luis-diazr/">Experiencia</a>
        <a className='text-decoration-none ' href="https://github.com/LuisDiazR-Dev">Proyectos</a>
        <a className='text-decoration-none ' href="https://www.linkedin.com/in/luis-diazr/">Sobre mí</a>
        <a className='text-decoration-none ' href="https://www.linkedin.com/in/luis-diazr/">Contacto</a>
      </NavbarStyled>

    </div>
  )
}
export default Navbar