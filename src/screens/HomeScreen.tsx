/* eslint-disable @next/next/no-img-element */
import { FeelsLike, Rain, TempForecast, Top, Wind } from "../components"
import { useContext, useLayoutEffect } from "react";
import { PlacesContext, CurrentDataContext, ForecastDataContext } from "@/context";
import { getCurrentData, getForecastData } from "@/helpers";
import styles from './HomeScreen.module.css'

export const HomeScreen = () => {

    const { isLoading, userLocation } = useContext(PlacesContext)
    const { setCurrentData } = useContext(CurrentDataContext)
    const { setForecastData } = useContext(ForecastDataContext)

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
                <div className={styles.boxes_container}>
                    <FeelsLike />
                    <Rain />
                    <Wind />
                </div>
            </div>
        </div>
    )
}