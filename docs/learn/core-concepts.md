---
order: 2
title: 核心概念
description: 在下面的部分中，我们将向你介绍 React Flow 的核心概念，并解释如何创建交互式流程。流程由节点和边（或仅节点）组成。
keywords: [React Flow, React, Node, Edge]
group:
  title: 概念
  order: 3
---

```tsx
/**
 * inline: true
 */
import React from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'This is a Node' } },
];

export default function App() {
  return (
    <div style={{ height: '250px',background: 'rgb(250, 245, 255)', border: '1px solid rgb(51, 51, 51)' }}>
      <ReactFlow nodes={initialNodes} fitView/>
    </div>
  );
}
```
