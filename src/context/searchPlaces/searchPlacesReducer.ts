import { SearchPlacesState, Place } from "@/interfaces"

type SearchPlacesAction =
    | { type: 'setPlaceList', payload: Place[] | undefined }

export const searchPlacesReducer = (state: SearchPlacesState, action: SearchPlacesAction): SearchPlacesState => {
    switch (action.type) {
        case 'setPlaceList':
            return {
                ...state,
                isLoading: false,
                placeList: action.payload
            }
        default:
            return state;
    }
}