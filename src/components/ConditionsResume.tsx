/* eslint-disable @next/next/no-img-element */
import { ForecastDataContext } from '@/context'
import { useContext, useRef } from 'react'
import styles from './css/ConditionsResume.module.css'


export const ConditionsResume = () => {

    const { forecastData } = useContext(ForecastDataContext)

    const container = useRef<HTMLDivElement>(null)

    const onClickRight = () => {
        if (container.current !== null) {
            container.current.scrollLeft += 800 
        }
    }

    const onClickLeft = () => {
        if (container.current !== null) {
            container.current.scrollLeft -= 800
        }
    }

    const hourFormatter = (hour: number) => {
        if (hour < 12) {
            return `${hour} a.m.`
        } else if (hour == 12) {
            return `${hour} p.m.`
        }else if (hour > 12) {
            return `${hour - 12} p.m.`
        } else if (hour == 24) {
            return `0 a.m.`
        } else {
            return hour.toString()
        }
    }

    return (
        <div className={styles.main_container}>
            <h2 className={styles.head}>Condiciones los próximos días</h2>

            <div className={styles.body} ref={container}>
                {forecastData &&
                    forecastData.list.map((data) => {
                        return (
                            <div className={styles.box} key={data.hora}>
                                <h2 className={styles.head}>{hourFormatter(data.hora)}</h2>

                                <div className={styles.body}>
                                    <div className={styles.condition_description}>
                                        <img src={`https://openweathermap.org/img/wn/${data.weather.icon}.png`} alt={data.weather.description} />
                                        <p>{data.weather.description}</p>
                                    </div>


                                    <div className={styles.condition}>
                                        <p className={styles.label}>Nubes</p>
                                        <p className={styles.data}>{ data.clouds } %</p>

                                    </div>

                                    <div className={styles.condition}>
                                        <p className={styles.label}>Humedad</p>
                                        <p className={styles.data}>{ data.main.humidity } %</p>

                                    </div>

                                    <div className={styles.condition}>
                                        <p className={styles.label}>Viento</p>
                                        <p className={styles.data}>{ data.wind } m/s</p>

                                    </div>

                                </div>


                            </div>
                        )
                    })
                }

            </div>

            <button className={styles.btn_left} onClick={ onClickLeft }>
                <img src="/chevron-left.svg" alt="desplazar hacia la izquierda" />

            </button>

            <button className={styles.btn_right} onClick={ onClickRight }>
                <img src="/chevron-right.svg" alt="desplazar hacia la derecha" />
            </button>


        </div>
    )
}