import React, { useState } from 'react'
import './index.css'

function App() {

  const [name, setName] = useState("10")

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');

    console.log("Form Submitted")
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='Field'>
            <label htmlFor='name'>Name:</label>
            <input 
              id='name'
              type='text' 
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />  
          </div>
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
/*
1. Create a controlledcomponent in React
2. Use local state and the onChange event 
3. Avoid the default behaviour of the submit event
4. Disable the submit button

Recall
Controlled components- component's state handles form data
Uncontrolled components -  DOM handles the data 
*/

{/*


body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: brown;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 50vh;
}

form {
  background-color: wheat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  padding: 30px;
  border: 3px solid #c0b519;
  border-radius: 5px;
}

.Field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  margin-bottom: 1px;
}

input[type='text'] {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d66f6f;

}

button {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: #19791c;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
*/
}