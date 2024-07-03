import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import authReducer from "./reducers/authReducer"

const reducers = {
    auth: authReducer
}

const rootReducer = combineReducers({
    ...reducers
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
export default setupStore