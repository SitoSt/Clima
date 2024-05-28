import styles from "./css/TempForecast.module.css"
import { useContext } from 'react';
import { ForecastDataContext } from "../context";
import { TempForecastChart } from "./charts/TempForecastChart";

export const TempForecast = () => {

    const { isForecastReady, forecastData } = useContext(ForecastDataContext);

    return (
        <div className={styles.main_container}>
            <div className={styles.chart_container}>
                <h1>Temperatura las siguientes 24h</h1>
                <TempForecastChart />
            </div>
        </div>
    );
}


