/* eslint-disable @next/next/no-img-element */
import { TempForecast, Top } from "../components"
import { useContext, useLayoutEffect } from "react";
import { PlacesContext, CurrentDataContext, ForecastDataContext } from "@/context";
import { getCurrentData, getForecastData } from "@/helpers";
import styles from './HomeScreen.module.css'

export const HomeScreen = () => {

    const { isLoading, userLocation } = useContext(PlacesContext)
    const { isCurrentReady, currentData, setCurrentData } = useContext(CurrentDataContext)
    const { isForecastReady, forecastData, setForecastData } = useContext(ForecastDataContext)

    useLayoutEffect(() => {
        if (!isLoading && userLocation) {
            getCurrentData(userLocation)
                .then(data => setCurrentData(data))
            getForecastData(userLocation)
                .then(data => setForecastData(data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, userLocation])


    return (
        <div className={styles.main_container}>
            <Top />
            <div className={styles.data_container}>
                <TempForecast />

            </div>
        </div>
    )
}