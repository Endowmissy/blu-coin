import CryptoBlock from "./crypto-block.js";

let index = 0;
let timestamp = "02/01/2022";
let data = "Initial Block in the chain";
let precedingHash = "0"

export default class CryptoBlockChainHelper {
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = 4;
    }

    startGenesisBlock() {
        return new CryptoBlock(index, timestamp, data, precedingHash)
    }

    getLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.precedingHash = this.getLatestBlock().hash;
        // newBlock.hash = newBlock.generateHash();
        newBlock.proofOfWork(this.difficulty)
        this.blockchain.push(newBlock);
    }

    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
          const currentBlock = this.blockchain[i];
          const precedingBlock = this.blockchain[i - 1];
    
          if (currentBlock.hash !== currentBlock.generateHash()) {
            return false;
          }
          if (currentBlock.precedingHash !== precedingBlock.hash) return false;
        }
        return true;
    }
}