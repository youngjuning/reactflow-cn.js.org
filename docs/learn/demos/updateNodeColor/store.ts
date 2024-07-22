import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';

import initialNodes from './nodes';
import initialEdges from './edges';
import { AppNode, AppState, ColorNode } from './types';

function isColorChooserNode(node: AppNode): node is ColorNode {
  return node.type === 'colorChooser';
}

// 这是我们的 useStore hook，我们可以在我们的组件中使用它来获取 store 并调用动作
const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
  updateNodeColor: (nodeId, color) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId && isColorChooserNode(node)) {
          // it's important to create a new object here, to inform React Flow about the cahnges
          return { ...node, data: { ...node.data, color } };
        }

        return node;
      }),
    });
  },
}));

export default useStore;
