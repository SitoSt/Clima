import { createContext } from "react";
import { CurrentData } from "@/interfaces";

interface CurrentContextProps {
    isCurrentReady: boolean;
    currentData?: CurrentData;

    setCurrentData: (data: CurrentData | undefined) => void
}

export const CurrentDataContext = createContext({} as CurrentContextProps);