import styled from 'styled-components';



const ContenedorCards = styled.div`
    width: 100%;
    padding: 4rem 0;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const Card = styled.div`
    width: 40rem;
    margin: 2rem 4rem;
    height: 25rem;
    max-height: 25rem;
    padding: 3rem 5rem;
    background-color: white ;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.25);
    border-radius: 0.625rem; /* 10px */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media(max-width: 60rem){ /* 475px */
        padding: 2rem 2rem;
        width: 50%;
    }
`

const Imagen = styled.img`
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`

export { ContenedorCards, Card, Imagen }