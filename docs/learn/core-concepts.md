---
order: 3
title: 核心概念
description: React Flow 中文文档 - 在下面的部分中，我们将向你介绍 React Flow 的核心概念，并解释如何创建交互式流程。流程由节点和边（或仅节点）组成。
keywords: [React Flow, React, Node, Edge, 'React Flow 中文文档']
group:
  title: 概念
  order: 1
---

# 核心概念

在下面的部分中，我们将向你介绍 React Flow 的核心概念，并解释如何创建交互式流程。一个流程由节点和边（或仅节点）组成。你可以将节点和边的数组作为 props 传递给 React Flow 组件。因此，所有节点和边的 id 都必须是唯一的。节点需要一个位置和一个标签（如果使用[自定义节点](#)，位置和标签可能会有所不同），边需要一个源（节点 id）和一个目标（节点 id）。你可以在 [节点配置](#) 和 [边配置](#) 部分了解更多有关配置的信息。

## 受控或不受控

使用 React Flow，你有两种方法来设置流程。你可以创建受控流程或[不受控流程](#)。我们建议使用受控流程，但对于更简单的用例，你也可以设置非受控流。下面我们将设置一个受控流程。首先，让我们为 ReactFlow 组件添加一些节点和边：

> React Flow 组件的尺寸取决于父级组件的尺寸。这意味着父级组件需要一定的宽度和高度才能正确呈现 React Flow。

```tsx
import { useState } from 'react';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}

export default Flow;
```

## 基本功能

默认情况下，除了在设置受控流程时处理视口外，React Flow 不会进行任何内部状态更新。与 `<input />` 组件一样，你需要传递处理程序，以便将 React Flow 触发的更改应用到节点和边。要选择、拖动和移除节点和边，需要实现 `onNodesChange` 和 `onEdgesChange` 处理程序：

```tsx
import { useCallback, useState } from 'react';
import { ReactFlow, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      />
    </div>
  );
}

export default Flow;
```

这里发生了什么？ 每当 React Flow 触发变化（节点启动、节点拖动、边选择等）时，`onNodesChange` 处理程序就会被调用。我们导出了一个 `applyNodeChanges` 处理程序，这样你就不需要自己处理变化。`applyNodeChanges` 处理程序会返回一个更新后的节点数组，即新的节点数组。 现在，你有了一个交互式流程，可以进行以下几种交互：

- 可选择的节点和边
- 可拖动的节点
- 可移除的节点和边 -（按下 Backspace 键可移除选中的节点或边，可使用 `deleteKeyCode` props 进行调整）
- 按 `Shift` 键可多选区（这是默认的 `selectionKeyCode`）
- 按 `Command` 可多选（这是默认的 `multiSelectionKeyCode`）

为方便使用，我们导出了辅助钩子 useNodesState 和 useEdgesState，您可以用它们来创建节点和边状态：

```tsx | pure
const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
```

## 连接节点

要获得完整的交互性，还缺少的最后一个部分就是 `onConnect` 处理程序。你需要实现它，以便处理新连接。

```tsx
import { useCallback, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}

export default Flow;
```

在本示例中，我们使用 `addEdge` 处理程序，它将返回一个包含新创建边的边数组。如果想在创建边时设置某个边配置，可以像这样传递配置：

```ts
const onConnect = useCallback(
  (connection) =>
    setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
  [setEdges],
);
```

或使用 `defaultEdgeOptions` 配置属性：

```tsx | pure
const defaultEdgeOptions = { animated: true };
...
<ReactFlow
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  defaultEdgeOptions={defaultEdgeOptions}
/>;
```
