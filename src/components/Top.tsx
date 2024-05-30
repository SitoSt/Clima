/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { CurrentDataContext, PlacesContext, SearchPlacesProvider } from "../context";
import styles from './css/Top.module.css';
import { SearchPlaces } from "./PlacesSearch";


export const Top = () => {

    const { isCurrentReady, currentData } = useContext(CurrentDataContext)
    const { isLoading, userLocation } = useContext(PlacesContext)


    const dataWaiter: JSX.Element = (
        <>
            {!isCurrentReady ? (
                <>
                    <h1>Obteniendo el tiempo en tu ubicación</h1>
                </>
            ) : (
                <>
                    {!currentData ? (
                        <>
                            <h1>No se ha podido acceder a los datos del tiempo en tu ubicación</h1>
                        </>
                    ) : (
                        <>
                            <h1>Tiempo en {currentData.name}</h1>
                            <img src={`https://openweathermap.org/img/wn/${currentData.weather.icon}@2x.png`} alt={currentData.weather.description} />
                            <p>{currentData.weather.description}</p>

                        </>
                    )}
                </>
            )}
        </>
    )


    const topInfo: JSX.Element = (
        <>
            {isLoading ? (
                <>
                    <h1>Accediendo a tu ubicación...</h1>
                </>
            ) : (
                <>
                    {userLocation ? (
                        <>
                            {dataWaiter}
                        </>
                    ) : (
                        <>
                            <h1>No se ha podido acceder a tu localización</h1>
                            <p>
                                Dale permiso a la pagina para acceder a tu
                                ubicación o selecciona una en el buscador
                            </p>
                        </>
                    )}
                </>
            )
            }
        </>
    );

    return (
        <div className={styles.main_container}>
            <div className={styles.top_info_container}>
                {topInfo}
            </div>

            <MainDataTemp />
            <SearchPlacesProvider>
                <SearchPlaces />
            </SearchPlacesProvider>


        </div>

    );

}

const MainDataTemp = () => {
    const { currentData } = useContext(CurrentDataContext)

    return (
        <div className={styles.main_temp_container}>
            {currentData &&
                <>
                    <h1>{Math.round(currentData.main.temp)}º</h1>
                    <div>
                        <p>Máx: {Math.round(currentData.main.temp_max)}º</p>
                    <p>Mín: {Math.round(currentData.main.temp_min)}º</p>
                    </div>
                </>
            }
        </div>
    );

}