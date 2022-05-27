import React from 'react';

const Match = (props) => {

  const [match, setMatch] = useState({});
  

  useEffect(() => {
    axios.get('http://localhost:8000/users', {params: { email: props.match.matchRequestSender }})
      .then((results) => {
        //console.log(results, 'results on 9');
        setMatch(results.data);
      })
      .catch((err) => {
        console.error(err);
      });  
  } 
  );

  return (
    <div>
      {`${match.firstName} ${match.lastName}`}
    </div>
  );
};

export default Match;