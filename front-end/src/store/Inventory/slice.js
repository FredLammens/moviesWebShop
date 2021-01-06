import { createSlice } from '@reduxjs/toolkit';

// DIT IS DE MANIER WAAROP WE STEEDS VANAF NU ONZE REDUCERS GAAN DEFINIEREN EN GEBRUIKEN

// Slices genereren automatisch een action creator, action types en een reducer
const inventorySlice = createSlice({
    // De naam van de slice, ook de prefix voor de gegenereerde action types
    // BVB. 'counter.increment' is een action type 
    name: 'inventory',
    // De initiële state van deze reducer
    initialState: [],
    // De reducers die de state zullen wijzigigen
    // OPGELET, hierbij wordt de state niet op een immutable manier aangepast en dit komt
    // omdat achter de schermen dit voor ons geregeld wordt zodat we hier geen rekenening 
    // mee moeten houden.
    // !! ENKEL BIJ createSlice mutable NOOIT op de oude manier !!
    reducers: {
        addToInventory: (state, action) => { state.push(action.payload)},
        removeFromInventory: (state, action) => { state.pop()}
    }
})


export const { actions, reducer } = inventorySlice;
export const { addToInventory, removeFromInventory } = actions;