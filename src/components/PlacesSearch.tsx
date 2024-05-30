
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import styles from './css/PlacesSearch.module.css';
import { useState, useContext, useEffect, ReactNode, Key } from "react";
import { SearchPlacesContext, PlacesContext } from "@/context";
import { getPlaceList } from "@/helpers";
import { Place } from "@/interfaces";

export const SearchPlaces = () => {

    const [search, setSearch] = useState('')
    const { isLoading, placeList, setPlaceList } = useContext(SearchPlacesContext)
    const { setCustomLocation } = useContext(PlacesContext);

    const onInputChange = (value: string) => {
        setSearch(value)
    }

    const onSelectionChange = (id: any) => {
        const selectedPlace = placeList?.find(place => place.id == id)
        if (selectedPlace) {
            setCustomLocation(selectedPlace.coords);

        } else {
            console.error('No se encontró el lugar seleccionado');
        }

    }

    useEffect(() => {
        if (search.length > 0) {
            getPlaceList(search)
                .then((data: [Place] | undefined) => setPlaceList(data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <div>
            <Autocomplete label="Busca una ciudad" variant="underlined" className={styles.location_browser}
                size="sm" radius="md" labelPlacement="outside" inputValue={search} defaultItems={[]} items={placeList}
                onInputChange={onInputChange} onSelectionChange={onSelectionChange}
                listboxProps={{
                    hideSelectedIcon: true,
                    itemClasses: {
                        base: [
                            "rounded-medium",
                            "bg-slate-700/60",
                            "transition-all",
                            "data-[hover=true]:text-gray-200",
                            "data-[hover=true]:bg-slate-700/75",
                            "data-[pressed=true]:opacity-70",
                            "data-[selectable=true]:focus:bg-slate-900/80",
                            "data-[selectable=true]:focus:text-gray-100",
                            "data-[focus-visible=true]:ring-slate-500",
                        ],
                        title: [
                            "text-gray-300",
                        ],
                        description: [
                            "text-slate-400",

                        ],
                        wrapper: [

                        ]
                    },
                }}
                popoverProps={{
                    offset: 10,
                    classNames: {
                        base: "rounded-large",
                        content: "p-1 border-small border-default-100 bg-black/20 shadow-lg border-none",
                        backdrop: "blur",

                    },
                }}
            >


                {(place => <AutocompleteItem key={place.id} description={`${place.country}, ${place.state}`}
                >{place.name}</AutocompleteItem>)}
            </ Autocomplete >
        </div >
    )
}

const InputLabel = () => {
    return (
        <p className={styles.input_label}>Selecciona una ciudad</p>
    )
}

