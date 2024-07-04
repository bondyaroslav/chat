import { createSlice } from '@reduxjs/toolkit'

interface InitialFBState {
    firebase: any
    auth: any
    firestore: any
}

const initialState: InitialFBState = {
    firebase: null,
    auth: null,
    firestore: null
}

const firebaseSlice = createSlice({
    name: 'firebase',
    initialState,
    reducers: {
        addFirebase(state, action) {
            state.firebase = action.payload
        },
        addAuth(state, action) {
            state.auth = action.payload
        },
        addFirestore(state, action) {
            state.firestore = action.payload
        }
    }
})

export const {
    addFirebase,
    addAuth,
    addFirestore
} = firebaseSlice.actions

export default firebaseSlice.reducer
