import React, { Component } from "react";
import ReactDOM from "react-dom";
import { send_to_server } from './Rest'

const traversal_source = 'g'
const limit_graphinfo_request = 100

export function get_graph_info(address){
    var gremlin_query_nodes = "nodes = " + traversal_source + ".V().limit(" + limit_graphinfo_request + ").groupCount().by(label);"
    var gremlin_query_edges = "edges = " + traversal_source + ".E().limit(" + limit_graphinfo_request + ").groupCount().by(label);"
    var gremlin_query_nodes_prop = "nodesprop = " + traversal_source + ".V().limit(" + limit_graphinfo_request + ").valueMap().select(keys).groupCount();"
    var gremlin_query_edges_prop = "edgesprop = " + traversal_source + ".E().limit(" + limit_graphinfo_request + ").valueMap().select(keys).groupCount();"

    // while busy, show we're doing something in the messageArea.
    console.log("loading")
    var message = ""
                var node_label_query = gremlin_query_nodes;
                var edge_label_query = gremlin_query_edges;
                var node_prop_query = gremlin_query_nodes_prop;
                var edge_prop_query = gremlin_query_edges_prop;
                send_to_server(node_label_query, address, function(nodeLabels){
                   send_to_server(edge_label_query, address, function(edgeLabels){
                       send_to_server(node_prop_query, address, function(nodeProps){
                           send_to_server(edge_prop_query, address, function(edgeProps){
                               var combinedData = [nodeLabels, nodeProps, edgeLabels, edgeProps];
                               console.log("Combined data", combinedData);
                               // handle_server_answer(combinedData,'graphInfo',null,message);
                           });
                       });
                   });
                });
           
}

const initGraphInfo = {
    "labels": ["vertex"],
    "": []
}

function GraphInfoBox(props) {
    const [graphInfo, setGraphInfo] = React.useState({ info: {}, isFetching: false });

    return (
        <div className="aside left_bar" style="background-color:transparent;pointer-events:auto;">
					<div  id="graphInfoBar" style="background-color:transparent;pointer-events:auto;">
					</div>
					<div  id="graphInfo" style="background-color:transparent;pointer-events:none;">	
					  <h2>Graph Info</ h2>
                      <table id="tableGraph">
                        <thead>
                            <tr>
                                <th>Value</th>
                                <th>Property</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                            <td>Node labels</td>
                            <td>{graphInfo.info}</td> 
                            </tr>
                        </tbody>
                      </ table>
                    </div>
		</div>   
    );
}