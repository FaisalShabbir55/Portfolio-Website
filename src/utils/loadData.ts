import ownerData from '../data/owner-data.json';
import type { OwnerData } from '../types';

export const loadOwnerData = (): OwnerData => {
  return ownerData as OwnerData;
};

