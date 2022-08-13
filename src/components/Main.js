import img4 from "./img/img4.png";
import { TbClipboardCheck } from "react-icons/tb";
import { IoIosListBox } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";

function Main() {
  return (
    <div className="main">
      <div className="main1">
        <div className="main2">
          <div className="main2-sub1">
            <button type="button" className="btn5">
              <TbClipboardCheck /> PNR STATUS
            </button>
            <button type="button" className="btn5">
              <IoIosListBox />
              CHARTS/VACANCY
            </button>
          </div>
          <div className="main2-sub2">
            <img src={img4} width={100} height={100} />
            <h1>BOOK TICKET</h1>
          </div>
          <div className="main2-sub3">
            <div className="main2-sub3-r1">
              <input type="text" placeholder="From" />

              <input type="text" placeholder="TO" />

              <select type="select1">
                <option>GENERAL</option>
                <option>LADIES</option>
                <option>LOWER BERTH/SR.CITIZEN</option>
                <option>PERSON WITH DISABILTY</option>
                <option>TATKAL</option>
                <option>PREMIUM TATKAL</option>
              </select>
            </div>
            <div className="main2-sub3-r2">
              <h4> DD/MM/YY</h4>
              <input type="date" />
              <select type="select1">
                <option>All Clases</option>
                <option>Anubhuti Class (EA)</option>
                <option>AC First Class (1A)</option>
                <option>Vistadome AC (EV)</option>
                <option>Exec. Chair Car (EC)</option>
                <option>AC Tier (2A)</option>
                <option>First Class (FC)</option>
                <option>AC 3 Tier (3A)</option>
                <option>AC 3 Economy (3E)</option>
                <option>AC Chair Car (CC)</option>
                <option>Sleeper (SL)</option>
                <option>Vistadome Non AC (VS)</option>
                <option>Second Sitting (2S)</option>
              </select>
            </div>
          </div>
          <div className="main2-sub4">
            <input type="checkbox" />
            <label for="text"> Person With Disability Concession</label>
            <input type="checkbox" />
            <label for="text">Flexible With Date</label>
            <br />
            <input type="checkbox" />
            <label for="text">Train With Available Berth</label>
            <input type="checkbox" />
            <label for="text">Railway Pass Concession</label>
          </div>

          <div className="main2-sub5">
            <h4>
              <span>New </span>
              IRCTC launches ticket booking on ASK DISHA 2.0
              <a href="C1">Click here</a>
              <br />
              Indian Railways have started provisioning of Linen in trains.
              <a href="C2">Click here</a> for the list of trains where Linen
              Services have been restarted as on date.
            </h4>
          </div>
        </div>
        <div className="main3">
          <h1>INDIAN RAILWAYS</h1>
          <h3>SAFETY|SECURITY|PUNCTUALITY</h3>
        </div>
      </div>
    </div>
  );
}
export default Main;
