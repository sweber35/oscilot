import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow from 'react-flow-renderer';
import ToneGeneratorNode from './ToneGeneratorNode';

const nodeTypes = {

  toneGenerator: ToneGeneratorNode

};

const PatchBoardFlow = () => {

  const [ reactflowInstance, setReactflowInstance ] = useState( null );
  const [ elements, setElements ] = useState( [ ] );

  useEffect( () => {

    setElements([
      { id: '1', type: 'toneGenerator', data: { label: 'Node 1' }, position: { x: 0, y: 5 } },
      // you can also pass a React Node as a label
      { id: '2', data: { label: <div>Oscilloscope</div> }, position: { x: 100, y: 100 } },
      { id: 'e1-2', source: '1', target: '2', animated: true }
    ])
  }, [ ] );

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log('flow loaded:', rfi);
      }
    },
    [ reactflowInstance ]
  );


  return (
    <div className="App" style={{ height: 600 }}>
      <ReactFlow
        elements={ elements } 
        onLoad={ onLoad }
        nodeTypes={ nodeTypes } />
    </div>
  );

};

export default PatchBoardFlow;

