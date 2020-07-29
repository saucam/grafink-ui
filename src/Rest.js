import React from 'react';

export function send_to_server(gremlin_query, address, callback) { 
    const server_url = `http://${address.host}:${address.port}?ts=TestJanusGraph.traversal()`;
    (async () => {
        let response = await fetch(server_url, {
            method: 'post',
            accept: "application/json",
            body: JSON.stringify({"gremlin" : gremlin_query})
        });
        let result = await response.json();
        console.log(result);
    })();
    // fetch(server_url, {
    //     method: 'post',
    //     mode: 'no-cors',
    //     body: bodyString
    // }).then(function(response) {
    //     response.json()
    // }).then(function(data) {
    //     console.log(data)
    // });
}