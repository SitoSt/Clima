'use client';
import { CurrentDataProvider, ForecastDataProvider, PlacesProvider } from '@/context';
import { HomeScreen } from '@/screens';

export default function Home() {
    return (
        <main>
            <PlacesProvider>
                <CurrentDataProvider>
                    <ForecastDataProvider>
                        <HomeScreen />
                    </ForecastDataProvider>
                </CurrentDataProvider>
            </PlacesProvider>
        </main>
    );
}