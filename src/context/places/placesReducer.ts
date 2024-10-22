import { PlacesState, Coords } from "@/interfaces"

type PlacesAction =
    | { type: 'setUserLocation', payload: Coords | undefined }
    | { type: 'setCustomLocation', payload: Coords | undefined }

export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {


    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        case 'setCustomLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        default:
            return state
    }

}