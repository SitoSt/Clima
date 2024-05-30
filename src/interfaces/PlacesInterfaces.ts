export interface Coords {
    lat: number
    lon: number
}

export interface PlacesState {
    isLoading: boolean;
    userLocation?: Coords,
}

export interface SearchPlacesState {
    isLoading: boolean;
    placeList?: Place[];
}

export interface Place {
    id: number
    name: string
    coords: Coords
    country: string
    state: string
}