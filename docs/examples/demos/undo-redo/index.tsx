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
  const { addNodes, addEdges, fitView, updateEdge } = useReactFlow();
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

  const { undo, redo, record } = useUndoRedo();

  const handleAddNode = (evt) => {
    const newNode = {
      id: uuid(),
      data: { label: 'new node' },
      position: {
        x: 0,
        y: 0,
      },
    }
    record(() => {
      addNodes(newNode);
      addEdges({
        id: uuid(),
        source: '1',
        target: newNode.id,
      })
    })
  };

  const handleInsertNode = () => {
    const newNode = {
      id: uuid(),
      data: { label: 'new node' },
      position: {
        x: 0,
        y: 0,
      },
    }
    record(() => {
      addNodes(newNode);
      addEdges({
        id: uuid(),
        source: '2',
        target: newNode.id,
      });
      const targetEdge = edges.find(edge => edge.source === '2');
      updateEdge(targetEdge?.id as string, {
        source: newNode.id,
      });
    })
  };

  const onLayout = React.useCallback(
    (direction) => {
      const layouted = getLayoutedElements(nodes, edges, { direction });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);
      // Maybe setTimeout(() => fitView(), 100)
      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges],
  );

  React.useEffect(() => {
    if (nodesInitialized && nodes.length) {
      onLayout('LR');
    }
  }, [nodesInitialized, nodes.length]);

  return (
    <div className="app" style={{ height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) => {
          changes.forEach(change => {
            if (change.type === 'dimensions') {
              onNodesChange([change]);
            } else {
              record(() => {
                onNodesChange([change]);
              })
            }
          })
        }}
        onEdgesChange={onEdgesChange}
        nodesDraggable={false}
        defaultEdgeOptions={{
          animated: true,
          type: ConnectionLineType.SmoothStep,
        }}
        fitView
      >
        <Background />
        <Panel position="top-right">
          <button onClick={() => undo()}>撤销</button>
          <button onClick={() => redo()}>重做</button>
        </Panel>
        <Controls orientation="horizontal" position="top-left" />
        <Panel position="bottom-left">
          <button onClick={handleAddNode}>添加元素</button>
          <button onClick={handleInsertNode}>插入元素</button>
        </Panel>
        <Panel position="bottom-right">
          <button onClick={() => onLayout('LR')}>水平布局</button>
          <button onClick={() => onLayout('TB')}>垂直布局</button>
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
