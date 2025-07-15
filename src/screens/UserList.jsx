import React from 'react'
import UserCard from '../components/userCard'

import data from '../utils/data'
function UserList() {
     return (
     <div>
     {data.map(({name , emailId , rollNo})=>{
          return( 
          <UserCard name={name} emailId={emailId} rollNo={rollNo}/>
 )}
    )}
</div>

     )
     };

export default UserList
