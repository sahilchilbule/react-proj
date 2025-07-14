import React, { useMemo, useState } from 'react'

const expensiveCalculation = (num) => {
     console.log("calculating");
     for (let i =0; i <100; i++){
          num += 1 ;

     }
     return num;
};

function UserRegister() {
     const [count, setCount] = useState(0);  // first of all 0 decleare kela ahe 
     const [todos, setTodos] = useState([]); // array declear kela ahe tyat add hoot jayil one by one 
     const calculation =useMemo(() =>expensiveCalculation(count) , [count]);

     const increment = ()=>
     {
          setCount((c) => c+1);
     };

     const addTodo = () => {
          setTodos((t)  => [...t , 'New Todo']);    //spread oprator spread the content ...
     };
// example -->
//   const arr =[1, 2, 3]
//      console.log(...arr , 4 , 5)
   

     //    function addTodo(event)
     //           {
     //                event.preventDefault();
      //           }


     //              function increment(event)
     //           {
     //                event.preventDefault();
                    
     //           }
  const arr =[1, 2, 3]
     console.log(...arr , 4 , 5)

  return (
    <div>
      <div style={{padding:'70px'}}>
               <div style={{padding:'20px'}}>
                    <h2 style={{padding:'5px'}}>To Do</h2>
                    {
                         todos.map((todo, index) => {
                              return <p key={index}>{todo}</p>;

                         })}
                    <button onClick={addTodo}>Add Todo</button>
               </div>
               <hr></hr>
               <div style={{padding:'20px'}}>

                    Count: {count}
                    <button onClick={increment} style={{backgroundColor:"orange"}}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
               </div>
          </div>
    </div>
    
  )
}

export default UserRegister

