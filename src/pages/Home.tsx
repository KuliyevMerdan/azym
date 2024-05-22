import { Link } from "react-router-dom"
import { Product } from "../shared/types/types"
import { useEffect, useState } from "react"
import getData from "../shared/api/products"

export function Home(){
    const [products, setProducts] = useState([])
    // const [categories, setCategories] = useState([])

    //pagination
    // const [currentPage, setCurrentPage] = useState(1)
    // const [totalPages, setTotalPages] = useState(1)
    // const pageSize = 16

    //filter
    // const [filterParams, setFilterParams] = useState({brand: "", category: ""})

    // const [sortColumn, setSortColumn] = useState({column: "id", orderBy: 'desc'}) 

    useEffect(()=>{
        const data = getData()
        setProducts(data)
    }, [])
    // function getCategories(){
    //     let url = "https://dummyjson.com/products/categories"

    //     fetch(url)
    //     .then(response => {
    //         if(response.ok){
    //             return response.json();
    //         }
    //         throw new Error()
    //     }).then(data => {
    //         setCategories(data)
    //     }).catch(error => {
    //         alert(error)
    //     })
    // }

    // function getProducts() {
    //     let url = "https://dummyjson.com/products?limit="+pageSize+"&skip="+pageSize*(currentPage - 1)

    //     if(filterParams.category){
    //         url = "https://dummyjson.com/products/category/" + filterParams.category
    //         //url = url + "&category=" + filterParams.category
    //     }
    //     fetch(url)
    //     .then(response => {
    //         if(response.ok){
    //             return response.json();
    //         }
    //         throw new Error()
    //     }).then(data => {
    //         let pages = Math.ceil(data.total/pageSize)
    //         setTotalPages(pages)
    //         setProducts(data.products)
    //     }).catch(error => {
    //         alert(error)
    //     })
    // }
    // useEffect(getCategories, [])
    // useEffect(getProducts, [currentPage, filterParams])
        
    // let pageButtons = []
    // for(let i = 1; i <= totalPages; i++) {
    //     pageButtons.push(
    //         <li className={i === currentPage ? "page-item active" : "page-item"} key={i}>
    //             <a className="page-link" href={"?page=" + i} onClick={(event)=>{
    //                 event.preventDefault()
    //                 setCurrentPage(i)
    //             }}>{i}</a>
    //         </li>
    //     )
    // }

    // function handleCategoryFilter(event: any){
    //     let category = event.target.value
    //     setFilterParams({...filterParams, category: category})
    // }

    return(
        <>
        <div style={{ backgroundColor: "#08618d", minHeight: "200px" }}>
            <div className="container text-white py-5">
                <div className="row align-items-center g-5">
                    <div className="col-md-6">
                        <h1 style={{ fontSize: "80px"}}>Online market</h1>
                        <p>"Aragatnaşyk enjamlar" onlaýn market</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="./images/hero.png" alt="hero" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-light">
            <div className="container py-5">
                <div className="row mb-5 g-2">
                    <div className="col-md-10">
                        <h4>Harytlar</h4>
                    </div>
                    {/* <div className="col-md-2">
                        <select name="" id="" className="form-select">
                            <option value="">Hemme görnüşler</option>
                            {
                                categories.map((category, index) => {
                                    return <option key={index} value={category}>{category}</option>
                                })
                            }
                        </select>
                    </div> */}
                </div>
                <div className="row mb-5 g-3">
                    {
                        products.map((product, index) =>{
                            return(
                                <div className="col-md-3 col-sm-6 col-xs-6" key={index}>
                                    <ProductItem product={product} />
                                </div>
                            )
                        })
                    }
                </div>
                {/* <ul className="pagination">
                    {pageButtons}
                </ul> */}
            </div>
        </div>
        </>
    )
}

function ProductItem({product}: any){
    return(
        <div className="rounded border shadow p-4 text-center h-100">
            <img src={"./images/Images/" + product.id  + "/1.jpg"} 
            alt="..." 
            style={{ height: "220px", objectFit: "contain"}} 
            className="img-fluid" />
            <hr />
            <h4 className="py-2">{product.title}</h4>
            <p>
                Firmasy: {product.brand}, Görnüşi: {product.category} <br/>
                {product.description.substr(0, 50)+ "..."}
            </p>
            <h4 className="mb-4">{product.price}</h4>
            <Link to={"/azym/products/" + product.id}  role="button" className="btn btn-primary btn-sm m-2" >Maglumat</Link>
        </div>
    )
}

{/* <div className="col-md-2">
                        <select name="" id="" className="form-select">
                            <option value="0">Order by newest</option>
                            <option value="1">Price: Low to High</option>
                            <option value="2">Price: High to Low</option>
                        </select>
                    </div> */}