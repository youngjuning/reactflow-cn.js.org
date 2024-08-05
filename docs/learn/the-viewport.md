---
order: 4
title: 平移和缩放
description: React Flow 中文文档 - React Flow 的默认平移和缩放行为受到了滑动地图的启发。你可以通过拖动来平移，通过滚动来缩放。你可以使用所提供的 props 轻松定制这种行为。
keywords: [React Flow, React, Node, Edge, 'React Flow 中文文档']
group:
  title: 概念
  order: 1
---

React Flow 的默认平移和缩放行为受到了滑动地图的启发。你可以通过拖动来平移，通过滚动来缩放。你可以使用所提供的 props 轻松定制这种行为。

- `panOnDrag`：默认值：true
- `selectionOnDrag`：默认值：false（自 11.4.0 起可用）
- `panOnScroll`：默认值：false（覆盖 `zoomOnScroll`）
- `panOnScrollSpeed`：默认值：`0.5`
- `panOnScrollMode`：默认值：`"free"`。`free`（所有方向）、`"vertical"`（仅垂直）或 `"horizontal"`（仅水平）
- `zoomOnScroll`：默认值：`true`
- `zoomOnPinch`：默认值：`true`
- `zoomOnDoubleClick`：默认值：`true`
- `preventScrolling`：默认值：true（阻止浏览器滚动行为）
- `zoomActivationKeyCode`：默认值：`"Meta"`
- `panActivationKeyCode`：默认值：`"Space"`（自 11.4.0 起可用）

## 默认视图控制

如上所述，默认控制方式为：

- pan（平移）：拖动鼠标
- zoom（缩放）：滚动
- 创建选区：Shift + 拖动

```tsx
import { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 150, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 0, y: 150 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 300, y: 150 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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

## 类似 Figma 的视口控件

如果你更喜欢 figma/sketch/design 工具控件，可以设置 `panOnScroll={true}` 和 `selectionOnDrag={true}`：

- pan（平移）：Space + 拖动鼠标、滚动、鼠标中键或右键
- zoom（缩放）：俯仰或 cmd + 滚动
- 创建选区：拖动鼠标

```tsx
import { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  SelectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 150, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 0, y: 150 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 300, y: 150 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];

const panOnDrag = [1, 2];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
        panOnScroll
        selectionOnDrag
        panOnDrag={panOnDrag}
        selectionMode={SelectionMode.Partial}
      />
    </div>
  );
}

export default Flow;
```

在此示例中，我们还设置了 `selectionMode={SelectionMode.Partial}`，以便将仅部分选中的节点添加到选区中。
