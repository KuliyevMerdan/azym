import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppContext, { AppConsumer } from "../../AppContext";

export function Register(){
    const navigate = useNavigate()
    const {userCredentials, setUserCredentials} = useContext(AppContext)
    if(userCredentials){
        return <Navigate to="/azym/" />
    }
    async function handleSubmit(event: any){
        event.preventDefault()

        let formData = new FormData(event.target)
        let user = Object.fromEntries(formData.entries())

        // if(!user.username || !user.lastname || !user.password || !user.email ){
        //     console.log("Please fill all the fields!")
        //     console.log(user)
        //     return
        // }
        if(user.password !== user.confirm_password){
            alert("Passwords do not match")
            return
        }

        delete user.confirm_password
        setUserCredentials(user)
        navigate("/azym/")

        // try {
        //     const response = await fetch("https://dummyjson.com/users/add", {
        //         method: "POST",
        //         headers: { 'Content-Type': 'application/json'},
        //         body: JSON.stringify(user)
        //     })
        //     const data = await response.json()
        //     if(response.ok){
        //         console.log(data)
        //         setUserCredentials(data)
        //         navigate("/")
        //     }else{
        //         console.log("Unable to register" + data)
        //     }
        // } catch (error) {
        //     console.log(error+"Unable to connect")
        // }
    }
    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-lg-8 mx-auto rounded border p-4">
                    <h2 className="text-center m-5">Täze hasap döretmek</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Ady *</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="firstname" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Familiýasy *</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="lastname" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Elektron poçta *</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="email" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Telefon belgi</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="phone" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Salgysy</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="address" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Açar sözi *</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="password" name="password" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Açar sözüni gaýtalaň *</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="password" name="confirm_password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Hasap döretmek</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link to="/azym/" className="btn btn-outline-primary" role="button">Goýbolsun etmek</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}