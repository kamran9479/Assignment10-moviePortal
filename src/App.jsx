import { Outlet } from "react-router-dom";
import Navbar from "./pages/home/navbar/Navbar";
import Footer from './pages/home/footer/Footer';

const App = () => {
  return (
    <div className="bg-slate-950">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;