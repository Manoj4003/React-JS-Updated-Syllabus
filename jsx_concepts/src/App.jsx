import React from 'react';
import './App.css';

let isLogged=true;
let name="Manoj";
function App()
{
  return (
    <>

    <div className='Heading'>
      <h1>React JSX</h1>
      {
        isLogged && <p>This is working fine</p>
      }
      <p>My name is {name}</p>
    </div>
    </>
  )
}
export default App;