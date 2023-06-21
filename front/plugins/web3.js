// plugins/web3.js
import Web3 from "web3"


export default async function(context, inject) {
    let web3

    if (
        typeof window !== 'undefined' &&
        typeof window.ethereum !== 'undefined'
    ) {
        web3 = new Web3(window.ethereum)
        window.ethereum.enable().chatch((error) => {
            console.log(error)
        })
    } else if (
        typeof window !== 'undefined' &&
        typeof window.web3 !== 'undefined'
    ) {
        web3 = new Web3(window.web3.currentProvider)
    } else {
        const httpEndpoint = "http://127.0.0.1:8545"
        web3 = new Web3(new Web3.providers.HttpProvider(httpEndpoint))
    }
    inject('web3', web3)
}