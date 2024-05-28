import { CurrentDataState, CurrentData } from "@/interfaces";


type CurrentDataAction = { type: 'setCurrent', payload: CurrentData | undefined };

export const currentDataReducer = (state: CurrentDataState, action: CurrentDataAction): CurrentDataState => {
    switch (action.type) {

        case 'setCurrent':
            return {
                ...state,
                isCurrentReady: true,
                currentData: action.payload
            }
        default:
            return state;
    }
}