import { Link } from "react-router-dom"

function Nav(){
    return(
<nav className="bg-trasparent h-[20vh] bg-no-repeat bg-fill bg-bottom">
    <div className="flex flex-wrap justify-between items-center">
        <div><img className="h-[20vh]" src="src/assets/images/logo2-removebg-preview.png"/></div>
        <div>
            <ul className="flex flex-wrap justify-center items-center gap-7">
                <Link to="Signup"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md">Sign-Up</li></Link>
                <Link to="Login"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md ">Log-In</li></Link>
                <Link to="Trips"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md ">All-Trips</li></Link>
            </ul>
        </div>
    </div>
</nav>
    )
}
export default Nav