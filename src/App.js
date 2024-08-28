import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col flex-1 p-4 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:p-6">
        <div className="flex-1 bg-gray-800 rounded relative flex flex-col justify-between">
          <div className="bg-gray-900 p-2">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
              <div className="flex items-center space-x-2 lg:space-x-4">
                <div className="text-sm">Crackhead Dog</div>
                <div className="text-sm lg:flex lg:justify-center lg:items-center">Ticker: CHD</div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 text-sm">
                <span className="text-green-500">Market cap: $20,995.62</span>
                <span className="break-all lg:break-normal">CA: XXXXXXXXXXXXXXXXXX</span>
              </div>
            </div>
          </div>
          <div 
            className="relative overflow-hidden"
            style={{
              flexGrow: 1,
              height: 'calc(100% - 6rem)',
              aspectRatio: "800/600",
              backgroundImage: "url('/live.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className='absolute p-3 top-4 right-4 flex rounded-xl justify-center items-center bg-gray-500 bg-opacity-40'>
              <div className='grid bg-transparent'>
                <div className='text-center text-[16px] text-green-400 font-semibold'>LIVE</div>
                <div className='text-center text-sm'>83 viewers</div>
              </div>
            </div>
            <motion.img 
              src="crack.png" 
              alt="Crack" 
              className="absolute -bottom-[12%] -right-[7%] w-[50%] -rotate-[30deg]"
              animate={{ x: [-2, 2, -2], y: [-2, 2, -2], rotate: [-30, -32, -28, -30] }} // Shake effect with rotation
              transition={{ repeat: Infinity, duration: 0.1 }} // Rapid repeating
            />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-4 lg:w-1/3">
          <div className="flex flex-col p-4 space-y-2 bg-gray-800 rounded">
            <div className="flex flex-row space-x-4 bg-gray-800 rounded">
              <div className="flex-1">
                <button className="w-full px-4 py-2 bg-green-500 rounded">Buy</button>
              </div>
              <div className="flex-1">
                <button className="w-full px-4 py-2 bg-gray-700 rounded">Sell</button>
              </div>
            </div>
            <input type="text" className="px-4 py-2 bg-gray-700 rounded" placeholder="0.0 SOL" />
            <div className="grid grid-cols-4 gap-2">
              <button className="px-4 py-2 bg-gray-700 rounded">reset</button>
              <button className="px-4 py-2 bg-gray-700 rounded">1 SOL</button>
              <button className="px-4 py-2 bg-gray-700 rounded">5 SOL</button>
              <button className="px-4 py-2 bg-gray-700 rounded">10 SOL</button>
            </div>
            <button className="px-4 py-2 bg-green-500 rounded">place trade</button>
          </div>
          <div className="flex flex-col items-center p-4 space-y-4 bg-gray-800 rounded">
            <div className='flex justify-around w-full'>
              <a  href="https://t.me/crackheaddog" className=''>
                [ Telegram ]
              </a>
              <a href="/" className=''>
                [ Website ]
              </a>
            </div>
            <img src="dog.png" className="size-24 md:size-32 bg-gray-700 rounded-full" />
            <div className="text-center">
              <div>(ticker: CHD)</div>
              <div>a full experience of what it's like living as a crack dog. by the way, do you have $4 for a sandwich?</div>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded">
              <div className="w-1/3 h-full bg-yellow-500 rounded" />
            </div>
            <div className="text-center">bonding curve progress: 33%</div>
          </div>
          <div className="p-4 text-[16px] bg-gray-800 rounded">
            when the market cap reaches $69,420 all the liquidity from the bonding curve will be deposited into Raydium
            and burned. progression increases as the price goes up. there are 400,100,000 tokens still available for sale in the bonding curve and there is 38 SOL in the bonding
            curve.
          </div>
        </div>
      </div>
    </div>
  );
}
