import React from 'react';
//import { Button } from 'reactstrap';
import styled from 'styled-components';
import Fade from 'react-reveal';
import img from '../assets/garden.jpg';
import Auth from '../components/auth/Auth';


const Wrapper = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    height: auto;
    
`
const Title = styled.div`
    font-family: 'Yeseva One';
    font-size: 6vw;
    color: white;
    text-align: center;
    
    `

const Section = styled.div`
    font-family: 'Yeseva One';
    font-size: 3vw;
    color: white;
    text-align: center;
    
`

const Paragraph = styled.p`
    font-family: 'Nunito';
    font-size: 1.5vw;
    color: white;
    text-align: center;
    margin: 5% 0;

    `
const Div = styled.div`
    padding: 50px;
    margin-left: 575px;
    font-family: 'Yeseva One';
`
const TextDiv = styled.div`
    padding: 3% 5% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Home = (props) => {
    return (
        <Wrapper>
            <Fade cascade>
                <TextDiv>
                <Title>
                    <p>PlantIt</p>
                </Title>
                <Section>
                <p>An open-source garden index, stocked by you.</p>
                </Section>
                <Paragraph>
                Search for plants below. If you can't find what you're looking for, add it to the list! Create an account (or login) to access MyGarden, where you can add plants from the index to your very own virtual garden to keep track of everything you grow and how to grow it.
                </Paragraph>
                <Auth updateToken={props.updateToken}/>
                </TextDiv>
                
            </Fade>
        </Wrapper>
    )
}

export default Home;