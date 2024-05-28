import { Coords, CurrentData, ForecastData } from "../interfaces"

export const getCurrentData = (coords: Coords): Promise<CurrentData> => {
    return new Promise((resolve, reject) => {
        const res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=es&units=metric`)
        res.catch((reason) => {
            console.log(reason)
            reject();
        })

        res.then(response => response.json())
            .then(json => {
                const data: CurrentData = {
                    name: json.name,
                    main: json.main,
                    weather: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        icon: json.weather[0].icon
                    },
                    wind: json.wind,
                    rain: json.rain
                }
                resolve(data)
            })


    })
}

export const getForecastData = (coords: Coords): Promise<ForecastData> => {
    return new Promise((resolve, reject) => {
        const res = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=es&units=metric&cnt=8`)

        res.catch((reason) => {
            console.log(reason)
            reject();
        })

        res.then(response => response.json())
            .then((json) => {

                const list: ForecastData["list"] = json.list.map((obj: { dt_txt: string; main: { temp: any }; wind: any; rain: any; weather: { icon: any } }) => {
                    return {
                        hora: new Date(obj.dt_txt.replace(" ", "T")).getHours(),
                        temp: Math.round(obj.main.temp),
                        wind: obj.wind,
                        rain: obj.rain,
                        icon: obj.weather.icon
                    }
                })

                const data: ForecastData = {
                    list: list
                }

                resolve(data);
            });
    })
}