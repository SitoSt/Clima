import styles from './css/Rain.module.css'
import { CurrentDataContext } from '@/context'
import { useContext } from 'react'

export const Rain = () => {
    const { isCurrentReady, currentData } = useContext(CurrentDataContext)

    const lluvia = () => {
        if (currentData?.rain.tres_h !== 0 && currentData?.rain.tres_h) {
            return (
                <>
                    <p className={styles.rain}>{currentData?.rain.tres_h} mm</p>
                    <p className={styles.rain_label}>En las ultimas 3h</p>
                </>
            )
        } else if (currentData?.rain.una_h !== 0 && currentData?.rain.una_h) {
            return (
                <>
                    <p className={styles.rain}>{currentData?.rain.una_h} mm</p>
                    <p className={styles.rain_label}>En la ultima 1h</p>
                </>
            )
        } else {
            return (
                <>
                    <p className={styles.rain}>0 mm</p>
                    <p className={styles.rain_label}>En las ultimas horas</p>
                </>
            )
        }
    }

    console.log(currentData?.rain)

    return (
        <div className={styles.main_container}>
            <div className={styles.box}>
                <h2 className={styles.head}>Precipitación</h2>
                <div className={styles.body}>
                    {!isCurrentReady ?
                        (
                            <>
                                <p>obteniendo datos</p>
                            </>
                        ) : (
                            <>

                                {!currentData ?
                                    (
                                        <>
                                            <p>No se ha podido acceder a los datos del tiempo en tu ubicación</p>
                                        </>
                                    ) : (
                                        <>
                                            {lluvia()}
                                        </>
                                    )
                                }

                            </>
                        )

                    }
                </div>


            </div>
        </div>
    )
}