import React from 'react';
import { useNetworkStore, type StellarNetwork } from '../stores/networkStore';

export const NetworkSwitcher: React.FC = () => {
  const { network, setNetwork } = useNetworkStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNetwork(e.target.value as StellarNetwork);
  };

  const isTestnet = network === 'TESTNET';

  return (
    <div role="group" aria-label="Stellar network selector">
      <select
        value={network}
        onChange={handleChange}
        aria-label="Select Stellar network"
        title="Switch Stellar network"
        className={[
          'text-[10px] font-mono font-bold uppercase tracking-widest',
          'px-3 py-2 rounded border bg-transparent cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
          'min-h-[44px]',
          isTestnet
            ? 'border-yellow-500/50 text-yellow-500 hover:border-yellow-400 focus:ring-yellow-500/50'
            : 'border-(--accent)/50 text-(--accent) hover:border-(--accent) focus:ring-accent/50',
        ].join(' ')}
      >
        <option value="TESTNET" className="bg-(--bg) text-(--text)">
          Testnet
        </option>
        <option value="MAINNET" className="bg-(--bg) text-(--text)">
          Mainnet
        </option>
      </select>
    </div>
  );
};
