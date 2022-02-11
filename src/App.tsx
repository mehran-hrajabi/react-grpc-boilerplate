import React from 'react';
import { CallClientRequest } from './helpers/requests';

const App: React.FC = () => {
  const callRPC = () => {
    let payload = 'Hello';
  
    CallClientRequest(payload).then((response) => {
      //Here's the response!
      console.log(response);
    })
    .catch((error) => {
      //In case if your request failed
      console.log(error);
    })
  };

  return (
    <button onClick={callRPC}>Sample</button>
  );
}

export default App;
