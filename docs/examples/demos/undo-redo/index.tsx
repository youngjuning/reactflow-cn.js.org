import React from 'react';
import {
  Background,
  ConnectionLineType,
  Controls,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  useNodesInitialized,
  useReactFlow,
} from '@xyflow/react';
import { customAlphabet } from 'nanoid';

import { useShallow } from 'zustand/react/shallow';

import '@xyflow/react/dist/style.css';

import useStore, { useUndoRedo } from './store';
import { getLayoutedElements } from './getLayoutedElements';

const uuid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 16); //=> "4f90d13a42"
uuid();

const UndoRedoFlow = () => {
  const nodesInitialized = useNodesInitialized();
  const { fitView, updateEdge, toObject, addNodes, addEdges } = useReactFlow();

  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setNodes,
    setEdges,
  } = useStore(
    useShallow((state) => ({
      nodes: state.nodes,
      edges: state.edges,
      setNodes: state.setNodes,
      setEdges: state.setEdges,
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
    })),
  );

  const { undo, redo, record } = useUndoRedo(false);

  const handleAddNode = () => {
    const newNode = {
      id: uuid(),
      data: { label: 'new node' },
      position: {
        x: 0,
        y: 0,
      },
    };
    record(() => {
      addNodes(newNode);
      addEdges({
        id: uuid(),
        source: '1',
        target: newNode.id,
      });
    });
  };

  const handleInsertNode = () => {
    const newNode = {
      id: uuid(),
      data: { label: 'new node' },
      position: {
        x: 0,
        y: 0,
      },
    };
    record(() => {
      addNodes(newNode);
      addEdges({
        id: uuid(),
        source: '2',
        target: newNode.id,
      });
      const targetEdge = edges.find((edge) => edge.source === '2');
      updateEdge(targetEdge?.id as string, {
        source: newNode.id,
      });
    });
  };

  const onLayout = React.useCallback(
    (direction: 'LR' | 'TB') => {
      const layouted = getLayoutedElements(nodes, edges, { direction });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);
      setTimeout(() => fitView());
    },
    [nodes, edges],
  );

  React.useEffect(() => {
    if (nodesInitialized && nodes.length) {
      onLayout('LR');
    }
  }, [nodesInitialized, nodes.length]);

  return (
    <div
      className="app"
      style={{ height: '500px', border: '1px solid #ddd', borderRadius: '8px' }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) => {
          const recordTypes = new Set(['add', 'remove']);
          changes.forEach((change) => {
            if (recordTypes.has(change.type)) {
              record(() => {
                onNodesChange([change]);
              });
            } else {
              onNodesChange([change]);
            }
          });
        }}
        onEdgesChange={(changes) => {
          const recordTypes = new Set(['add', 'remove']);
          changes.forEach((change) => {
            if (recordTypes.has(change.type)) {
              record(() => {
                onEdgesChange([change]);
              });
            } else {
              onEdgesChange([change]);
            }
          });
        }}
        nodesDraggable={false}
        defaultEdgeOptions={{
          animated: true,
          type: ConnectionLineType.SmoothStep,
        }}
        proOptions={{ hideAttribution: true }}
        fitView
      >
        <Background />
        <Panel position="top-right">
          <button onClick={() => undo()}>撤销</button>
          <button onClick={() => redo()}>重做</button>
        </Panel>
        <Controls orientation="horizontal" position="top-left" />
        <Panel position="bottom-left">
          <button
            onClick={() => {
              console.info(toObject());
            }}
          >
            打印数据
          </button>
        </Panel>
        <Panel position="bottom-right">
          <button onClick={handleAddNode}>添加元素</button>
          <button onClick={handleInsertNode}>插入元素</button>
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
