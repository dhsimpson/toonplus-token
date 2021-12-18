
// utils
const addWallet = (web3, addr, pk) => {
    web3.eth.accounts.wallet.add({
        privateKey : pk,
        address : addr
    });
}
const removeWallet = (web3, addr) => {
    web3.eth.accounts.wallet.remove(addr);
}

exports.utils = {addWallet, removeWallet};
