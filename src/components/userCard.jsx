import React from 'react'

function userCard({name , emailId , rollNo}) {
  return (
    <div>
                    <h2>{name}</h2>
                    <p>{emailId}</p>
                    <p>{rollNo}</p>
    </div>
  )
}

export default userCard
