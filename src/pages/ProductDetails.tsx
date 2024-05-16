import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../shared/types/types"

export function ProductDetails(){
    const params = useParams()
    const [product, setProduct] = useState<Product>()

    async function getProductDetails(){
        try{
            let response = await fetch("https://dummyjson.com/products/" + params.id )
            let data = await response.json()
            if(response.ok){
                setProduct(data)
            }else{
                console.log("Product not found")
            }
        }
        catch(error){
            console.log("Unable connect to server")
        }
    }
    useEffect(() => {
        getProductDetails()
    }, [])

    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <img src={"https://cdn.dummyjson.com/product-images/" + product?.id  + "/1.jpg"} alt="..." className="img-fluid mb-3" width="250" />
                </div>
                <div className="col-md-8">
                    <h3 className="mb-3">{product?.title}</h3>
                    <h3 className="mb-3">{product?.price}$</h3>
                    <button className="btn btn-warning btn-sm">
                        Add to Cart <i className="bi bi-cart4"></i>
                    </button>
                    <hr />
                    <div className="row mb-3">
                        <div className="col-sm-3 fw-bold">
                            Brand
                        </div>
                        <div className="col-sm-9">
                            {product?.brand}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3 fw-bold">
                            Category
                        </div>
                        <div className="col-sm-9">
                            {product?.category}
                        </div>
                    </div>
                    <div className="fw-bold">Description</div>
                    <div style={{whiteSpace: "pre-line"}}>
                        Google Search is a powerful tool that allows you to quickly find information on the internet. It uses a complex algorithm to rank websites and display the most relevant results at the top. You can search for specific keywords, phrases, or even entire sentences. Additionally, Google offers a variety of advanced search options, such as searching for images, videos, or news articles. With its speed and accuracy, Google Search is an essential tool for anyone looking to find information online.
                    </div>
                </div>
            </div>
        </div>
    )
}