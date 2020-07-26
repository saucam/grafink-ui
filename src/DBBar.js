import React from 'react';

const DBBar = ({ onAddressChange, getGraphInfo, address }) =>  
      (
        <div className="inputs_container_top">
            <div className="input_container">
                <label htmlFor="server_address">Server Address:</label>
                <input name="host" type="text" onChange={onAddressChange} value={address.host} />
            </div>
            <div className="input_container">
            <label htmlFor="server_port">Server Port:</label>
                <input name="port" type="text" onChange={onAddressChange} value={address.port} />
            </div>
            <div className="input_unit_container">
				<button onClick={getGraphInfo} > Get Graph Info </button>
			</div>
    </div>
    ); 

export default DBBar;