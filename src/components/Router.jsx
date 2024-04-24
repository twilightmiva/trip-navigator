import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Booknow from "../pages/Booknow";
import Home from "../pages/Home";
import Trip from "../pages/Trip";
import Logins from "../pages/Logins";
import Register from "../pages/Register";
import Addtrip from "../pages/Addtrip";
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
          path="/Logins"
          element={
            <Layout>
              <Logins />
            </Layout>
          }
        />
        

        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />

        <Route
          path="/trips"
          element={
            <Layout>
              <Trip />
            </Layout>
          }
        />

        <Route
          path="/booknow"
          element={
            <Layout>
              <Booknow />
            </Layout>
          }
        />

<Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/addtrip"
          element={
            <Layout>
              <Addtrip />
            </Layout>
          }
        />
         <Route
          path="/addtrip"
          element={
            <Layout>
              <Addtrip />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
