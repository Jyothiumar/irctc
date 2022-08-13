import mh1 from "./img/mh1.jpg";
import mh2 from "./img/mh2.jpg";
import mh3 from "./img/mh3.jpg";
import mh4 from "./img/mh4.jpg";
import mh5 from "./img/mh5.jpg";
export default function Tour() {
  return (
    <div className="tour">
      <div className="tour1">
        <h1>HOLIDAYS</h1>
      </div>
      <div className="tour2">
        <div className="tour4">
          <div className="img">
            <img src={mh1} width={337} height={277} />
          </div>
          <div className="para">
            <h2>Maharajas' Express</h2>
            <p>
              Redefining Royalty, Luxury and Comfort, Maharajas' express takes
              you on a sojourn to the era of bygone stately splendour of
              princely states. Sylvan furnishings, elegant ambience and modern
              amenities are amalgamated for an “Experience Unsurpassed”. It has
              been a winner of “World's Leading Luxury train” by World Travel
              Awards consecutively for last six years.
            </p>
            <br />
            <a href="R1">Read More </a>
          </div>
        </div>
        <div className="tour5">
          <div className="img">
            <img src={mh2} width={337} height={277} />
          </div>
          <div className="para">
            <h2>International Packages</h2>
            <p>
              Best deals in International Holiday packages, handpicked by IRCTC,
              for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan,
              Nepal, U.K., Europe, USA, Australia etc. The packages are
              inclusive of sightseeing, meals, visa charges and overseas medical
              insurance to give you a hassle-free and memorable experience.
            </p>
            <br />
            {/* <br /> */}
            <a href="R2">Read More </a>
          </div>
        </div>
        <div className="tour6">
          <div className="img">
            <img src={mh3} width={337} height={277} />
          </div>
          <div className="para">
            <h2>Domestic Air Packages</h2>
            <p>
              Be it the spiritual devotee seeking blessings of Tirupati, Shirdi
              or Mata Vaishno Devi or the leisure traveller wanting to relish
              the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets
              of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque
              Islands, IRCTC has it all. Discover India through IRCTC!
            </p>
            <br />
            {/* <br /> */}
            <a href="R3">Read More </a>
          </div>
        </div>
      </div>
      <div className="tour3">
        <div className="tour7">
          <div className="img">
            <img src={mh4} width={337} height={277} />
          </div>
          <div className="para">
            <h2>Buddhist Circuit Tourist Train</h2>
            <p>
              India, the country where Buddhism originated has rich memories of
              the Buddhist legacy. As part of its drive towards austerity, the
              only kind of art & architecture that it supported were Stupas,
              Chaityas & Viharas. Buddhist Train India will help you visit all
              these places up close for a truly religious experience.
            </p>
            <br />
            {/* <br /> */}
            <a href="R4">Read More </a>
          </div>
        </div>
        <div className="tour8">
          <div className="img">
            <img src={mh5} width={337} height={277} />
          </div>
          <div className="para">
            <h2>Rail Tour Packages</h2>
            <p>
              IRCTC offers Exclusive Rail tour packages with confirmed train
              tickets, sight-seeing and meals for enchanting Nilgiri Mountains,
              Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata
              Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday
              packages/ Land packages to these destinations are also available.
            </p>
            <br />
            {/* <br /> */}
            <a href="R5">Read More </a>
          </div>
        </div>
      </div>
    </div>
  );
}
