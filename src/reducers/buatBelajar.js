import { legacy_createStore as createStore} from 'redux'

// action = mendeskripsikan apa yg ingin kita lakukan
// action ini meng return objek yang nantinya akan diambil isinya.
const increment = () => {
    return {
        type: "INCREMENT"
    }
}
const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

// reducer = ketika action di panggil, 
// reducer ini akan menentukan apa yg dipanggil dan apa yg ingin dilakukan
const counter = (state= 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT" :
            return state - 1
            
    }
}
let store = createStore(counter);

// display it in console
store.subscribe(()=> console.log(store.getState()));

// dispatch = mengeksekusi action ke reducer, then reducer akan cek apa yg dipanggil dan apa yg akan dilakukan, so the store will get updated
store.dispatch(increment());