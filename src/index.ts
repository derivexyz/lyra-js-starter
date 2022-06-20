import Lyra from "@lyrafinance/lyra-js";

const lyra = new Lyra();

// Fetch all markets
lyra.markets().then((markets) => {
  console.log(
    markets.map((market) => ({
      address: market.address,
      quote: market.quoteToken.address,
      base: market.baseToken.address,
      name: market.name,
      // List all live boards (expiries)
      expiries: market.liveBoards().map((board) => ({
        id: board.id,
        expiryTimestamp: board.expiryTimestamp,
        // List all strikes
        strikes: board.strikes().map((strike) => ({
          id: strike.id,
          strikePrice: strike.strikePrice,
        })),
      })),
    }))
  );
});
