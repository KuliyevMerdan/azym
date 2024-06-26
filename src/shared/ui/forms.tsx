import { useState } from "react";

export function AddProductForm1(props: any){
    function handleSubmit(event: any) {
        event.preventDefault();
        /*
        let name = event.target.name.value
        let brand = event.target.brand.value
        let category = event.target.category.value
        let unitPrice = event.target.unitPrice.value
        let quantity = event.target.quantity.value

        if(!name || !brand || !category || !unitPrice || !quantity){
            alert("Please fill all the fields!")
        }

        let product = {
            name,
            brand,
            category,
            unitPrice,
            quantity
        }
        */
        const formData = new FormData(event.target);
        let product = Object.fromEntries(formData.entries())

        if(!product.name || !product.brand || !product.category || !product.unitPrice || !product.quantity){
            alert("Please fill all the fields!")
        }

        console.log("new product: " + product)

        event.target.reset()

        props.addProduct(product)
    }
    return (
        <form className="row mb-5 g-3" onSubmit={(event) => handleSubmit(event)}>
            <div className="col-md-4">
                <label className="form-label">Name</label>
                <input className="form-control" name="name" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Brand</label>
                <input className="form-control" name="brand" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Category</label>
                <input className="form-control" name="category" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Unit Price</label>
                <input className="form-control" name="unitPrice" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Quantity</label>
                <input className="form-control" name="quantity" defaultValue={1} />
            </div>
            <div className="col-md-12">
                <button className="btn btn-primary">Add Product</button>
            </div>
        </form>
    )
}

export function AddProductForm2(props: any){
    let [name, setName] = useState("")
    let [brand, setBrand] = useState("")
    let [category, setCategory] = useState("")
    let [unitPrice, setUnitPrice] = useState("")
    let [quantity, setQuantity] = useState(1)
    function handleSubmit(event: any) {
        event.preventDefault()

        if(!name || !brand || !category || !unitPrice || !quantity){
            alert("Please fill all the fields!")
        }

        let product = {
            name,
            brand,
            category,
            unitPrice,
            quantity
        }
        
        setName("")
        setBrand("")
        setCategory("")
        setUnitPrice("")
        setQuantity(1)

        props.addProduct(product)
    }
    return (
        <form className="row mb-5 g-3" onSubmit={(event) => handleSubmit(event)}>
            <div className="col-md-4">
                <label className="form-label">Name</label>
                <input className="form-control" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="col-md-4">
                <label className="form-label">Brand</label>
                <input className="form-control" name="brand" value={brand} onChange={(event) => setBrand(event.target.value)} />
            </div>
            <div className="col-md-4">
                <label className="form-label">Category</label>
                <input className="form-control" name="category" value={category} onChange={(event) => setCategory(event.target.value)}/>
            </div>
            <div className="col-md-4">
                <label className="form-label">Unit Price</label>
                <input className="form-control" name="unitPrice" value={unitPrice} onChange={(event) => setUnitPrice(event.target.value)} />
            </div>
            <div className="col-md-4">
                <label className="form-label">Quantity</label>
                <input className="form-control" name="quantity" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
            </div>
            <div className="col-md-12">
                <button className="btn btn-primary">Add Product</button>
            </div>
        </form>
    )    
}