export interface CurrentDataState {
    isCurrentReady: boolean,
    currentData?: CurrentData
}

export interface CurrentData {
    name: string
    main: {
        temp: number
        temp_min: number
        temp_max: number
        feels_like: number
        humidity: number
    }
    weather: {
        main: string
        description: string
        icon: string
    }
    wind: {
        speed: number
        deg: number
        gust: number
    }
    rain: {
        una_h: number
        tres_h: number
    }
}

export interface ForecastDataState {
    isForecastReady: boolean,
    forecastData?: ForecastData
}

export interface ForecastData {
    list: [{
        hora: number
        temp: number
        wind: {
            speed: number
            deg: number
            gust: number
        }
        rain?: object,
        icon: string
    },
    ]
}