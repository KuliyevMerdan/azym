import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../../shared/types/types";
import AppContext from "../../../AppContext";
import getData from "../../../shared/api/products";

//https://65dde51cdccfcd562f55bd29.mockapi.io/objects/v1/objects
export function ProductList(){
    const navigate = useNavigate()
    const {userCredentials, setUserCredentials} = useContext(AppContext)

    const [products, setProducts] = useState([]);

    // const [currentPage, setCurrentPage] = useState(1)
    // const [totalPages, setTotalPages] = useState(1)
    // const pageSize = 5

    const [search, setSearch] = useState("")
    useEffect(()=>{
        getProducts()
    }, [])

    function getProducts(){
        const data = getData()
        setProducts(data)
    }
 

    // function getProducts() {
    //     let url = "https://dummyjson.com/products?limit="+pageSize+"&skip="+pageSize*(currentPage - 1) + "&q=" + search
    //     console.log("url: " + url)
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
    //         console.log(data.products)
    //     }).catch(error => {
    //         alert(error)
    //     })
    // }

    // useEffect(getProducts, [currentPage, search])

    // function deleteProduct(id: any){
    //     fetch('https://dummyjson.com/products/' + id, {
    //         method: 'DELETE',
    //         headers: {
    //             'Authorization': `Bearer ${userCredentials.token}`
    //         }
    //     })
    //     .then(res => {
    //         if(res.status === 401){
    //             //unauthorized response
    //             setUserCredentials(null)
    //             //redirect the user
    //             navigate('/auth/login')
    //             return
    //         }
    //         if(!res.ok){
    //             throw new Error()
    //         }
    //         console.log("success")
    //         getProducts()
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    // }
    
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

    // function handleSearch(event: any){
    //     event.preventDefault()
    //     let text = event.target.search.value

    //     setSearch(text)
    //     // setCurrentPage(1)
    // }

    return(
        <div className="container my-4">
            <h2 className="text-center mb-4">Harytlar</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link to="/admin/products/create" className="btn btn-primary me-1 mb-2" role="button">Haryt goşmak</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getProducts}>Täzelemek</button>
                </div>
                <div className="col">
                {/* <form className="d-flex" onSubmit={handleSearch}>
                    <input className="form-control me-2" type="search" placeholder="Search" name="search" />
                    <button className="btn btn-outline-success" type="submit">Gözlemek</button>
                </form> */}
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ady</th>
                        {/* <th>Firmasy</th>
                        <th>Görnüşi</th> */}
                        <th>Bahasy</th>
                        {/* <th>Suraty</th> */}
                        {/* <th>Sany</th> */}
                        <th>Hereket</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product: Product, index)=> {
                            return(
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    {/* <td>{product.brand}</td>
                                    <td>{product.category}</td> */}
                                    <td>{product.price}$</td>
                                    {/* <td className="text-center"><img src={ product.images[0] } alt="" height="100" /></td> */}
                                    {/* <td>{product.stock}</td> */}
                                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                        <Link to={"/admin/products/edit/" + product.id } className="btn btn-primary btn-sm me-1">Üýtgetmek</Link>
                                        {/* <button type="button" onClick={()=>{deleteProduct(product.id)}} className="btn btn-danger btn-sm">Delete</button> */}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* <ul className="pagination">
                {pageButtons}
            </ul> */}
        </div>
    )
}