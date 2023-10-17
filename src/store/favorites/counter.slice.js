import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        }
    }
})

// Экспорт действий для использования в компонентах
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Экспорт редуктора для использования в хранилище
export default counterSlice.reducer
