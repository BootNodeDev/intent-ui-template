import { type WarpCoreConfig } from '@hyperlane-xyz/sdk';

const ROUTER = '0x376dc8e71a223af488d885ce04a7021f32c2d1e0';
const ITT = '0x5f94BC7Fb4A2779fef010F96b496cD36A909E818';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: ITT,
      chainName: 'optimismsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|basesepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: ITT,
      chainName: 'basesepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },
  ],
  options: {},
};
