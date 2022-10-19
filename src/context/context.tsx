import { createContext, useContext } from "react";

interface AppContextInterface {
    name: string
}

const AppCtx = createContext<AppContextInterface | null>(null);

// Provider in your app

export const useAuth = () => {
    const boxContext = useContext(AppCtx);
    return boxContext;
};

const user: AppContextInterface = {
    name: 'Mateo'
};

export const App = () => (

    <AppCtx.Provider value={user}>...</AppCtx.Provider>
);