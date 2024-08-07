import { Link, NavLink } from "react-router-dom";
import "./Home.scss";
import { useSimpleWallet } from "../redux/useSimpleWallet";
import Create from "./Create";

export const Home = () => {
  const {
    walletAddress,
    isConnected,
    balance,
    networkId,
    connectWallet,
    disconnectWallet,
    checkAndSwitchNetwork,
  } = useSimpleWallet();

  return (
    <div className="dung">
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="/Create">Create</Link>
        <Link to="/IDO">IDO</Link>
      </NavLink>

      <button className="buttonConnect">
        {isConnected ? (
          <>
            <button>
              {walletAddress.substring(0, 6)}...{walletAddress.substring(38)}
            </button>
          </>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </button>
    </div>
  );
};
