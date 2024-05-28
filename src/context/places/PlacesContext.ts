import { createContext } from 'react';
import { PlacesState } from '@/interfaces';

export const PlacesContext = createContext<PlacesState>({} as PlacesState);