import React, {useContext} from 'react';
import {Context} from './Store'
import {get_graph_info} from './GraphInfoBox'

const DBBar = () => {
    const [state, dispatch] = useContext(Context);

    const handleGraphInfo = event => {
        console.log(state.address);
        get_graph_info(state.address);
        // setGraphInfo();
      }

    const handleAddressChange = event => {
        const v = event.target.value;
        const address = {...state.address, [event.target.name]: v}
        dispatch({ type: 'SET_ADDRESS', payload: address})
        // setAddress();
      };

      return (
        <div className="inputs_container_top">
            <div className="input_container">
                <label htmlFor="server_address">Server Address:</label>
                <input name="host" type="text" onChange={handleAddressChange} value={state.address.host} />
            </div>
            <div className="input_container">
            <label htmlFor="server_port">Server Port:</label>
                <input name="port" type="text" onChange={handleAddressChange} value={state.address.port} />
            </div>
            <div className="input_unit_container">
				<button onClick={handleGraphInfo} > Get Graph Info </button>
			</div>
    </div>
    ); 
      }

export default DBBar;