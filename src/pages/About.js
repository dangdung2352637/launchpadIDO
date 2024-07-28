import "./About.scss";
import Bixplorer_banner from "../image/Bixplorer_banner.png";
import item_1 from "../image/item_1.png";
import item_2 from "../image/item_2.png";
import item_3 from "../image/item_3.png";
import item_4 from "../image/item_4.png";
import item_5 from "../image/item_5.png";
import item_6 from "../image/item_6.png";

export const About = () => {
  return (
    <div className="About">
      <div className="About-1">
        <div className="About-1-content">
          <h1>HI-END VENTURES DEX ECOSYSTEM</h1>
          <h3>
            Smart investments in exclusively <br></br> top-notch projects
          </h3>
          <div className="About-1-button">
            <button>XPP Private Sale</button>
            <button>Get a 15% bonus</button>
          </div>
        </div>
        <img width="500" height="600" src={Bixplorer_banner} />
      </div>

      <div className="About-2">
        <div>
          <p className="About-2-1">
            All actions are fully guaranteed by WEB 3.0 smart contracts,
            eliminating human intervention and ensuring security.
          </p>
        </div>
        <div>
          <p className="About-2-2">
            Simplifying investment through technologies and innovative products
            that promote Web3 adoption
          </p>
        </div>
      </div>

      <div className="About-3">
        <h1>Seamless Access</h1>
        <div className="About-3-1">
          <div>
            <img width="200" height="200" src={item_1} />
            <h3>Free Participation</h3>
          </div>
          <div>
            <img width="200" height="200" src={item_2} />
            <h3>No Queues</h3>
          </div>
          <div>
            <img width="200" height="200" src={item_3} />
            <h3>100% Allocation</h3>
          </div>
        </div>
        <div className="About-3-2">
          <div>
            <img width="200" height="200" src={item_4} />
            <h3>Private & Public Sale</h3>
          </div>
          <div>
            <img width="200" height="200" src={item_5} />
            <h3>Frendly Dashboard</h3>
          </div>
          <div>
            <img width="200" height="200" src={item_6} />
            <h3>No Whitelist</h3>
          </div>
        </div>
      </div>

      <div className="About-4">
        <div>
          <div>Xpad pro</div>
          <div> hihi</div>
          <div>Contact Us</div>
        </div>
        <div>
          <div>DOCS</div>
          <div>Presentation</div>
          <div>Whitepaper</div>
          <div>Financial Model</div>
        </div>
        <div>
          <div>FOR INVESTORS</div>
          <div>Private Sale</div>
          <div>Pitch-Deck</div>
          <div>Money Back</div>
        </div>
        <div>
          <div>MISCELLANEOUS</div>
          <div>Referral program</div>
          <div>XpadPro verification</div>
          <div>Team</div>
        </div>
      </div>
    </div>
  );
};
