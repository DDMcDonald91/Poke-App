import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import pikachu from './Assets/pikachu.png';


function Home() {
  return (
    <>
    <Container>
            <Col id='hero-poke-text-container'>
                <div style={{width: '80%', margin: '5px auto'}}>
                    <p>Welcome to Poke App, the best place to find information on your favorite pokemon! Just use the search bar above to pull up information such as Attack and Defense stats and more. Data on the Pokemon is obtained used the PokeAPI.</p>
                    <br/>
                    <p><strong>(Make sure to use lowercase letters. Ex: "charmander")</strong></p>
                </div>
                <div>
                    <img 
                    style={{width: '30%', height: '30%'}}
                    src={pikachu} />
                </div>
            </Col>
    </Container>
    </>
  )
}

export default Home