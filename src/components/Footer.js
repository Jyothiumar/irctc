import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import img9 from "./img/img9.png";
import img10 from "./img/img10.png";
import img11 from "./img/img11.png";
import img12 from "./img/img12.png";
import img13 from "./img/img13.png";
import footer14 from "./img/footer14.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="para">Get Connected with us on social networks</div>
        <div className="icons">
          <img src={img5} width={50} height={50} />
          <img src={img6} width={50} height={50} />
          <img src={img7} width={50} height={50} />
          <img src={img8} width={50} height={50} />
          <img src={img9} width={50} height={50} />
          <img src={img10} width={50} height={50} />
          <img src={img11} width={50} height={50} />
          <img src={img12} width={50} height={50} />
          <img src={img13} width={50} height={50} />
        </div>
      </div>
      <div className="footer2">
        <div className="row1">
          <h3>IRCTC Trains</h3>
          <br />
          <h3>General Information</h3>
          <br />
          <h3>Important Information</h3>
          <br />
          <h3>Agents</h3>
          <br />
          <h3>Enquiries</h3>
        </div>
        <div className="row2">
          <h3>How To</h3>
          <br />
          <h3>IRCTC Official App</h3>
          <br />
          <h3>Advertise with us</h3>
          <br />
          <h3>Refund Rules</h3>
          <br />
          <h3>Person With Disability Facilities</h3>
        </div>
        <div className="row3">
          <h3>IRCTC eWallet</h3>
          <br />
          <h3>IRCTC Loyalty Program</h3>
          <br />
          <h3>IRCTC-iPAY Payment Gateway</h3>
          <br />
          <h3>IRCTC Zone</h3>
          <br />
          <h3>For Newly Migrated Agents</h3>
          <br />
        </div>
        <div className="row4">
          <h3>Mobile Zone</h3>
          <br />
          <h3>Policies</h3>
          <br />
          <h3>Ask Disha ChatBot</h3>
          <br />
          <h3>About us</h3>
        </div>
      </div>
      <div className="footer3">
        <div className="footer-1">
          <img src={footer14} width={885} height={100} />
        </div>
        <div className="footer-2"></div>
      </div>
    </div>
  );
}
