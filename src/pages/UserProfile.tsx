import { useContext, useState } from "react"
import AppContext from "../AppContext"
import { useNavigate } from "react-router-dom"

export function UserProfile(){
    const [action, setAction] = useState("default")
    return(
        <div className="container my-4">
            <div className="row">
                {   
                    action === "default" &&
                    <div className="col-lg-8 mx-auto rounded border p-4">
                        <h2 className="mb-3">Sazlamalar</h2>
                        <hr />
                        <Details />
                        <hr />
                        <button className="btn btn-primary btn-sm me-2" onClick={()=>{setAction("update_profile")}}>Hasaby täzelemek</button>
                        <button className="btn btn-warning btn-sm" onClick={()=>{setAction("update_password")}}>Açar sözi täzelemek</button>
                    </div>
                }
                {
                    action === "update_profile" &&
                    <div className="col-lg-8 mx-auto rounded border p-4">
                        <h2 className="mb-3 text-center">Hasaby täzelemek</h2>
                        <hr />
                        <UpdateProfile />
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-link text-decoration-none" onClick={()=>{setAction("default")}}>Sazlamalara gaýdyp gelmek</button>
                        </div>
                    </div>
                }
                {
                    action === "update_password" &&
                    <div className="col-lg-5 col-md-8 mx-auto rounded border p-4">
                        <h2 className="mb-3 text-center">Açar sözi täzelemek</h2>
                        <hr />
                        <UpdatePassword />
                        <hr />
                        <div className="text-center">
                        <button className="btn btn-link text-decoration-none" onClick={()=>{setAction("default")}}>Sazlamalara gaýdyp gelmek</button>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

function Details(){
    const {userCredentials} = useContext(AppContext)

    return(
        <>
            <div className="row mb-3">
                <div className="col-sm-3">Ady</div>
                <div className="col-sm-6">{userCredentials.firstName}</div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-3">Familiýasy</div>
                <div className="col-sm-6">{userCredentials.lastName}</div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-3">Elektron poçta</div>
                <div className="col-sm-6">{userCredentials.email}</div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-3">Ulanyjy ady</div>
                <div className="col-sm-6">{userCredentials.username}</div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-3">Wezipesi</div>
                <div className="col-sm-6">{userCredentials.role === "admin" ? "Admin" : "Client"}</div>
            </div>
        </>
    )
}

function UpdateProfile(){
    const {userCredentials, setUserCredentials} = useContext(AppContext)
    const navigate = useNavigate()
    async function handleSubmit(event: any){
        event.preventDefault()
        const formData = new FormData(event.target);
        const user = Object.fromEntries(formData.entries())
        if(!user.firstname || !user.lastname || !user.email ){
            alert("Please fill all the fields!")
            return
        }
        setUserCredentials({...userCredentials, user})
        console.log("Profile updated successfully! Server response:")

        // try{
        //     const response = await fetch(`https://dummyjson.com/users/${userCredentials.id}`, {
        //         method: 'PATCH', 
        //         headers: { 
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${userCredentials.token}`
        //         },
        //         body: JSON.stringify(
        //           user
        //         )
        //     })
        //     const data = await response.json()
        //     if(response.ok){
        //         setUserCredentials({...userCredentials, data})
        //         console.log("Profile updated successfully! Server response:" + data)
        //     }
        //     else if (response.status === 401) {
        //         setUserCredentials(null)
        //         console.log("Session expired! Please login again.")
        //         navigate('/auth/login')
        //     }
        //     else {
        //         console.log("Unable to update user profile: " + data)
        //     }
        // }
        // catch(error){
        //     console.log("Unable to connect")
        // }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">First Name *</label>
                    <div className="col-sm-8">
                        <input name="firstname" className="form-control" defaultValue={userCredentials.firstName} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Last Name *</label>
                    <div className="col-sm-8">
                        <input name="lastname" className="form-control" defaultValue={userCredentials.lastName} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Email *</label>
                    <div className="col-sm-8">
                        <input name="email" className="form-control" defaultValue={userCredentials.email} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Gender</label>
                    <div className="col-sm-8">
                        <input name="gender" className="form-control" defaultValue={userCredentials.gender} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Username</label>
                    <div className="col-sm-8">
                        <input name="username" className="form-control" defaultValue={userCredentials.username} />
                    </div>
                </div>
                <div className="text-end">
                    <button type="submit" className="btn btn-primary" onClick={()=>{navigate("/")}}>Tassyklamak</button>
                    {/* <button className="btn btn-warning btn-sm">Cancel</button> */}
                </div>
            </form>
        </>
    )
}

function UpdatePassword(){
    const {userCredentials, setUserCredentials} = useContext(AppContext)
    const navigate = useNavigate()
    async function handleSubmit(event: any){
        event.preventDefault()
        const password = event.target.password.value
        const confirm_password = event.target.confirm_password.value

        if(!password || !confirm_password ){
            alert("Please fill all the fields!")
            return
        }
        if(password !== confirm_password){
            alert("Passwords do not match!")
            return
        }

        const passwordObj = {password}
        // try{
        //     const response = await fetch(`https://dummyjson.com/users/${userCredentials.id}`, {
        //         method: 'PATCH', 
        //         headers: { 
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${userCredentials.token}`
        //         },
        //         body: JSON.stringify(
        //             passwordObj
        //         )
        //     })
        //     const data = await response.json()
        //     if(response.ok){
        //         console.log("Password updated correctly!", data)
        //     }
        //     else if(response.status === 401){
        //         setUserCredentials(null)
        //         console.log("Session expired! Please login again.")
        //         navigate('/auth/login')
        //     }
        //     else {
        //         console.log("Unable to update user password: " + data)
        //     }
        // }
        // catch(error){
        //     console.log('Unable to connect to server')
        // }
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">New Password *</label>
                <input type="password" name="password" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password *</label>
                <input type="password" name="confirm_password" className="form-control" />
            </div>
            <div className="text-end">
                    <button type="submit" className="btn btn-warning">Tassyklamak</button>
                </div>
        </form>
    )
}