import "./Layout.scss"
import {useState} from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from '../pages/home/Home'
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Projects from "../pages/projects/Projects"


function Layout(){

    const [currentPage,setPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === 'Home')return<Home/>
        if(currentPage==='About')return<About/>
        if(currentPage==='Projects')return<Projects/>
        return<Contact/>
    }

    const handlePageChange =(page:any)=>setPage(page);

    return(
    <div className="layout">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer/>
    </div>
    )
}

export default Layout