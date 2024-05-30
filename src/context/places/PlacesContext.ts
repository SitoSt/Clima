import { createContext } from 'react';
import { Coords } from '@/interfaces';

interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: Coords,
    setCustomLocation: (coords: Coords | undefined) => void;
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);