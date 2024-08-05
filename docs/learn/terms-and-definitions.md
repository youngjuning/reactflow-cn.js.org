---
order: 2
title: 术语和定义
description: React Flow 中文文档 - 在这部分文档中，我们将解释一些基本的 React Flow 术语和定义。React Flow 中会经常用到的三个东西是节点、边和连接桩。
keywords: [React Flow, React, Node, Edge, Handle, 'React Flow 中文文档']
group:
  title: 概念
  order: 3
---

在这部分文档中，我们将解释一些基本的 React Flow 术语和定义。React Flow 中会经常用到的三个东西是节点、边和连接桩。

## 节点（Nodes）

```tsx
/**
 * inline: true
 */
import React from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'This is a node' },
    style: { borderWidth: 2 },
  },
];

function Flow() {
  return (
    <div
      style={{
        height: 250,
        background: '#FAF5FF',
        border: '1px solid #333',
        marginBottom: 20,
      }}
    >
      <ReactFlow defaultNodes={initialNodes} fitView preventScrolling={false} />
    </div>
  );
}

export default Flow;
```

React Flow 中的节点是一个 React 组件。 这意味着它可以呈现任何你喜欢的内容。 每个节点都有一个 `x` 坐标和 `y` 坐标，这两个坐标可以告诉它在视口中的位置。 默认情况下，节点的外观如上例所示。 你可以在 [节点选项](https://reactflow.dev/api-reference/types/node) 文档中找到自定义节点的所有选项。

### 自定义节点（Custom Node）

这就是 React Flow 的神奇之处。你可以根据自己的喜好自定义节点的外观和行为。你可能创建的许多功能都不是 React Flow 内置的。你可以使用自定义节点完成以下工作：

- 渲染表单元素
- 可视化数据
- 支持多个连接桩

有关详细信息，请参阅[自定义节点](#)文档。

## 连接桩（Handles）

```tsx
/**
 * inline: true
 */
import React from 'react';
import { ReactFlow, ReactFlowProvider, Handle, Position } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: {},
    type: 'handles',
  },
];

const handleWidth = 12;
const handleStyle = {
  width: handleWidth,
  height: handleWidth,
  borderRadius: 4,
};

const nodeStyle = {
  background: 'white',
  border: '1px solid #bbb',
  padding: 12,
  width: 300,
  borderRadius: 2,
  textAlign: 'center',
  height: 50,
  boxShadow: 'none',
  boxSizing: 'border-box',
};

const CustomNode = ({ data }) => {
  return (
    <div style={nodeStyle}>
      <div>A node with four handles</div>
      <Handle
        position={Position.Top}
        style={{ ...handleStyle, top: -handleWidth / 2 }}
        id="a"
      />
      <Handle
        position={Position.Right}
        style={{ ...handleStyle, right: -handleWidth / 2 }}
        id="b"
      />
      <Handle
        position={Position.Bottom}
        style={{ ...handleStyle, bottom: -handleWidth / 2 }}
        id="c"
      />
      <Handle
        position={Position.Left}
        style={{ ...handleStyle, left: -handleWidth / 2 }}
        id="d"
      />
    </div>
  );
};

const nodeTypes = {
  handles: CustomNode,
};

const fitViewOptions = { padding: 1 };

function Flow() {
  return (
    <div
      style={{
        height: 250,
        background: '#FAF5FF',
        border: '1px solid #333',
        marginBottom: 20,
      }}
    >
      <ReactFlowProvider>
        <ReactFlow
          defaultNodes={initialNodes}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={fitViewOptions}
          preventScrolling={false}
        />
      </ReactFlowProvider>
    </div>
  );
}

export default Flow;
```

连接桩（在其他库中也称为 "端口"）是边连接到节点的位置。连接桩可以放置在任何地方，样式也可以随心所欲。它只是一个 `div` 元素。 默认情况下，它以灰色圆圈的形式出现在节点的顶部、底部、左侧或右侧。创建自定义节点时，可以根据需要在节点中添加任意数量的连接桩。更多信息请参阅[连接桩](#)文档。

## 边（Edges）

```tsx
/**
 * inline: true
 */
import React from 'react';
import { ReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Node 1' },
    style: { opacity: 0.5 },
    sourcePosition: 'right',
    targetPosition: 'left',
  },
  {
    id: '2',
    position: { x: 400, y: 100 },
    data: { label: 'Node 2' },
    style: { opacity: 0.5 },
    sourcePosition: 'right',
    targetPosition: 'left',
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'This is an edge',
    labelStyle: { fontSize: 20 },
    labelBgStyle: { fill: 'rgba(255,255,255,0.7)' },
    labelBgPadding: [20, 10],
    style: { stroke: '#222', strokeWidth: 2 },
  },
];

export default function App() {
  return (
    <div
      style={{
        height: '250px',
        background: '#FAF5FF',
        border: '1px solid #333',
        marginBottom: 20,
      }}
    >
      <ReactFlowProvider>
        <ReactFlow
          defaultNodes={initialNodes}
          defaultEdges={initialEdges}
          preventScrolling={false}
          fitView
        />
      </ReactFlowProvider>
    </div>
  );
}
```

### 自定义边（Custom Edges）

与自定义节点一样，你也可以自定义边。用户可以使用自定义边做以下事情：

- 添加一个按钮来移除边
- 自定义路由行为
- 无法仅用一个 SVG 路径来解决的复杂的样式或交互

你可以在[自定义边 api](#) 找到更多信息。

## 连接线

React Flow 内置了从一个连接桩点击并拖动到另一个连接桩以创建新边的功能。拖动时，占位边称为连接线。连接线内置四种类型，并且可以自定义。你可以在[props 部分](#) 找到配置连接线的 props。

## 视口（Viewport）

```tsx
/**
 * inline: true
 */
import React from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  ReactFlowProvider,
  useStore,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';

const selector = (s) => s.transform;

function ViewportInfo() {
  const [x, y, zoom] = useStore(selector);

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 14, fontWeight: 700 }}>
        Current Viewport: x: {x.toFixed(2)}, y: {y.toFixed(2)}, zoom:{' '}
        {zoom.toFixed(2)}{' '}
      </div>
    </div>
  );
}

const nodeStyle = {
  background: 'white',
  border: '1px solid #333',
  padding: 10,
  width: 100,
  textAlign: 'left',
  borderRadius: 2,
  boxShadow:
    'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
};

function XYNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div style={nodeStyle}>
      <div>x: {positionAbsoluteX.toFixed(2)}</div>
      <div>y: {positionAbsoluteY.toFixed(2)}</div>
    </div>
  );
}

const nodeTypes = {
  xy: XYNode,
};

const nodeDefaults = {
  type: 'xy',
  data: {},
};

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'This is a node' },
    style: { borderWidth: 2 },
  },
];

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    ...nodeDefaults,
  },
  {
    id: '2',
    position: { x: 250, y: 0 },
    ...nodeDefaults,
  },
  {
    id: '3',
    position: { x: 250, y: 250 },
    ...nodeDefaults,
  },
  {
    id: '4',
    position: { x: 0, y: 250 },
    ...nodeDefaults,
  },
];

function Flow() {
  return (
    <ReactFlowProvider>
      <div
        style={{
          height: 400,
          border: '3px solid #333',
          background: '#FAF5FF',
          position: 'relative',
        }}
      >
        <ReactFlow
          defaultNodes={nodes}
          preventScrolling={false}
          nodeTypes={nodeTypes}
        >
          <Background gap={25} />
          <Controls position="top-right" showInteractive={false} />
        </ReactFlow>
      </div>
      <ViewportInfo />
    </ReactFlowProvider>
  );
}

export default Flow;
```

React Flow 的所有内容都存在于视口中。视口有 `x`、`y` 和 `zoom`。拖动窗格时，可以改变 `x` 和 `y` 坐标；放大或缩小时，可以改变 zoom 级别。
