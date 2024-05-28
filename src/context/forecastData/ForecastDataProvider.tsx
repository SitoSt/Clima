import { ForecastDataState, ForecastData } from "@/interfaces"
import { ForecastDataContext } from './ForecastDataContext'
import { forecastDataReducer } from './forecastDataReducer'
import { useReducer } from "react"


const INITIAL_STATE: ForecastDataState = {
    isForecastReady: false,
    forecastData: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ForecastDataProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(forecastDataReducer, INITIAL_STATE)

    const setForecastData = (data: ForecastData | undefined) => {
        dispatch({ type: 'setForecast', payload: data })
    }


    return (
        <ForecastDataContext.Provider value={{
            ...state,

            setForecastData
        }}>
            {children}
        </ForecastDataContext.Provider>

    )
}