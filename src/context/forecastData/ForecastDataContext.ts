import { ForecastData } from "@/interfaces"
import { createContext } from "react"

interface ForecastContextProps {
    isForecastReady: boolean
    forecastData?: ForecastData

    setForecastData: (data: ForecastData | undefined) => void
}

export const ForecastDataContext = createContext({} as ForecastContextProps)