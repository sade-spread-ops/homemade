import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router';
import axios from 'axios';
import Lessor from './Lessor.jsx';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const Feed = (props) => {
  const [lessors, setLessors] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/feed')
      .then((results) => {
        setLessors(results.data);
        console.log('DATAAAAA', results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeLessor = (email) => {
    setLessors(lessors.filter(lessor => lessor.email !== email));
  };
  
  return (
    <Container sx={{
      marginY: 5
    }}
    >
      <Grid container spacing={5}>
        { lessors.map((lessor) => 
          <Lessor key={lessor.id} lessor={lessor} removeLessor={removeLessor} user={props.user}/>
        )}
      </Grid>
    </Container>
  );
};











 





// import './TinderCards.css';

// function TinderCards() {
//   const [people, setPeople] = useState([
//     {
//       name: 'person 1',

//     }

//   ]);
//   return (
//     <div className="tinderCards">
//       <div className="tinderCards_cardContainer">
//         {people.map((person) => (
//           <TinderCard
//             className="swipe"
//             key={character.name}
//             preventSwipe={['up', 'down']}
//             onSwipe={(dir)=>swiped(dir, character.name)}
//             onCardLeftScreen={()=>outOfFrame(character.name)}
//           ></TinderCard>
//         ))}
//       </div>
//     </div>
//   );
// }


export default Feed; 