import { configureStore } from '@reduxjs/toolkit'
import firebaseReducer from './reducers/firebaseReducer'

const store = configureStore({
    reducer: {
        firebase: firebaseReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store