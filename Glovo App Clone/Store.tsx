import storage from "@react-native-async-storage/async-storage"
import { version } from "react"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import CartReducer from "./Src/Redux/CartReducer"
import { configureStore } from "@reduxjs/toolkit"
import persistStore from "redux-persist/es/persistStore"




const persistConfig = {
    key:"root",
    storage,
    version:1
    
}

const persistedReducer = persistReducer(persistConfig, CartReducer)

export const store = configureStore({
    reducer:{
        cart: persistedReducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })

})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>