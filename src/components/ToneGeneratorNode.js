import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

const ToneGeneratorNode = ({ data }) => {
  return (
    <div style={{ backgroundColor: "white", border: "1px solid black", padding: "10px" }}>
      Sin Wave
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
      />
    </div>
  );
};

export default ToneGeneratorNode;