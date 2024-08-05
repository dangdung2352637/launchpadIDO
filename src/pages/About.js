import "./About.scss";
import Bixplorer_banner from "../image/Bixplorer_banner.png";
import item_1 from "../image/item_1.png";
import item_2 from "../image/item_2.png";
import item_3 from "../image/item_3.png";
import item_4 from "../image/item_4.png";
import item_5 from "../image/item_5.png";
import item_6 from "../image/item_6.png";
import bao from "../image/bao.jpg";
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.jpg";

export const About = () => {
  return (
    <div className="About">
      <div className="About-1">
        <div className="About-1-content">
          <h1>BUILT FOR IDEAS LIKE YOURS</h1>
          <h3>
            Leopad is as versatile as you are<br></br> build anything from an
            NFT project to a boutique crypto lawfirm and everything in between
          </h3>
          <div className="About-1-button">
            <button>NEP Private Sale</button>
            <button>Get a 15% bonus</button>
          </div>
        </div>
        <img width="500" height="600" src={bao} />
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

      <div className="About-2dad">
        <div className="About-2B">
          <img src={image1} />
          <div>
            <div className="About-2B-a">
              <a>SunGame</a>
              {/* <a>x-</a>
              <a>dis</a> */}
            </div>
            <div className="About-2B2">
              <div className="About-2B-Offered">
                <div>Offered</div>
                <div>25000000 SOG</div>
              </div>
              <div className="About-2B-Vesting">
                <div>Raised</div>
                <div>100000 USDC</div>
              </div>
              <div className="About-2B-Vesting">
                <div>IDO</div>
                <div>November 1, 2024</div>
              </div>
              <div className="About-2B-Vesting">
                <div>TGE</div>
                <div>November 19, 2024</div>
              </div>
              <div className="About-2B-Vesting">
                <div>Vesting</div>
                <div>20% TGE, 3 months</div>
              </div>
            </div>
          </div>
        </div>

        <div className="About-2B">
          <img src={image2} />
          <div>
            <div className="About-2B-a">
              <a>Ykool</a>
              {/* <a>x-</a>
              <a>dis</a> */}
            </div>
            <div className="About-2B2">
              <div className="About-2B-Offered">
                <div>Offered</div>
                <div>25000000 YOL</div>
              </div>
              <div className="About-2B-Vesting">
                <div>Raised</div>
                <div>200000 USDC</div>
              </div>
              <div className="About-2B-Vesting">
                <div>IDO</div>
                <div>November 16, 2024</div>
              </div>
              <div className="About-2B-Vesting">
                <div>TGE</div>
                <div>November 29, 2024</div>
              </div>
              <div className="About-2B-Vesting">
                <div>Vesting</div>
                <div>20% TGE, 3 months</div>
              </div>
            </div>
          </div>
        </div>

        <div className="About-2B">
          <img src={image3} />
          <div>
            <div className="About-2B-a">
              <a>OpGame-</a>
              {/* <a>x-</a>
              <a>dis</a> */}
            </div>
            <div className="About-2B2">
              <div className="About-2B-Offered">
                <div>Offered</div>
                <div>25000000 OLG</div>
              </div>
              <div className="About-2B-Vesting">
                <div>Raised</div>
                <div>200000 USDC</div>
              </div>
              <div className="About-2B-Vesting">
                <div>IDO</div>
                <div>November ?, 2024</div>
              </div>
              <div className="About-2B-Vesting">
                <div>TGE</div>
                <div>November ?, 2024</div>
              </div>
              <div className="About-2B-Vesting">
                <div>Vesting</div>
                <div>30% TGE, 3 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <marquee className="NEP" width="100%">
        $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP
        $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP $NEP
      </marquee>

      <div className="About-3">
        <h1>Seamless Access</h1>
        <div className="About-3-1">
          <div className="About-3-11">
            <img width="200" height="200" src={item_1} />
            <h3>Free Participation</h3>
          </div>
          <div className="About-3-12">
            <img width="200" height="200" src={item_2} />
            <h3>No Queues</h3>
          </div>
          <div className="About-3-13">
            <img width="200" height="200" src={item_3} />
            <h3>100% Allocation</h3>
          </div>
        </div>
        <div className="About-3-2">
          <div className="About-3-21">
            <img width="200" height="200" src={item_4} />
            <h3>Private & Public Sale</h3>
          </div>
          <div className="About-3-22">
            <img width="200" height="200" src={item_5} />
            <h3>Frendly Dashboard</h3>
          </div>
          <div className="About-3-23">
            <img width="200" height="200" src={item_6} />
            <h3>No Whitelist</h3>
          </div>
        </div>
      </div>

      <hr color="white"></hr>

      <div className="About-4">
        <div>
          <h3>Leopad pro</h3>
          <div> hihi</div>
          <div>Contact Us</div>
        </div>
        <div>
          <h6>DOCS</h6>
          <h5>Presentation</h5>
          <h5>Financial</h5>
        </div>
        <div>
          <h6>FOR INVESTORS</h6>
          <h5>Private-Sale</h5>
          <h5>Pitch-Deck</h5>
          <h5>Money-e</h5>
        </div>
        <div>
          <h6>MISCELLANEOUS</h6>
          <h5>Referral</h5>
          <h5>Verification</h5>
          <h5>Team</h5>
        </div>
      </div>
      <hr color="white"></hr>
      <h6>Copyright © 2023 . All rights reserved.</h6>
    </div>
  );
};
