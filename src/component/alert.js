import {useState} from "react";
import SayHello from "./hello";

function ShowAlert() {
    const [state,setState] = useState({display : true})
    const deleteAlert = () => {
      setState({display: false})
    }
    let comp;
    if (state.display){
        comp = <SayHello/>
    }
    return(
        <div style={{ textAlign: 'center' }}>
            {comp}
            <button onClick={deleteAlert}>
                Delete the component
            </button>
        </div>
    )
}

export default ShowAlert