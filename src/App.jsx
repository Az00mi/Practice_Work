import './App.css'
import Header from "./components/header/Header.jsx";
import MainPart from "./components/mainPart/MainPart.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function App() {
  return (
    <div className="all-content">
      <Header/>
      <MainPart/>
      <Footer/>
    </div>
  )
}
