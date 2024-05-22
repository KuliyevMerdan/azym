import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../AppContext"
export function Navbar() {
    const {userCredentials, setUserCredentials} = useContext(AppContext)
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-light border-bottom box-shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/azym/">
                        <img src="" alt="" width='30' className="me-2" />Dükan
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="/azym/">Baş sahypa</Link>
                            </li>
                        </ul>
                        {
                            userCredentials && userCredentials.role === "admin" && 
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dolandyryjy
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/azym/admin/products">Harytlar</Link></li>
                                        {/* <li><Link className="dropdown-item" to="/admin/users">Müşderiler</Link></li> */}
                                        <li><Link className="dropdown-item" to="/azym/profile">Sazlamalar</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" onClick={()=>{ setUserCredentials(null)}} to="/azym" >Çykmak</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        }
                        {
                            userCredentials && userCredentials.role !== "admin" &&
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Müşderi
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/azym/profile/">Sazlamalar</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" onClick={()=>{ setUserCredentials(null)}} to="/azym/" >Çykmak</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        }
                        {
                            !userCredentials &&
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="btn btn-outline-primary me-2 mb-2" role="button" to="/azym/auth/register/">Hasap döretmek</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-primary" role="button" to="/azym/auth/login/">Ulgama girmek</Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export function Footer(){
  return (
      <div className="text-center p-4 border-top row">
          <h4 className="col-6">Telefon belgi: +99365905790</h4>
          <h4 className="col-6">Email: annabayewaayperi@gmail.com</h4>
      </div>
  )
}