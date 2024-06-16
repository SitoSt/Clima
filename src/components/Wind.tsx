/* eslint-disable @next/next/no-img-element */
import styles from './css/Wind.module.css'
import { CurrentDataContext } from '@/context'
import { useContext } from 'react'

export const Wind = () => {
    const { isCurrentReady, currentData } = useContext(CurrentDataContext)

    return (
        <div className={styles.box}>
            <h2 className={styles.head}>Viento</h2>
            <div className={styles.body}>
                {!isCurrentReady ?
                    (
                        <>
                            <p>cargando</p>
                        </>
                    ) : (
                        <>
                            {!currentData ?
                                (
                                    <>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <p className={styles.speed}>{currentData.wind.speed} m/s</p>
                                            {currentData.wind.gust &&
                                                <p className={styles.gust}>Rachas de {currentData.wind.gust} m/s</p>
                                            }

                                        </div>
                                        <div className={styles.brujula}>
                                            <img src="/compass.png" alt="" className={styles.cartesian} />
                                            <img src="/arrow_brujula.svg" alt="" className={styles.arrow} style={{
                                                rotate: `${currentData.wind.deg}deg`
                                            }} />
                                        </div>
                                    </>
                                )

                            }
                        </>
                    )

                }
            </div>

        </div>
    )
}