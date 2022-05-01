import { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function Results() {
    const [pokeInfo, setPokeInfo] = useState(null);
    let params = useParams();

    const getResults = async (name) => {     
      try{
        const data =  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const results = await data.json();
        await setPokeInfo(results);        
      } catch (err){
          console.log(err)
      } 
        };

        useEffect(() => {
            getResults(params.search);
        }, [params.search]);
        console.log(pokeInfo)

        if(!pokeInfo){return(
            <div>loading...</div>
        )}
  return (
    <Container>
        <Row>
            <Col md={6}>
            <div  style={{width: '80%', height: '80%',  margin: '0px auto'}}>
                <img
                 alt='pokemon'
                 style={{width: '100%', height: '100%', objectFit: 'contain'}}
                 src={pokeInfo.sprites.other.home.front_default} />
            </div>
            </Col>
            <Col md={6}>
            <Card style={{margin: '0px auto', width: '90%', height: 'auto'}} id='pokeCard'>
                <Card.Body>
                    <Card.Title>{pokeInfo.species.name}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Height: {pokeInfo.height}</li>
                            <li>Weight: {pokeInfo.weight}</li>
                        </ul>
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Base HP: {pokeInfo.stats[0].base_stat}</ListGroupItem>
                    <ListGroupItem>Base Attack: {pokeInfo.stats[1].base_stat}</ListGroupItem>
                    <ListGroupItem>Base Defense: {pokeInfo.stats[2].base_stat}</ListGroupItem>
                    <ListGroupItem>Base Special Attack: {pokeInfo.stats[3].base_stat}</ListGroupItem>
                    <ListGroupItem>Base Special Defense: {pokeInfo.stats[4].base_stat}</ListGroupItem>
                    <ListGroupItem>Base Speed: {pokeInfo.stats[5].base_stat}</ListGroupItem>
                </ListGroup> 
                </Card.Body>
            </Card>
            </Col>
            </Row>
    </Container>
  );
}
