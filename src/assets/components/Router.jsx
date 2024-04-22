import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/Layout";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Booknow from "../../pages/Booknow";
import Home from "../../pages/Home";
import Trip from "../../pages/Trip";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
           <Route
          path="/Login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

<Route
          path="/Signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />

<Route
          path="/Trip"
          element={
            <Layout>
              <Trip />
            </Layout>
          }
        />

<Route
          path="/Booknow"
          element={
            <Layout>
              <Booknow />
            </Layout>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}
export default Router;
