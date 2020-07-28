import React from 'react';

export function send_to_server(gremlin_query, address, callback) {   
    const server_url = `https://${address.host}:${address.port}`;
    fetch(server_url, {
        method: 'post',
        body: JSON.stringify("{ \"gremlin\": \" " + gremlin_query + "\" }")
    }).then(function(response) {
        console.log(response)
    });    
}