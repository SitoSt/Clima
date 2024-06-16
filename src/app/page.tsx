'use client';
import { CurrentDataProvider, ForecastDataProvider, PlacesProvider } from '@/context';
import { HomeScreen } from '@/screens';

export default function Home() {
    return (
        <div>
            <PlacesProvider>
                <CurrentDataProvider>
                    <ForecastDataProvider>
                        <main className='dark text-foreground bg-background'>
                            <HomeScreen />

                        </main>
                    </ForecastDataProvider>
                </CurrentDataProvider>
            </PlacesProvider>
        </div>
    );
}