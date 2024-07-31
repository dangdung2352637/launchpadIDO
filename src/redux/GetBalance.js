import { useSelector } from "react-redux";

export function GetBlance() {
  const { balance } = useSelector((state) => state.wallet);
  const formattedBalance = Number(balance).toFixed(3);
  return (
    <div>
      <p>Balance: {formattedBalance} BNB</p>
    </div>
  );
}
