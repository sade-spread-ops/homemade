import React, { useState } from 'react';
import { useResolvedPath } from 'react-router';
import User from '../../models/User';
// import './TinderCards.css';

// function TinderCards() {
//   const [people, setPeople] = useState([
//     {
//       name: 'person 1',

//     },
//     {  
//       name: 'Jeff Bezos',

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
export default TinderCards; 