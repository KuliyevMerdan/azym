import { useContext } from "react";
import AppContext from "../../AppContext";
import { Navigate, useNavigate } from "react-router-dom";

export function AdminRoute(props: any){
    const navigate = useNavigate()
    const {userCredentials} = useContext(AppContext)
    if(!userCredentials || userCredentials.role !== "admin"){
        return navigate("/")
    }
    return props.children
}

export function AuthenticatedUserRoute({children}: any){
    const navigate = useNavigate()
    const {userCredentials} = useContext(AppContext)
    if(!userCredentials){
        return navigate("/")
    }
    return children
}

export function VisitorRoute({children}: any){
    const navigate = useNavigate()
    const {userCredentials} = useContext(AppContext)
    if(userCredentials){
        return navigate("/")
    }
    return children
}