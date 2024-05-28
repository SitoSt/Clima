import { useContext } from "react";
import styles from '../css/TempForecastChart.module.css'
import { ForecastDataContext } from "@/context";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList } from "recharts";

export const TempForecastChart = () => {

    const { forecastData } = useContext(ForecastDataContext);

    const preLoadData = [
        { hora: "", temp: 20 },
        { hora: "", temp: 20 },
        { hora: "", temp: 20 },
        { hora: "", temp: 20 },
        { hora: "", temp: 20 },
        { hora: "", temp: 20 },
        { hora: "", temp: 20 },
        { hora: "", temp: 20 }
    ]

    return (
        <div>
            <ResponsiveContainer width={600} height={300}>
                <AreaChart data={forecastData ? forecastData.list : preLoadData} margin={{ top: 0, right: 17, left: 0, bottom: 10 }}>
                    <defs>
                        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(var(--accent-color))" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="rgb(var(--accent-color))" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid stroke="rgb(var(--secondary-color))" opacity={0.4} strokeDasharray="5 5" />
                    <XAxis dataKey="hora" stroke="rgb(var(--primary-color))" tick={<CustomizedXAxisTick />} />
                    <YAxis stroke="rgb(var(--primary-color))" tick={<CustomizedYAxisTick />} tickMargin={9}
                        tickSize={0} domain={forecastData ? ['dataMin - 2', 'dataMax + 2'] : [10, 22]} padding={{ bottom: 15 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="temp" stroke="#ffff" fill="url(#colorTemp)" dot={{ stroke: 'rgba(var(--primary-color), 0.8)', strokeWidth: 2, }} activeDot={{ stroke: 'rgba(var(--primary-color), 1)', fill: 'none', strokeWidth: 2 }}>
                        <LabelList dataKey="temp" position="top" fill="rgb(var(--tertiary-color))" offset={15} />
                    </Area>

                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const hora = (value: number) => {
            if (value <= 12) {
                return `${value} a.m`
            } else {
                return `${value - 12} p.m`
            }
        }

        return (
            <div className={styles.tooltip}>
                <p className={styles.tooltip_hora}>{hora(parseInt(label))} :</p>
                <p className={styles.tooltip_temp}>{payload[0].value}º</p>
            </div>
        );
    }

    return null;
};

const CustomizedXAxisTick = ({ x, y, stroke, payload }: any) => {
    const hora = (value: number) => {
        if (value <= 12) {
            return `${value} a.m`
        } else {
            return `${value - 12} p.m`
        }
    }

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="rgb(var(--secondary-color))">
                {hora(payload.value)}
            </text>
        </g>
    );
}
const CustomizedYAxisTick = ({ x, y, stroke, payload }: any) => {

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="rgb(var(--secondary-color))">
                {payload.value}
            </text>
        </g>
    );
}
