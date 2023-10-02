
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const PrivateRoute = ({ children }) => {

  const isAuth = useSelector((store) => {
    return store.loginReducer.isAuth
  })

  if (isAuth) {
    return children
  }
  else {
    return <Navigate to={"/login"} />
  }
}