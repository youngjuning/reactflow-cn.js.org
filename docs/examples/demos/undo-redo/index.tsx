import React from 'react';
import { Background, Controls, Panel, ReactFlow, ReactFlowProvider } from '@xyflow/react';
import { customAlphabet } from 'nanoid';
import { useShallow } from 'zustand/react/shallow';

import '@xyflow/react/dist/style.css';

import useStore, { useTemporalStore } from './store';

const uuid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 16); //=> "4f90d13a42"
uuid()

const getRandomPosition = (existingNodes) => {
  const canvasWidth = 500; // 减去边距
  const canvasHeight = 500; // 减去边距
  let newPosition;

  do {
    newPosition = {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
    };
  } while (isPositionOccupied(newPosition, existingNodes));

  return newPosition;
};

const isPositionOccupied = (position, nodes) => {
  const nodeSize = 100; // 假定每个节点的尺寸为100px x 100px
  return nodes.some(node => {
    const dx = position.x - node.position.x;
    const dy = position.y - node.position.y;
    return dx * dx + dy * dy < (nodeSize / 2) ** 2;
  });
};

const UndoRedoFlow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } = useStore(
    useShallow((state) => ({
      nodes: state.nodes,
      edges: state.edges,
      addNode: state.addNode,
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
      onConnect: state.onConnect,
    })),
  );

  const { undo, redo } = useTemporalStore();

  const handleAddNode = (evt) => {
    addNode({
      id: uuid(),
      data: { label: 'new node' },
      position: getRandomPosition(nodes),
    });
  }

  return (
    <div className="app" style={{width: '1000px', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Panel position='top-right'>
          <button onClick={() => undo()}>撤销</button>
          <button onClick={() => redo()}>重做</button>
        </Panel>
        <Controls orientation='horizontal' position='top-left' />
        <Panel position='bottom-right'>
          <button onClick={handleAddNode}>添加元素</button>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default () => {
  return (
    <ReactFlowProvider>
      <UndoRedoFlow />
    </ReactFlowProvider>
  );
};
