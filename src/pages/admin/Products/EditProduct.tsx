import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Product } from "../../../shared/types/types"
import AppContext from "../../../AppContext"
import getData from "../../../shared/api/products"

export function EditProduct(){

    const params: any = useParams()

    const [initialData, setInitialData] = useState<Product>()

    const {userCredentials, setUserCredentials} = useContext(AppContext)

    // function getProduct(){
    //     fetch('https://dummyjson.com/products/' + params.id)
    //     .then(res => res.json())
    //     .then(setInitialData);
    //     // fetch("https://dummyjson.com/products/" + params.id)
    //     // .then(response => {
    //     //     if(response.ok){
    //     //         response.json()
    //     //     }
    //     //     throw new Error()
    //     // })
    //     // .then(data => {
    //     //     console.log(initialData)
    //     //     setInitialData(data)
    //     // })
    //     // .catch(error => {
    //     //     console.log(error, "Unable to read the product details")
    //     // })
    // }
    useEffect(()=>{
        // getProduct
        if (params.id) {
            const data: any = getData()
            const productID = params.id - 1
            const productData = data[productID]
            setInitialData(productData)
        }
    }, [])


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
        navigate("/azym/admin/products/")
        // const formData = new FormData(event.target)
        // const product = Object.fromEntries(formData.entries())

        // if(!product.name || !product.brand || !product.category || !product.price || !product.price || !product.description ){
        //     alert("Please fill all the fields!")
        //     return
        // }

        // try {
        //     const response = await fetch("https://dummyjson.com/products/add/" + params.id, {
        //         method: "PATCH",
        //         headers: { 
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer'+ userCredentials.token
        //         },
        //         body: formData
        //     })
        //     const data = await response.json()

        //     if(response.ok){
        //         alert("Product updated successfully!")
        //         navigate("/admin/products")
        //     } else if(response.status === 400){
        //         setValidationErrors(data)
        //     } else if(response.status === 401){
        //         setUserCredentials(null)
        //     } else {
        //         alert("Unable to update product")
        //     }
        // }catch(error) {
        //     alert("Unable to connect to server!")
        // }
    }
    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text text-center mb-5">
                        Harydy üýtgetmek
                    </h2>
                    <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">ID</label>
                            <div className="col-sm-8">
                                <input readOnly className="form-control-plaintext" defaultValue={params.id} />
                            </div>
                        </div>
                    {    
                        initialData && 
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Ady</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="name" defaultValue={initialData?.title} />
                                <span className="text-danger">{validationErrors.name}</span>
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Firmasy</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand" defaultValue={initialData?.brand} />
                                <span className="text-danger">{validationErrors.brand}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Görnüşi</label>
                            <div className="col-sm-8">
                                <select className="form-control" name="category" defaultValue={initialData?.category} >
                                    <option value="Other">Başgalar</option>
                                    <option value="Phones">Telefon</option>
                                    <option value="Computers">Kompýuter</option>
                                    <option value="Accessories">Aksessuarlar</option>
                                    <option value="Printers">Printer</option>
                                    <option value="Cameras">kamera</option>
                                </select>
                                <span className="text-danger">{validationErrors.category}</span>
                            </div>
                        </div> */}
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Bahasy</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" type="number" step="0.01" min="1" defaultValue={initialData?.price} />
                                <span className="text-danger">{validationErrors.price}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Umumy maglumat</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" rows={4} defaultValue={initialData?.description} />
                                <span className="text-danger">{validationErrors.description}</span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="offset-sm-4 col-sm-8">
                            <img src={"/azym/images/Images/" + initialData?.id  + "/1.jpg"}  alt="..." className="img-fluid mb-3" width="250" />
                            <img src={"/azym/images/Images/" + initialData?.id  + "/2.jpg"}  alt="..." className="img-fluid mb-3" width="250" />
                            </div>
                        </div>
{/* 
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Suraty</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="file" name="image" />
                                <span className="text-danger">{validationErrors.image}</span>
                            </div>
                        </div> */}

                        {/* <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Döredilen wagty</label>
                            <div className="col-sm-8">
                                <input readOnly className="form-control-plaintext" defaultValue={initialData?.stock} />
                            </div>
                        </div> */}

                        <div className="row g-2">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Tassyklamak</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link to="/azym/admin/products/" role="button" className="btn btn-secondary">Goýbolsun etmek</Link>
                            </div>
                        </div>
                    </form>
                    }
                </div>
            </div>
        </div>
    )
}