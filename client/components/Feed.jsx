import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router';
import axios from 'axios';
import Lessor from './Lessor.jsx';


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
    <div>
      { lessors.map((lessor) => 
        <Lessor key={lessor.id} lessor={lessor} removeLessor={removeLessor} user={props.user}/>
      ) }
    </div>
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