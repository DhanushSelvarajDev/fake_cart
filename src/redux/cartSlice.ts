import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const { id, title, price, image } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id,
                    title,
                    price,
                    image,
                    quantity: 1,
                });
            }

            state.totalQuantity += 1;
            state.totalAmount += price;
        },

        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);

            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                state.totalQuantity -= item.quantity;
                state.totalAmount -= item.price * item.quantity;
                state.items.splice(itemIndex, 1);
            }
        },

        increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);

            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalAmount += item.price;
            }
        },

        decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.totalQuantity -= 1;
                    state.totalAmount -= item.price;
                } else {
                    state.totalQuantity -= 1;
                    state.totalAmount -= item.price;
                    state.items = state.items.filter((i) => i.id !== id);
                }
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },

        setCart: (_, action: PayloadAction<CartState>) => {
            return action.payload;
        },
    },
});

export const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
