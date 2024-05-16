import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppContext  from "../../AppContext";

export function Login(){
    const navigate = useNavigate()

    const {userCredentials, setUserCredentials} = useContext(AppContext)
    if(userCredentials){
        console.log(userCredentials)
        return <Navigate to="/" />
    }
    async function handleSubmit(event: any){
       
        event.preventDefault();

        let email = event.target.email.value;
        let password = event.target.password.value;
        let expiresInMins = 60

        if(!email || !password){
            alert("Please fill all the fields!")
            return
        }

        const credentials = {
            email,
            password
        }
        try{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  username: 'kminchelle',
                  password: '0lelplR',
                  expiresInMins: 60, // optional, defaults to 60
                })
            })
            const data = await response.json()
            if(response.ok){
                console.log(data)
                data.role = "admin"
                setUserCredentials(data)
                navigate('/')
            } else {
                console.log("Unable to login")
            }
        }
        catch(error) {
            console.log(
                "Unable to connect"
            )
        }
    }
    return(
        <div className="container my-4">
            <div className="mx-auto rounded border p-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-5">Welcome, please login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input className="form-control" type="password" name="password" />
                    </div>
                    <div className="row">
                        <div className="col d-grid">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className="col d-grid">
                            <Link to="/" role="button" className="btn btn-outline-primary">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}