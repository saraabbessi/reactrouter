import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard({ movie }){
    return (
      <Card style={{ width: '14rem', padding: '10px' }}>
        <Card.Img variant="top" src={movie.posterUrl}
         style={{height:"320px"}}
         />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Link to ={`/trailer/${movie.id}`}>
          <Button variant="primary">Go to trailer</Button>
          </Link>
        </Card.Body>
      </Card>
    );
}
export default MovieCard
