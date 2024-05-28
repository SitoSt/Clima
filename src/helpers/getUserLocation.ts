import { Coords } from '../interfaces'



export const getUserLocation = async (): Promise<Coords | undefined> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            resolve({
                lat: coords.latitude,
                lon: coords.longitude
            })
        }, (err) => {
            resolve(undefined)
        })
    });
}