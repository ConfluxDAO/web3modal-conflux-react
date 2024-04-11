import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();

  return (
    <>
      <button onClick={() => open()} style={{ fontSize: "18px" }}>
        Open Connect Modal
      </button>
    </>
  );
}
