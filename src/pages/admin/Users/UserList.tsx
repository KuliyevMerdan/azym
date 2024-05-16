import { useContext, useEffect, useState } from "react"
import { User } from "../../../shared/types/types"
import { Link, useNavigate } from "react-router-dom"
import AppContext from "../../../AppContext"

export function UserList(){
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const {userCredentials, setUserCredentials} = useContext(AppContext)

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const pageSize = 10


    async function getUsers(){
        let url = "https://dummyjson.com/users?limit="+pageSize+"&skip="+pageSize*(currentPage - 1)
        try{
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userCredentials.token}`
                }
            })
            let data = await response.json()
            if(response.ok){
                let pages = Math.ceil(data.total / pageSize)
                setUsers(data.users)
                setTotalPages(pages)
            } else if(response.status === 401){
                setUserCredentials(null)
                navigate('/auth/login')
            } else {
                console.log('Unable to read data: ' + data)
            }
        }
        catch(error){
            console.log('Unable to connect')
        }
    }

    let pageButtons = []
    for(let i = 1; i <= totalPages; i++) {
        pageButtons.push(
            <li className={i === currentPage ? "page-item active" : "page-item"} key={i}>
                <a className="page-link" href={"?page=" + i} onClick={(event)=>{
                    event.preventDefault()
                    setCurrentPage(i)
                }}>{i}</a>
            </li>
        )
    }

    useEffect(()=>{getUsers()}, [currentPage])
    return(
        <div className="container my-4">
            <h2 className="text-center mb-5">List of Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user: User, index)=> {
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === "admin" ? <span className="badge text-bg-warning">Admin</span> :
                                        <span className="badge text-bg-success">Client</span>
                                    }</td>
                                    <td>
                                        <Link to={"/admin/users/details/" + user.id} className="btn btn-primary btn-sm" role="button">Details</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <ul className="pagination">
                {pageButtons}
            </ul>
        </div>
    )
}