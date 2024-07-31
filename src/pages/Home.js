import { Link, NavLink } from "react-router-dom";
import "./Home.scss";
import { useSimpleWallet } from "../redux/useSimpleWallet";

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
        <Link to="/About">About</Link>
        <Link to="/IDO">IDO</Link>
      </NavLink>

      <button>
        {isConnected ? (
          <>
            <p>
              {walletAddress.substring(0, 6)}...{walletAddress.substring(38)}
            </p>
          </>
        ) : (
          <button onClick={connectWallet}>Kết nối ví</button>
        )}
      </button>
    </div>
  );
};
