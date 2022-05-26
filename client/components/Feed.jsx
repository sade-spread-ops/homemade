import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router';
const axios = require('axios');
import Lessee from './Lessee.jsx';


const Feed = () => {
  const [lessees, setLessees] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/feed')
      .then((results) => {
        setLessees(results.data);
        console.log('DATAAAAA', results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      { lessees.map((lessee) => 
        <Lessee lessee={lessee}/>
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