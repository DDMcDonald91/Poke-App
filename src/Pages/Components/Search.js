import Form from 'react-bootstrap/Form';
import { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/results/" + input);
    }

  return (
    <Form style={{width: '35%', margin: '10px auto'}} onSubmit={submitHandler}>
        <Form.Group>
        <Form.Label>Pokemon Search</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Search" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} />
        </Form.Group>
    </Form>
  )
}

export default Search