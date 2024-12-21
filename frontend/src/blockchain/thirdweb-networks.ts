
export const phronAI = {
    // Required information for connecting to the network
    chainId: 7744, // Chain ID of the network
    rpc: ["https://testnet.phron.ai"], // Array of RPC URLs to use

    // Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
        decimals: 18,
        name: "PHRON",
        symbol: "PHR",
    },
    shortName: "PHRON", // Display value shown in the wallet UI
    slug: "PHRON",
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "PHRON AI", // Name of the network
    name: "PHRON AI", // Name of the network
};

export const arbitrum_sepolia = {    // Required information for connecting to the network
    chainId: 421614, // Chain ID of the network
    rpc: ["https://api.zan.top/arb-sepolia"], // Array of RPC URLs to use

    // Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
        decimals: 18,
        name: "ETHER",
        symbol: "ETH",
    },
    shortName: "ETHER", // Display value shown in the wallet UI
    slug: "ETHER",
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "Arbitrum Sepolia", // Name of the network
    name: "Arbitrum Sepolia", // Name of the network
};