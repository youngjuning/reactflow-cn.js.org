---
order: 1
title: 快速开始
description: React Flow 中文文档 - 如果你想尽快开始使用，那么你来对地方了！本页面将带你在几分钟内从零开始开发一个可以运行的 React Flow 应用。从这里，你可以深入了解 React Flow 的全部内容、查看示例或深入了解 API 文档。
keywords: [React Flow, React, Node, Edge, 'React Flow 中文文档']
nav:
  title: 学习
  order: 1
---

# 快速开始

如果你想尽快开始运行，那就来对地方了！ 本页面将在几分钟内带你从零起步到运行 React Flow 应用程序。 从这里开始，你可以深入了解 React Flow，查看示例或深入研究 API 文档。

你可以查看我们在 [CodeSandbox](https://new.reactflow.dev/ts) 上提供的入门项目，尝试 React Flow，而无需在本地进行任何设置。

如果你想立即开始，可以使用我们的 [vite 模板](https://github.com/xyflow/vite-react-flow-template)：

```sh
npx degit xyflow/vite-react-flow-template app-name
```

## 安装

要在本地开始使用，你需要具备以下条件：

- 安装了 Node.js
- npm 或其他软件包管理器（如 yarn 或 pnpm）
- 熟悉 React。你不需要成为专家，但应该熟悉基础知识。

首先，以你喜欢的方式创建一个新的 React 项目；我们推荐使用 Vite，但你可以自行选择。

```sh
yarn create vite my-react-flow-app -- --template react
```

React Flow 在 npm 包名为 @xyflow/react，请继续添加它。

```sh
yarn add @xyflow/react
```

最后，启动开发服务器，我们就可以开始了！

```sh
yarn dev
```

## 创建你的第一个 flow

reactflow 软件包导出 `<ReactFlow />` 组件作为默认导出。加上一些节点和边，我们就可以开始工作了！ 删除 `App.jsx` 中的所有内容并添加以下内容：

```tsx
import React from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  return (
    <div style={{ height: '500px' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView/>
    </div>
  );
}
```

这里有几件事需要注意：

- 🎨 你必须导入 React Flow 样式表。
- 📐 `<ReactFlow />` 组件必须封装在具有宽度和高度的元素中。

## 添加交互

使用 React Flow 创建的图形是完全交互式的。我们可以移动节点、将它们连接在一起、删除它们...... 要获得基本功能，我们需要添加三样东西：[节点变化时的回调](#)。[边变化时的回调](#)。[节点连接时的回调](#)。幸运的是，我们提供了一些钩子，让这一切变得简单！

```tsx
import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: '500px' }}>
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
```

## 一些额外的好东西

最后，React Flow 还提供了一些开箱即用的插件，如 `<Minimap />` 或视口 `<Controls />`。

```tsx
import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
```

🎉 恭喜。你已经创建了第一个互动流程！
