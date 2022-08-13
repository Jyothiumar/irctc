import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo1">
        <img src={img2} width={100} height={80} />
      </div>
      <div className="nav">
        <div className="top-nav">
          <button type="button" className="btn1">
            LOGIN
          </button>
          <a href="">REGISTER</a>
          <a href="">AGENT LOGIN</a>
          <a href="">CONTACT US</a>
          <a href="">ASK DISHA</a>
          <button type="button" className="btn2">
            ALERTS
          </button>
          <a href="">
            A<sup>-</sup>
          </a>
          <a href="">A</a>
          <a href="">
            A<sup>+</sup>
          </a>
          <a href="">हिन्दी</a>
        </div>
        <div className="bottom-nav">
          <FaHome />
          <button type="button" className="btn3">
            IRCTC EXCLUSIVE
          </button>
          <a href="">TRAINS</a>
          <a href="">BUSES</a>
          <a href="">FLIGHTS</a>
          <a href="">HOTELS</a>
          <a href="">HOLIDAYS</a>
          <a href="">LOYALITY</a>
          <a href="">MEALS</a>
          <a href="">PROMOTIONS</a>
          <button type="button" className="btn4">
            PREMIUM PARTNER
          </button>
          <a href="">MORE</a>
        </div>
      </div>
      <div className="logo2">
        <img src={img3} width={150} height={80} />
      </div>
    </div>
  );
}
