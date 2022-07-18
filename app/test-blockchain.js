import CryptoBlockChainHelper from "./crypto-blockchain-helpers.js";
import CryptoBlock from "./crypto-block.js";
import moment from 'moment';

let bluCoin = new CryptoBlockChainHelper();

console.log(`[${moment().format("DD-MMM-YYYY, h:mm:ss")}`, "Info:  :::: BluCoin mining in progress...");

  bluCoin.addNewBlock(
    new CryptoBlock(1, "02/03/2022", {
      sender: "Aneeka Kramer",
      recipient: "Izaak Finnegan",
      quantity: 100,
    })
  );

  bluCoin.addNewBlock(
    new CryptoBlock(2, "05/05/2022", {
      sender: "Patricia Tate",
      recipient: "Kaiser Winters",
      quantity: 200,
    })
  );

  console.log(JSON.stringify(bluCoin, null, 4));
  console.log(`[${moment().format("DD-MMM-YYYY, h:mm:ss")}`, "Info:  :::: BluCoin mining completed");
 
