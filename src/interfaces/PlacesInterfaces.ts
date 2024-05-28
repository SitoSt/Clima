export interface Coords {
    lat: number
    lon: number
}

export interface PlacesState {
    isLoading: boolean;
    userLocation?: Coords,
}