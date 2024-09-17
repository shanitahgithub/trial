import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
// import MenuItem from "./components/MenuItem";
import About from "./components/about";
// import Order from "./components/Order";
// import Payment from "./components/Payment";
// import Review from "./components/Review";
import Order from "./components/Order";
import Category from "./components/MenuItem";
import Contact from "./components/contact";
import Login from "./components/login";
import Register from "./components/register";
import Services from "./components/services";
import Layout from "./components/layout";
import pals from "./pals.png";
import { useState } from "react";
import AdminDashboard from "./components/Admindashboard";
import UserDetails from "./components/Adminuser";
import AddItem from "./components/additem";
import EditItem from "./components/edititems";
import Cart from "./components/cart";
import { CartProvider } from "./components/context";
import OrderHistory from "./components/orderhistory";

// import Users from "./components/useritems";
// import GetItems from "./components/edititems";
function App() {
  // const [user, setUser] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  let loggedIn = false;

  // console.log("loggedin user", user);
  if (storedUser) {
    loggedIn = true;
    // setUser(storedUser);
  }

  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="Logo">
              <img src={pals} className="logo-1" alt="logo" />
              {/* <p>Restaurant</p> */}
            </div>
            <nav>
              <Link className="App-link" to="/">
                Home
              </Link>
              <Link className="App-link" to="/about us">
                About
              </Link>
              <Link className="App-link" to="/menu">
                Menu
              </Link>
              {/* <Link className="App-link" to="/users">
              Users
            </Link> */}
              <Link className="App-link" to="/service">
                Services
              </Link>
              {/* <Link className="App-link" to="/history">
                hist
              </Link> */}
              {/* <Link className="App-link" to="/order">
              k
            </Link> */}

              {/* <Link className="App-link" to="/dashboard">
              Dashboard
            </Link> */}

              {/* <Link className="App-link" to="/reviews">
              Reviews
            </Link> */}

              <Link className="App-link" to="/contact">
                Contact
              </Link>

              {!loggedIn ? (
                <Link className="App-link" to="/register">
                  Signup/Login
                </Link>
              ) : (
                <>
                  <Link className="App-link capitalize" to="#">
                    |
                  </Link>
                  <Link className="App-link capitalize user" to="#">
                    {loggedIn ? storedUser.username : ""}
                  </Link>
                  <Link onClick={logOut} className="App-link" to="#">
                    Logout
                  </Link>
                </>
              )}
            </nav>
          </header>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/users" element={<Users />} /> */}
              <Route path="/menu" element={<Menu />} />
              <Route path="/service" element={<Services />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route
                path="/dashboard/users/:userId"
                element={<UserDetails />}
              />

              {/* <Route path="/dashboard/items/get" element={<GetItems />} /> */}
              <Route path="/dashboard/items/add" element={<AddItem />} />
              <Route path="/dashboard/items/edit" element={<EditItem />} />
              <Route
                path="/dashboard/users/users"
                element={<AdminDashboard />}
              />

              <Route path="/about us" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/reviews" element={<Review />} /> */}

              <Route path="/order" element={<Order />} />
              <Route path="/order/:itemId" element={<Order />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/menu/:category" element={<Category />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/history" element={<OrderHistory />} />
              {/* Add this route */}
            </Routes>
          </Layout>
        </div>
      </Router>
    </CartProvider>
  );
}
export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import Menu from "./components/Menu";
// import About from "./components/about";
// import Order from "./components/Order";
// import Category from "./components/MenuItem";
// import Contact from "./components/contact";
// import Login from "./components/login";
// import Register from "./components/register";
// import Services from "./components/services";
// import Layout from "./components/layout";
// import pals from "./pals.png";
// import { useState } from "react";
// import AdminDashboard from "./components/Admindashboard";
// import UserDetails from "./components/Adminuser";
// import AddItem from "./components/additem";
// import EditItem from "./components/edititems";
// import Cart from "./components/cart";
// import { CartProvider } from "./components/context";
// import OrderHistory from "./components/orderhistory";

// function App() {
//   const storedUser = localStorage.getItem("user");
//   let loggedIn = false;
//   let user = null;

//   if (storedUser) {
//     try {
//       user = JSON.parse(storedUser);
//       loggedIn = true;
//     } catch (e) {
//       console.error("Invalid JSON in localStorage for user:", e);
//       localStorage.removeItem("user");
//     }
//   }

//   function logOut(e) {
//     e.preventDefault();
//     localStorage.removeItem("user");
//     window.location.reload();
//   }

//   return (
//     <CartProvider>
//       <Router>
//         <div className="App">
//           <header className="App-header">
//             <div className="Logo">
//               <img src={pals} className="logo-1" alt="logo" />
//             </div>
//             <nav>
//               <Link className="App-link" to="/">
//                 Home
//               </Link>
//               <Link className="App-link" to="/about us">
//                 About Us
//               </Link>
//               <Link className="App-link" to="/menu">
//                 Menu
//               </Link>
//               <Link className="App-link" to="/service">
//                 Services
//               </Link>
//               <Link className="App-link" to="/contact">
//                 Contact Us
//               </Link>

//               {!loggedIn ? (
//                 <Link className="App-link" to="/register">
//                   Signup/Login
//                 </Link>
//               ) : (
//                 <>
//                   <Link className="App-link capitalize" to="#">
//                     |
//                   </Link>
//                   <Link className="App-link capitalize user" to="#">
//                     {user?.username || ""}
//                   </Link>
//                   <Link onClick={logOut} className="App-link" to="#">
//                     Logout
//                   </Link>
//                 </>
//               )}
//             </nav>
//           </header>
//           <Layout>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/menu" element={<Menu />} />
//               <Route path="/service" element={<Services />} />
//               <Route path="/dashboard" element={<AdminDashboard />} />
//               <Route
//                 path="/dashboard/users/:userId"
//                 element={<UserDetails />}
//               />
//               <Route path="/dashboard/items/add" element={<AddItem />} />
//               <Route path="/dashboard/items/edit" element={<EditItem />} />
//               <Route
//                 path="/dashboard/users/users"
//                 element={<AdminDashboard />}
//               />
//               <Route path="/about us" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/order" element={<Order />} />
//               <Route path="/order/:itemId" element={<Order />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/menu/:category" element={<Category />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/history" element={<OrderHistory />} />
//             </Routes>
//           </Layout>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
