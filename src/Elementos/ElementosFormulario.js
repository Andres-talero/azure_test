import styled from 'styled-components';
import { Link } from "react-router-dom";


const ContenedorFormulario = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem 3rem;
`


const Header = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem; 
    @media(max-width: 60rem){ /* 475px */
        flex-direction: column;
    }
`


const Titulo = styled.p`
    font-size: 4rem;
    padding: 1rem 0;
    @media(max-width: 60rem){ /* 475px */
        font-size: 3rem;
    }
`

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ContenedorInput = styled.div`
    position: relative;
    width: 60%;
    height: 2rem;
    padding: 4rem 0;
    margin-bottom: 5rem;

    ::after {
        content: attr(data-text);
        font-size: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(255, 255, 255);
        padding: 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 96%;
        pointer-events: none;
        z-index: 20;
        height: 100%;
        color: #148F77;
        border-radius: 5px;
        font-weight: 3000;
        background-color: white;
        margin-bottom: 4rem;
        overflow-x: auto;
        border: 3px solid #148F77;
    }

    ::before{
        position: absolute;
        display: inline-flex;
        height: 100%;
        width: 100%;
        background: #148F77;
        color: #fff;
        font-weight: 800;
        z-index: 25;
        font-size: 16px;
        line-height: 60px;
        padding: 0 15px;
        text-transform: uppercase;
        pointer-events: none;
        border-radius: 0 5px 5px 0;
    }

    input {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        height: 100%;
        margin: 0;
        padding: 0;
        display: block;
        cursor: pointer;
        width: 100%;
    }

    :hover:after {
    transition: all 0.3s ease-in-out;
    background: #148F77;
    color: white;
    }
`

const Input = styled.input`
    width: 100%;
    height: 2.5rem;
    border-radius: 0.625rem; /* 10px */
    border: none;
    font-size: 2rem;
    padding: 3rem 3rem;
    margin: 2rem 0;
`


const BotonSubir = styled.button`
 font-size: 1.5rem;
  width: 60%;
  padding: 2rem;
  border: none;
  background-color: #148F77;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :disabled {
    background-color: #46BFA8 !important;
    cursor: default !important;
}

`

const Boton = styled(Link)`
    background: ${(props) => props.primario ? '#2BA189' : props.danger ? '#C0392B' : props.secundario ? '#0097FF' : '#000'};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    margin: 0.3rem; /* 10px */
    border: none;
    border-radius: ${(props) => props.secundario ? '3rem' : '0.625rem'}; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none;
 
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        margin-left: 0.3rem;
        fill: white;
    }

    @media(max-width: 30rem){ /* 475px */
        font-size: 1rem; /* 19.2px */
          padding: .5rem 1rem; /* 20px 30px */
          height: 3rem; /* 60px */
    }

    :hover{
        color: white;
        border-radius: ${(props) => props.secundario ? '3rem' : '1rem'};;
        box-shadow: 0 6px 10px ${(props) => props.primario ? 'rgba(43, 161, 137, 0.8)' : props.danger ? 'rgba(192, 57, 43, 0.8)' : props.secundario ? 'rgba(0, 151, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
        transition: all .4s ease-in-out;
    }

`;



export { ContenedorFormulario, Header, Titulo, Form, ContenedorInput, Input, BotonSubir, Boton };