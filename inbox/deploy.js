const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'head ozone simple music neck gadget neutral glory number move pledge valid',
    'https://sepolia.infura.io/v3/3fb312f30de945d9890a2ee3474493af'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(`Attempting to deploy from account ${accounts[0]}`);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

    console.log(`Contract deployed to ${result.options.address}`);

    provider.engine.stop();
};

deploy();