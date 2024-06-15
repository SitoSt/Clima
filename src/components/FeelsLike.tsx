import styles from './css/FeelsLike.module.css'
import { useContext } from 'react'
import { CurrentDataContext } from '@/context'

export const FeelsLike = () => {

    const { isCurrentReady, currentData } = useContext(CurrentDataContext)

    return (
        <div className={styles.main_container}>
            <div className={styles.box}>
                <h2 className={styles.head}>Sensación térmica</h2>
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
                                            <p className={styles.feels_like}>{Math.round(currentData.main.feels_like)}º</p>
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