import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "@/helpers";
import { PlacesState, Coords } from "@/interfaces";

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
}

export interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation()
            .then((coords) => {
                dispatch({ type: 'setUserLocation', payload: coords })
            })
    }, [])

    const setCustomLocation = (coords: Coords | undefined) => {
        dispatch({ type: 'setCustomLocation', payload: coords })
    }


    return (
        <PlacesContext.Provider value={{
            ...state,
            setCustomLocation,
        }}>
            {children}
        </PlacesContext.Provider>
    )
}