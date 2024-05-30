import { Place } from "@/interfaces/PlacesInterfaces";
import { createContext } from "react";

interface SearchPlacesStateContextProps {
    isLoading: boolean;
    placeList?: Place[];

    setPlaceList(placeList: Place[] | undefined): void
}

export const SearchPlacesContext = createContext<SearchPlacesStateContextProps>({} as SearchPlacesStateContextProps);