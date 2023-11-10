import React from 'react'

function App() {
  return (
   <form action='/create.account.php' >
    <label>
      Name:
      <input type='text' name='name'/>
    </label>
    <input type='submit' value='Submit'/>
   </form>
  )
}

export default App