import "./App.scss"
import * as json from './Data.json';
import List from "./components/list"
import {useReducer} from "react";
import {ListProvider} from "./providers/list.provider";
import listReducer from "./reducers/list.reducer";


const App = () => {

    const data = json.default;

    const initialState = {};

    const createInitialState = (obj) => {
        if (obj.content) {
            initialState[obj.id] = {type: obj.type, open: false};
            obj.content.map(createInitialState);
        }
    }

    createInitialState(data);

    const [state, dispatch] = useReducer(listReducer, initialState);


    return (
        <ListProvider value={{state, dispatch}}>
            <List title={data.title} subtitle={data.subtitle} content={data.content} type={data.type}
                  id={data.id}/>
        </ListProvider>


    )
}

export default App;
