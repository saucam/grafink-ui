import React from 'react';
import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const initialData = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [
        { source: "Harry", target: "Sally" },
        { source: "Harry", target: "Alice" },
    ],
  };

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
  };

const getAsyncGraphData = () =>
  new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { graph: initialData } }),
      2000
    )
  );

function GraphData() {
  const [data, setData] = React.useState(initialData);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAsyncGraphData().then(result => {
      setData(result.data.graph);
      setIsLoading(false);
    });
  }, []);

  return <Graph
  id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
  data={data}
  config={myConfig}
  />;
}

export default GraphData;
