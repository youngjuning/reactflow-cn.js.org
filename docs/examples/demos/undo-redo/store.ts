import { create } from 'zustand';
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
import initialNodes from './nodes';
import initialEdges from './edges';
import _ from "lodash";

export type AppNode = Node;

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
};

// 这是我们的 useStore hook，我们可以在我们的组件中使用它来获取 store 并调用动作
// 注意：immer 使用方式是 create()(immer(() => ({})))
const useStore = create<AppState>()(
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
        }
      }),
      {
        // 偏函数
        partialize: (state) => {
          const { nodes, edges } = state;
          return {
            edges,
            nodes,
          };
        },
      },
    ),
  ),
);


export const useUndoRedo = () => {
  const temporalStore = useStore.temporal.getState();
  if (temporalStore.isTracking) {
    // 暂停时间旅行机器，
    temporalStore.pause();
  }

  return {
    ...temporalStore,
    record: (callback: () => void) => {
      temporalStore.resume();
      callback();
      temporalStore.pause();
    }
  }
};

export default useStore;
