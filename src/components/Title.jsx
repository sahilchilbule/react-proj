import React, { useEffect, useState } from 'react'

const title = (props) => {
     return (
          <div>
               {/* this is a title page  */}
               <h1 style={{color: "pink" }}>{props.name}</h1>
          </div>
     )
}

export default title

// react hook :-
// useState()  :- form madhe use krta yete
// useEffect() :- iske andr wo chiz define kr skte hai jisme page run hone pr ki wo run ho
// useMemo()   :- advance calculation sathi use hote  (cache krta hai)
