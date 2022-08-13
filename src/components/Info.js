import flight from "./img/flight.png";
import hotel from "./img/hotel.png";
import rail from "./img/rail.png";
import food from "./img/food.png";
import holiday from "./img/holiday.png";
import bus from "./img/bus.png";
import ttrain from "./img/ttrain.png";
import hill from "./img/hill.png";
import chart from "./img/chart.png";
import gallery from "./img/gallery.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info1">
        <h1>
          Have you not found the right one?
          <br />
          Find a service suitable for you here.
        </h1>
      </div>
      <div className="info2">
        <div className="row1">
          <div className="flight">
            <img src={flight} width={80} height={80} />
            {/* <h2>Flights</h2> */}
          </div>
          <div className="hotel">
            <img src={hotel} width={60} height={40} />
            {/* <h2>Hotels</h2> */}
          </div>
          <div className="rail">
            <img src={rail} width={60} height={40} />
          </div>
          <div className="food">
            <img src={food} width={100} height={80} />
          </div>
          <div className="bus">
            <img src={bus} width={60} height={60} />
          </div>
        </div>
      </div>
      <div className="info3">
        <div className="row2">
          <div className="holiday">
            <img src={holiday} width={80} height={80} />
          </div>
          <div className="ttrain">
            <img src={ttrain} width={80} height={80} />
          </div>
          <div className="hill">
            <img src={hill} width={80} height={80} />
          </div>
          <div className="chart">
            <img src={chart} width={125} height={100} />
          </div>
          <div className="gallery">
            <img src={gallery} width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
