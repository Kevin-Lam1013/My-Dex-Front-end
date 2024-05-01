import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <h1>My DEX</h1>
      <ConnectWallet />
    </div>
  );
}
