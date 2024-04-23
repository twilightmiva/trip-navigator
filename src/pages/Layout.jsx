import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Layout() {
  return (
    <div>
      <Nav></Nav>
      <main className="min-h-[100vh]"></main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
