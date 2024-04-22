import Nav from "../components.jsx/Nav"
import Footer from "../components.jsx/Footer"
function Layout(){
    return(
        <div>
            <Nav></Nav>
            <main className="min-h-[100vh]"></main>
            <Footer></Footer>
        </div>
    )
}
export default Layout