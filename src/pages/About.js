import "./About.scss";
import Bixplorer_banner from "../image/Bixplorer_banner.png";

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
        <p className="About-2-1">
          All actions are fully guaranteed by WEB 3.0 smart contracts,
          eliminating human intervention and ensuring security.
        </p>
        <p className="About-2-2">
          Simplifying investment through technologies and innovative products
          that promote Web3 adoption
        </p>
      </div>

      <div>hello 2</div>
      <div>hello 2</div>
    </div>
  );
};
