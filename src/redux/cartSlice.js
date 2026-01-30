import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState: savedCart,
    reducers: {
        AddItem: (state, action) => {
            let existItem = state.find(
                item => item.id === action.payload.id
            );

            if (existItem) {
                state.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.qty += 1;
                    }
                });
            } else {
                state.push(action.payload);
            }

            localStorage.setItem("cart", JSON.stringify(state));
        },

        RemoveItem: (state, action) => {
            const updated = state.filter(
                item => item.id !== action.payload
            );

            localStorage.setItem("cart", JSON.stringify(updated));
            return updated;
        },

        IncrementQty: (state, action) => {
            state.forEach(item => {
                if (item.id === action.payload) {
                    item.qty += 1;
                }
            });

            localStorage.setItem("cart", JSON.stringify(state));
        },

        DecrementQty: (state, action) => {
            state.forEach(item => {
                if (item.id === action.payload && item.qty > 1) {
                    item.qty -= 1;
                }
            });

            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const {
    AddItem,
    RemoveItem,
    IncrementQty,
    DecrementQty
} = cartSlice.actions;

export default cartSlice.reducer;
