import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  ReactFlow,
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  BuiltInNode,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import useStore from './store';
import ColorChooserNode from './ColorChooserNode';

export type ColorNode = Node<
  {
    color: string;
  },
  'colorChooser'
>;

export type AppNode = ColorNode | BuiltInNode;

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeColor: (nodeId: string, color: string) => void;
};

const nodeTypes = { colorChooser: ColorChooserNode };

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector),
  );

  return (
    <div style={{ height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}

export default Flow;
