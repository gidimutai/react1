/*
 you will learn
 1. Building form functionality
 2.  Creating a feedback form
 */
 import React, { useState } from 'react'

 function App() {
   
   const [score, setScore] = useState('')
   const [comment, SetComment] = useState('')
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (Number(score) <= 5 && comment.length <= 0){
       alert("please provide  a comment explaining why the experience was poor")
       return;
     }
 
     console.log("Form Submitted!");
     SetComment('');
     setScore('10')
   }
 
   return (
     <div className='App'>
       <form onSubmit={handleSubmit}>
         <fieldset>
           <h2>Feedback form</h2>
           <div className='Field'>
             <label>Score: {score} ⭐</label>
             <input
              type='range' 
              min='0'
              max='10'
              value={score}
              onChange={e => setScore(e.target.value)}
             />
           </div>
           <div className='Field'>
             <label>Comment:</label>
             <textarea
              value={comment}
              onChange={e => SetComment(e.target.value)}
             />
           </div>
           <button type='submit'>Submit</button>
         </fieldset>
       </form>
     </div>
   )
 }
 
 export default App

/* index.css 

.App {
    padding: 10px ;
    display: flex;
    justify-content: flex-start;
    align-items: self-start;
    height: 100vh;
    background-color: maroon;
  }
  
  form {
    width: 300px;
    padding: 20px;
    border: 1px solid #c09999;
    border-radius: 5px;
    background-color: peachpuff;
  }
  
  fieldset {
    border: none;
    padding: 0;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Times New Roman', Times, serif;
  }
  
  .Field {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type='range'] {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  button[type='submit'] {
    width: 100%;
    padding: 10px;
    background-color: #0e4e10;
    color: #f3e7e7;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type='submit']:hover {
    background-color: #45a049;
  }
  
  button[type='submit']:focus {
    outline: none;
  }
  
 */

 /*
            now you know
 . how to build feedback form with react
 . how to use controlled components and custom validation to provide seamless experience
 */