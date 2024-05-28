import { ForecastData, ForecastDataState } from "@/interfaces";

type ForecastDataAction =
    | { type: 'setForecast', payload: ForecastData | undefined }

export const forecastDataReducer = (state: ForecastDataState, action: ForecastDataAction): ForecastDataState => {
    switch (action.type) {

        case 'setForecast':
            return {
                ...state,
                isForecastReady: true,
                forecastData: action.payload
            }
        default:
            return state;
    }
}