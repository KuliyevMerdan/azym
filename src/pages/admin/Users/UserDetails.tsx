import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppContext from "../../../AppContext";

export function UserDetail(){
    const navigate = useNavigate()
    const [user, setUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        username: '',
        role: '' 
      })

    const params = useParams()
    const {userCredentials, setUserCredentials} = useContext(AppContext) 
    async function getUserDetais() {
        try{
            let response = await fetch("https://dummyjson.com/users/" + params.id,{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userCredentials.token}`
                }
            })
            let data = await response.json()
            if(response.ok){
                setUser(data)
            }else if(response.status === 401){
                setUserCredentials(null)
                navigate('/auth/login')    
            }
            else{
                console.log("Unable to read user details:" + data)
            }
        }catch(error){
            console.log("Unable to connect")
        }
    }
    useEffect(() => {getUserDetais()}, [])
    return(
        <div className="container my-4">
            <h2 className="mmb-3">Sazlamalar</h2>
            <hr />
            <div className="row mb-3">
                <div className="col-4">ID</div>
                <div className="col-8">{user.id}</div>
            </div>
            <div className="row mb-3">
                <div className="col-4">Ady</div>
                <div className="col-8">{user.firstName}</div>
            </div>
            <div className="row mb-3">
                <div className="col-4">Familiýasy</div>
                <div className="col-8">{user.lastName}</div>
            </div>
            <div className="row mb-3">
                <div className="col-4">Elektron poçta</div>
                <div className="col-8">{user.email}</div>
            </div>
            <div className="row mb-3">
                <div className="col-4">Ulanyjy ady</div>
                <div className="col-8">{user.username}</div>
            </div>
            <div className="row mb-3">
                <div className="col-4">Wezipesi</div>
                <div className="col-8">{!user.id ? "" : user.role === "admin" ? <span className="badge text-bg-warning">Dolandyryjy</span> : <span className="badge text-bg-success">Müşderi</span>}</div>
            </div>
            <hr />
            <Link to="/azym/admin/users" role="button" className="btn btn-secondary btn-sm">Yzyna gaýtmak</Link>
        </div>
    )
}