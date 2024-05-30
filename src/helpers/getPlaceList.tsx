import { Place } from "@/interfaces";

export const getPlaceList = (search: string): Promise<[Place] | undefined> => {




    return new Promise((resolve, reject) => {
        const res = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`);

        res.catch((reason) => {
            console.error(reason)
            reject();
        });
        res.then(response => response.json())
            .then((json) => {
                const places: [Place] = json.map((place: any, index: any) => {
                    return {
                        id: index,
                        name: place.name,
                        coords: {
                            lat: place.lat,
                            lon: place.lon
                        },
                        country: place.country,
                        state: place.state
                    }
                });
                resolve(places)
            });


    })
}