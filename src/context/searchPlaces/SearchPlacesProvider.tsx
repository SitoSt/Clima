import { SearchPlacesState, Place } from "@/interfaces";
import { useReducer } from "react";
import { SearchPlacesContext, searchPlacesReducer } from "@/context";

const INITIAL_STATE: SearchPlacesState = {
    isLoading: false,
    placeList: undefined
}

export interface Props {
    children: JSX.Element | JSX.Element[]
}

export const SearchPlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(searchPlacesReducer, INITIAL_STATE);

    const setPlaceList = (placeList: Place[] | undefined) => {
        dispatch({ type: 'setPlaceList', payload: placeList })
    }

    return (
        <SearchPlacesContext.Provider value={{
            ...state,
            setPlaceList
        }}>
            {children}
        </SearchPlacesContext.Provider>
    )
}