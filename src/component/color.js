import {useState} from "react";
import TypeButton from "./button";

function TypeColor() {
    const [state,setState] = useState({color:'blue'})
    setTimeout(()  => {
        setState({color: 'green'});
    },1000
    )

    return(
        <div>
            <div
                style={{
                    backgroundColor: state.color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: 'auto'
                }}
            >
                <TypeButton/>

            </div>
        </div>
    )
}
export default TypeColor