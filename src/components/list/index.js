import Field from "../field";
import {useContext} from "react";
import {ContentListContext} from "../../providers/list.provider";


const List = ({title, subtitle, type, content, id}) => {

    const {state, dispatch} = useContext(ContentListContext);
    const isOpen = state[id].open;

    return (
        <div className="list">
            <div className="list__header">
                <input checked={state[id].open} type={type} onChange={() => {
                    dispatch({type: "toogle", payload: {open: !state[id].open, id}})
                }}/>
                <Field title={title} subtitle={subtitle}/>
            </div>
            {isOpen &&
            <ul className="list__container">
                {
                    content.map(({title, subtitle, type, content, id}) => {

                        if (type) {
                            return <List key={title} title={title} subtitle={subtitle}
                                         type={type}
                                         content={content} id={id}/>

                        } else {
                            return <Field title={title} subtitle={subtitle}/>
                        }
                    })
                }
            </ul>
            }

        </div>
    )
}
export default List;