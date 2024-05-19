import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AppContext from "../../../AppContext"

export function CreateProduct(){
    const {userCredentials, setUserCredentials} = useContext(AppContext)
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        brand: '',
        category: '',
        price: '',
        description: '',
        image: ''
    })
    const navigate = useNavigate()

    async function handleSubmit(event: any){
        event.preventDefault()
        const formData = new FormData(event.target)
        const product = Object.fromEntries(formData.entries())

        if(!product.name || !product.brand || !product.category || !product.price || !product.price || !product.description || !product.image ){
            alert("Hemme maglumatlary dolduryň!")
            return
        }

        try {
            const response = await fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userCredentials.token}`
                },
                body: formData
            })
            const data = await response.json()

            if(response.ok){
                alert("Product created successfully!")
                navigate("/admin/products")
            } else if(response.status === 400){
                setValidationErrors(data)
            } else if(response.status === 401){
                setUserCredentials(null)
            }else {
                alert("Unable to create product")
            }
        }catch(error) {
            alert("Unable to connect to server!")
        }
    }
    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text text-center mb-5">
                        Haryt döretmek
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Ady</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="name" />
                                <span className="text-danger">{validationErrors.name}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Firmasy</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand" />
                                <span className="text-danger">{validationErrors.brand}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Görnüşi</label>
                            <div className="col-sm-8">
                                <select className="form-control" name="category">
                                    <option value="Other">Başga</option>
                                    <option value="Phones">Telefonlar</option>
                                    <option value="Computers">Kompýuterler</option>
                                    <option value="Accessories">Aksessuarlar</option>
                                    <option value="Printers">Printerlar</option>
                                    <option value="Cameras">Kameralar</option>
                                </select>
                                <span className="text-danger">{validationErrors.category}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Bahasy</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" type="number" step="0.01" min="1" />
                                <span className="text-danger">{validationErrors.price}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Umumy maglumat</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" rows={4} />
                                <span className="text-danger">{validationErrors.description}</span>
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Suraty</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="file" name="image" />
                                <span className="text-danger">{validationErrors.image}</span>
                            </div>
                        </div> */}
                        <div className="row g-2">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Tassyklamak</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link to="/admin/products" role="button" className="btn btn-secondary">Goýbolsun etmek</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}