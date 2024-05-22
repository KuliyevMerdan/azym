import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../shared/types/types"
import getData from "../shared/api/products"

export function ProductDetails(){
    const params: any = useParams()
    const [product, setProduct] = useState<Product>()
                         
    // async function getProductDetails(){
    //     try{
    //         let response = await fetch("https://dummyjson.com/products/" + params.id )
    //         let data = await response.json()
    //         if(response.ok){
    //             setProduct(data)
    //         }else{
    //             console.log("Product not found")
    //         }
    //     }
    //     catch(error){
    //         console.log("Unable connect to server")
    //     }
    // }
    useEffect(() => {
        // getProductDetails()
        if (params.id) {
            const data: any = getData()
            const productID = params.id - 1
            const productData = data[productID]
            setProduct(productData)
        }
    }, [    ])

    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <img src={"/azym/images/Images/" + product?.id  + "/1.jpg"}  alt="..." className="img-fluid mb-3" width="250" />
                    <img src={"/azym/images/Images/" + product?.id  + "/2.jpg"}  alt="..." className="img-fluid mb-3" width="250" />
                </div>

                    
                
                <div className="col-md-8">
                    <h3 className="mb-3">{product?.title}</h3>
                    <h3 className="mb-3">{product?.price} manat</h3>
                    <button className="btn btn-warning btn-sm">
                        Sebede goşmak <i className="bi bi-cart4"></i>
                    </button>
                    <hr />
                    {/* <div className="row mb-3">
                        <div className="col-sm-3 fw-bold">
                            Firmasy
                        </div>
                        <div className="col-sm-9">
                            {product?.brand}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3 fw-bold">
                            Görnüşi
                        </div>
                        <div className="col-sm-9">
                            {product?.category}
                        </div>
                    </div> */}
                    <div className="fw-bold">Umumy maglumat</div>
                    <div style={{whiteSpace: "pre-line"}}>
                        {product?.description}
                    </div>
                </div>
            </div>
        </div>
    )
}