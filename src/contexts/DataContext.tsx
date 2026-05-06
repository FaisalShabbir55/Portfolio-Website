import { createContext, useContext, ReactNode } from 'react';
import { loadOwnerData } from '../utils/loadData';
import type { OwnerData } from '../types';

const OwnerDataContext = createContext<OwnerData | null>(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const data = loadOwnerData();

  return (
    <OwnerDataContext.Provider value={data}>
      {children}
    </OwnerDataContext.Provider>
  );
};

export const useOwnerData = (): OwnerData => {
  const context = useContext(OwnerDataContext);
  if (!context) {
    throw new Error('useOwnerData must be used within DataProvider');
  }
  return context;
};

