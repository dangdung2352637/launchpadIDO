import { Link, NavLink } from "react-router-dom";
import "./Home.scss";
import { useSimpleWallet } from "../redux/useSimpleWallet";

export const Home = () => {
  const { walletAddress, isConnected, connectWallet } = useSimpleWallet();

  return (
    <div className="Nav-link">
      <NavLink className="nav-link-page">
        <Link className="home-page" to="/">
          Home
        </Link>
        <Link to="/Create">Create</Link>
        <Link to="/IDO">IDO</Link>
      </NavLink>

      <button className="buttonConnect">
        {isConnected ? (
          <>
            <button className="buttonConnect-one">
              {walletAddress.substring(0, 6)}...{walletAddress.substring(38)}
            </button>
          </>
        ) : (
          <button className="buttonConnect-two" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </button>
    </div>
  );
};
