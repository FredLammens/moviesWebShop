import { throttle } from 'lodash';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import { reducer as inventoryReducer } from './Inventory/slice';


// Aanmaken van een store met een root reducer al in 
// We kunnen ook gebruik maken van meerdere reducers, 
// dan kunnen we gebruik maken van de combineReducers methode
 const rootReducer = combineReducers({
    inventory: inventoryReducer
    // ...: ...
 });

 // De state uit de localStorage laden om daarachter aan de store te kunnen meegeven
 const loadedStateFromLocalStorage = loadState();

// Dit gaat onze store configuren met verschillen properties in het 
// configuratie object dat we meegeven als argument
export const store = configureStore({ 
    // De root reducer die we meegeven in onze store, dit kunnen zoals
    // in dit geval meerdere zijn die gecombineerd zijn met combineReducers
    reducer: rootReducer,
        // De preloaded state is de initiële state die we meegeven aan onze store
    // in dit geval is dit de state vanuit de localStorage die we meegeven als initiële state
    preloadedState: loadedStateFromLocalStorage,
});
//saven van state naar localsotrage via throttle om de seconde ( volledige state)
store.subscribe(throttle(() => {
    saveState(store.getState());
    }, 1000) );