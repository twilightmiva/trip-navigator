import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Layout({children}) {
  return (
    <div>
      <Nav></Nav>
      <main className="min-h-[100vh]">

        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
