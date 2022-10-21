import { createStore } from "redux"
import persistStore from "redux-persist/es/persistStore"
import rootReducer from "./store/reducers/rootReducer"

const reduxStore = () => {
    const store = createStore(rootReducer)
    const persistor = persistStore(store)

    return { store, persistor }
}

export default reduxStore