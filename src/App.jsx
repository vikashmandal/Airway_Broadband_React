import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About us/About';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products';
import PlanTariff from './Pages/PlanTariff/PlanTariff';
import Solutions from './Pages/Solutions/Solutions';
import Gallery from './Pages/Gallery/Gallery';
import Download from './Pages/Download/Download';
import CustomerCare from './Pages/CustomerCare/CustomerCare';
import Faq from './Pages/Faq/Faq';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      <Sidebar />
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
