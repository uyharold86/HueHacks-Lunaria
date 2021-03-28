import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../contest/auth'

function AuthRoute({ componenet: Componenet, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route  
      {...rest}
      render={props => 
          user ? <Redirect to="/"/> : <Component {...props}/>
      }
      />
  )
}

export default AuthRoute;