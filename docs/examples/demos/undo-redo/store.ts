import { create, useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { temporal } from 'zundo';
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from '@xyflow/react';
import isDeepEqual from 'fast-deep-equal';
import initialNodes from './nodes';
import initialEdges from './edges';
import { shallow } from 'zustand/shallow';

export type AppNode = Node;

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  addNode: (node: AppNode) => void;
};

export const useTemporalStore = () => useStore(useFlowStore.temporal);

// 这是我们的 useStore hook，我们可以在我们的组件中使用它来获取 store 并调用动作
// 注意：immer 使用方式是 create()(immer(() => ({})))
const useFlowStore = create<AppState>()(
  immer(
    temporal(
      (set, get) => ({
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
        addNode: (node) => {
          set({
            nodes: [...get().nodes, node],
          });
        },
      }),
      {
        equality: (pastState, currentState) => {
          console.info('equality', pastState, currentState);
          return shallow(pastState, currentState);
        },
        // 偏函数
        partialize: (state) => {
          const { nodes, edges } = state;
          return {
            nodes,
            edges,
          };
        },
      },
    ),
  ),
);

export default useFlowStore;
