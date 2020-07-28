import React from 'react';

export function send_to_server(gremlin_query, address, callback) { 
    const server_url = `http://${address.host}:${address.port}`;
    const bodyString = "{ \"gremlin\": \"" + gremlin_query + "\" }";
    console.log(bodyString)
    fetch(server_url, {
        method: 'post',
        mode: 'no-cors',
        body: bodyString
    }).then(function(response) {
        console.log(response)
    }); 
}