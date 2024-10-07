import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './NavLinksPages/Home/Home';
import About from './NavLinksPages/About us/About';
import Contact from './NavLinksPages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Products from './NavLinksPages/Products/Products';
import PlanTariff from './NavLinksPages/PlanTariff/PlanTariff';
import Solutions from './NavLinksPages/Solutions/Solutions';
import Gallery from './NavLinksPages/Gallery/Gallery';
import Download from './NavLinksPages/Download/Download';
import CustomerCare from './NavLinksPages/CustomerCare/CustomerCare';
import Faq from './NavLinksPages/Faq/Faq';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Outlet />
      <Sidebar />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/solutions",
        element: <Solutions />
      },
      {
        path: "/plantariff",
        element: <PlanTariff />
      },
      {
        path: "/Faq",
        element: <Faq />
      },
      {
        path: "/CustomerCare",
        element: <CustomerCare />
      },
      {
        path: "/Download",
        element: <Download />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },

      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
