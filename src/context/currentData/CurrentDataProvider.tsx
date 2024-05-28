import { CurrentDataState, CurrentData } from "@/interfaces";
import { useReducer } from "react";
import { CurrentDataContext } from "./CurrentDataContext";
import { currentDataReducer } from "./currentDataReducer";

const INITIAL_STATE: CurrentDataState = {
    isCurrentReady: false,
    currentData: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const CurrentDataProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(currentDataReducer, INITIAL_STATE);

    const setCurrentData = (data: CurrentData | undefined) => {
        dispatch({ type: 'setCurrent', payload: data })
    }

    return (
        <CurrentDataContext.Provider value={{
            ...state,

            setCurrentData,
        }}>
            {children}
        </CurrentDataContext.Provider>
    )
}