---
order: 3
title: 我的 ReactFlow 实战之旅
nav:
  title: 分享
  order: 3
toc: 'content'
---

# 我的 ReactFlow 实战之旅

## React Flow 优势

- 渲染引擎基于 SVG+HTML，兼顾了性能和可扩展性。能满足几千个节点的渲染需求。
- 原生基于 React 实现，易于 定制开发维护。
- 社区 Proflow、Dify 基于 reactflow，有成熟方案可以借鉴。

## 图渲染方案

前端绘制图形无非就是 HTML + CSS、Canvas、Svg 三种方式，综合做一下对比，我们可以列出他们的优劣势：

![](https://cdn.jsdelivr.net/gh/youngjuning/images@main/1723709597271.png)

在 SOP 策略树的场景下，不需要渲染大量的节点（最多几千个元素），对于动画的诉求也不高。Svg 基于 DOM 的特性会更适合我们，一个是学习成本和开发成本更低，另一个是基于 DOM 可以做的拓展也更多。

最终调研结果是**使用 HTML + Svg 来完成图的渲染，Svg 负责图形、线的部分，HTML 来实现文本、菜单、背景等图层**的方案最适合我们。主流的流程编排引擎 reactflow、xflow、logicflow 都是采用的这种方案。

## React Flow 快速入门

### 安装 reactflow

```sh
npm install @xyflow/react
```

### 创建第一个 Flow

reactflow 软件包导出 `<ReactFlow />` 组件作为默认导出。加上一些节点和边，就可以跑起来了 ：

```jsx
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
    <div style={{ height: '400px' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView />
    </div>
  );
}
```

这里有几件事需要注意：

- 🎨 你必须导入 React Flow 样式表。
- 📐 `<ReactFlow />` 组件必须封装在具有宽度和高度的元素中。

### 添加交互

使用 React Flow 创建的图形是完全交互式的。我们可以移动节点、将它们连接在一起、删除它们...... 要获得基本功能，我们需要添加三样东西：节点变化时的回调、边变化时的回调、节点连接时的回调。reactflow 提供了一些钩子，让这一切变得简单！

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
    <div style={{ height: '400px' }}>
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

### 核心概念

#### 节点（Nodes）

```tsx
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

#### 连接桩（Handles）

```tsx
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

连接桩（在其他库中也称为 "端口"）是边连接到节点的位置。连接桩可以放置在任何地方，样式也可以随心所欲。它只是一个 `div` 元素。 默认情况下，它以灰色圆圈的形式出现在节点的顶部、底部、左侧或右侧。创建自定义节点时，可以根据需要在节点中添加任意数量的连接桩。

#### 边（Edges）

边连接两个节点。每条边都需要一个目标节点和一个源节点。 React Flow 内置了四种边缘类型：`default`（贝塞尔）、`smoothstep`、`step` 和 `straight`。边是一个 SVG 路径，可使用 CSS 进行样式设置，并且完全可自定义。如果使用多个连接桩，可以分别引用它们，为一个节点创建多个连接。

```tsx
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

#### 视口（Viewport）

React Flow 的所有内容都存在于视口中。视口有 `x`、`y` 和 `zoom`。拖动窗格时，可以改变 `x` 和 `y` 坐标；放大或缩小时，可以改变 zoom 级别。

```tsx
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

## React Flow 进阶

### 自定义节点

React Flow 中的自定义节点就是一个普通的 React 组件，它可以包含任何内容，下面是创建一个自定义节点的流程：

1、创建一个普通的 React 组件，并使用 `<Handle />` 组件引入连接桩。

```tsx | pure
import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </>
  );
}
```

2、将组件添加到节点类型中。

nodeTypes 必须放在组件外部，或者使用 useMemo 进行缓存，否则会导致性能问题。

```tsx | pure
const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

return <ReactFlow nodeTypes={nodeTypes} />;
```

3、定义 nodes 数组，并使用 `type` 属性指定节点类型。

```tsx | pure
const nodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];
```

<code src="./custom-node/index.tsx"></code>

### 自定义边

自定义边，官方推荐的是基于 `<BaseEdge />`，但在和布局库结合使用时，会有定位错乱的问题。使用 `<SmoothStepEdge />`、`<StraightEdge />`、`<BezierEdge />` 可以避免定位错乱问题。

另外，如果需要自定义边的 label，可以使用 `<EdgeLabelRenderer />`，比如节点名过长设置 `ellipsis`，需要注意的是，自定义 label 需要手动定位。

```tsx | pure
import { useMemo, memo, useCallback } from 'react';
import {
  SmoothStepEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
} from '@xyflow/react';
import { ExclamationCircleFilled } from '@ant-design/icons';

const CommonEdge = (edge) => {
  const {
    label,
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    data,
    selected,
    source,
  } = edge;

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <SmoothStepEdge
      {...edge}
      selected={false}
      style={edgeStyle}
      edgePath={edgePath}
      label={
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              // 基于 labelX 和 labelY 对自定义 Label 进行定位
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              pointerEvents: 'all',
              fontSize: '12px',
              background: '#ffffff',
              zIndex: 1000,
            }}
          >
            <Typography.Text
              style={{
                maxWidth: '80px',
              }}
              ellipsis={{
                tooltip: {
                  title: label,
                  placement: 'bottomLeft',
                  overlayStyle: {
                    width: '160px',
                  },
                  fresh: false,
                },
              }}
            >
              {label}
            </Typography.Text>
          </div>
        </EdgeLabelRenderer>
      }
    />
  );
};

export default memo(CommonEdge);
```

### EdgeMarker 边标记

![](https://cdn.jsdelivr.net/gh/youngjuning/images@main/1723713124991.png)

React Flow 的边默认是一条光秃秃的线，我们可以通过 `markerStart` 和 `markerEnd` 属性来添加箭头。但是，React Flow 内置只有两种 marker：`arrow` 和 `arrowclosed`。并且 markerStart 和 markerEnd 不会随着边的选中更改颜色。那我们想要实现上面的需求有办法吗？答案是肯定的，我们可以自定义 marker。

首先我们需要了解下什么是 marker，前面我们介绍过 React Flow 是基于 Svg + React Dom 实现的，这里的 marker 指的就是 Svg 的 `<marker>` 元素：

`<marker>` 元素定义了在给定 `<path>`、`<line>`、`<polyline>` 或 `<polygon>` 元素上绘制箭头或者多边标记所使用的图形。
可以使用 `marker-start`、`marker-mid` 和 `marker-end` 属性将标记附着到形状上。

reactflow 中声明的默认 marker：

```tsx | pure
<marker
  class="react-flow__arrowhead"
  id="1__height=10&type=arrowclosed&width=10"
  markerWidth="10"
  markerHeight="10"
  viewBox="-10 -10 20 20"
  markerUnits="strokeWidth"
  orient="auto-start-reverse"
  refX="0"
  refY="0"
>
  <polyline
    stroke-linecap="round"
    stroke-linejoin="round"
    points="-5,-4 0,0 -5,4 -5,-4"
    style="stroke:rgb(177, 177, 183); fill: rgb(177, 177, 183); stroke-width:1;"
  ></polyline>
</marker>
```

reactflow 中使用 marker：

```tsx | pure
<path
  d="M32 12.5703125L52 12.5703125L 111,12.5703125Q
  116,12.5703125 116,7.5703125L 116,-70Q 116,-75 121,-75L180 -75L200 -75"
  fill="none"
  class="react-flow__edge-path"
  marker-end="url('#1__height=10&type=arrowclosed&width=10')"
  marker-start="url('#')"
></path>
```

了解了 marker 原理，我们就可以自定义 marker 了。

和 `<ReactFlow>` 同级插入以下代码：

```tsx | pure
<svg style={{ position: 'absolute', top: 0, left: 0 }}>
  <defs>
    <marker
      id="circle"
      viewBox="0 0 10 10"
      markerUnits="userSpaceOnUse"
      markerWidth="5"
      markerHeight="5"
      refX="6"
      refY="5"
    >
      <circle cx="5" cy="5" r="5" fill="#6D6D6D" />
    </marker>
    <marker
      id="circleSelected"
      viewBox="0 0 10 10"
      markerUnits="userSpaceOnUse"
      markerWidth="5"
      markerHeight="5"
      refX="6"
      refY="5"
    >
      <circle cx="5" cy="5" r="5" fill="#3F7FFB" />
    </marker>
    <marker
      id="arrowClosed"
      markerWidth="20"
      markerHeight="20"
      viewBox="-10 -10 20 20"
      markerUnits="userSpaceOnUse"
      orient="auto-start-reverse"
      refX="-3"
      refY="0"
    >
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="-5,-4 0,0 -5,4 -5,-4"
        fill="#6D6D6D"
      />
    </marker>
    <marker
      className="react-flow__arrowhead"
      id="arrowClosedSelected"
      markerWidth="20"
      markerHeight="20"
      viewBox="-10 -10 20 20"
      markerUnits="userSpaceOnUse"
      orient="auto-start-reverse"
      refX="-3"
      refY="0"
    >
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points="-5,-4 0,0 -5,4 -5,-4"
        fill="#3F7FFB"
      />
    </marker>
  </defs>
</svg>
```

然后给前面自定义的边，添加 `markerStart` 和 `markerEnd` 属性：

```ts
<SmoothStepEdge
  markerStart={`url(#${selected ? 'circleSelected' : 'circle'})`}
  markerEnd={`url(#${selected ? 'arrowClosedSelected' : 'arrowClosed'})`}
/>
```

#### 如何防止 SVG Marker（箭头）继承 Path 的 stroke-width？

React Flow Marker 默认 markerUnits 是 `"strokeWidth"`，这样给 path 设置 strokeWidth，marker 会跟着改变。参考 http://www.w3.org/TR/SVG11/painting.html#MarkerUnitsAttribute。 设置 `markerUnits="userSpaceOnUse"` 即可。

#### Hover 边修改 Marker 样式

有些场景我们需要 hover 的时候改变边和 marker 的样式，就不能使用上面的方法了，好在基于 API 我们就可以很好地实现这个需求。

利用 onEdgeMouseEnter、onEdgesChange 和 `editor.updateEdge` 可以更新 markerEnd：

> 这里是基于 ProFlow 的示例，直接使用 reactflow 思路是一致的。

```tsx | pure
import { useFlowEditor, FlowEditor } from '@ant-design/pro-flow';

const editor = useFlowEditor();

<FlowEditor
  onEdgesChange={(edges) => {
    edges.forEach((edge: any) => {
      // 选中边更新 marker
      if (edge.type === 'select') {
        if (!edge.selected) {
          editor.updateEdge(edge.id, {
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          });
        } else {
          editor.updateEdge(edge.id, {
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: 'red',
            },
          });
        }
      }
    });
  }}
  flowProps={{
    // Hover Edge 时改变 Marker 样式
    onEdgeMouseEnter: (_, edge) => {
      editor.updateEdge(edge.id, {
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: 'red',
        },
      });
    },
    onEdgeMouseLeave: (_, edge) => {
      if (!edge.selected) {
        editor.updateEdge(edge.id, {
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        });
      }
    },
  }}
></FlowEditor>;
```

### Dagre + Sub Flow + Auto Layout

- Dagre：是一个 JavaScript 库，专门用于构建和布局有向图（Directed Acyclic Graphs, DAG），可以基于它实现树状布局
- Sub Flows：React 提供的布局能力，使用 `parentId` 来标识节点的父节点，一般用于实现分组功能。也可以仅用来给服务端遍历树使用。
- Auto Layout：一般大模型编排都是手动整理画布，但策略树的流程编排，需要新增加节点后自动布局（类似思维导图）。

首先我们需要基于 Dagre 编写一个布局函数，需要注意的点：

1. 禁用顺序调整算法 `disableOptimalOrderHeuristic`，如果不禁用，每次新增节点节点顺序可能会改变。
2. 如果和 Sub Flows 结合使用，需要单独处理有 parentId 的节点的 position，否则布局会错乱，有需要可以直接采用下面算法。
3. 使用 Sub Flows，必须保证父节点在子节点之前，否则会报错，React Flow 的 `setNodes` 和 `addNodes` 方法都是把节点插入到数组的开头，我最后是基于 zustand 自行管理数据流解决的。

```ts
import Dagre from '@dagrejs/dagre';
import { Edge, Node, Position } from '@xyflow/react';
import _ from 'lodash';

/**
 * 获取布局后的节点和边
 */
export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const dagreGraph = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'LR', nodesep: 180, ranksep: 150 });

  edges.forEach((edge) => dagreGraph.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    dagreGraph.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    }),
  );

  Dagre.layout(dagreGraph, {
    // 禁用顺序调整算法
    disableOptimalOrderHeuristic: true,
  });
  return {
    nodes: nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      let x = 0,
        y = 0;
      // https://github.com/xyflow/xyflow/discussions/2968
      if (node.parentId) {
        const parentNodeWithPosition = dagreGraph.node(node.parentId);
        x =
          nodeWithPosition?.x -
          (parentNodeWithPosition?.x - parentNodeWithPosition?.width / 2) -
          (node.measured?.width ?? 0) / 2;
        y =
          nodeWithPosition?.y -
          (parentNodeWithPosition?.y - parentNodeWithPosition?.height / 2) -
          (node.measured?.height ?? 0) / 2;
      } else {
        x = nodeWithPosition.x - (node.measured?.width ?? 0) / 2;
        y = nodeWithPosition.y - (node.measured?.height ?? 0) / 2;
      }

      return {
        ...node,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: { x, y },
      };
    }),
    edges,
  };
};

export default getLayoutedElements;
```

搞定了布局函数，我们还需要实现 Auto Layout。

按照 React Flow 的示例，仅使用 `useNodesInitialized` 是不够的，还需要监听 reactFlowInstance 是否初始化、每个节点是否有 measured 属性。有时候还需要监听 `nodes?.length` 的改变。

```ts
import { ReactFlow, useNodesInitialized } from '@xyflow/react';
const [reactFlowInstance, setReactFlowInstance] = useState();
const nodesInitialized = useNodesInitialized();

// 画布初始化或者节点数量变化时，重新布局
useEffect(() => {
  if (
    reactFlowInstance &&
    nodesInitialized &&
    getNodes().every((node) => node.measured !== undefined)
  ) {
    onLayout();
  }
}, [reactFlowInstance, nodesInitialized, getNodes]);

const onInit = useCallback((reactFlowInstance) => {
  setReactFlowInstance(reactFlowInstance);
}, []);

<ReactFlow
  // https://github.com/xyflow/xyflow/issues/533#issuecomment-2084531643
  onInit={onInit}
/>;
```

### 状态管理

在前面的示例中，React Flow 可以轻松地使用本地组件状态来处理图表的节点和边。

但是，当你的应用程序不断扩展。你希望从节点内部改变状态时，情况就会变得更加复杂。为了避免通过节点数据字段向下传递函数，你可以使用 React 上下文 或添加状态管理库。

在我的场景里，处理 props 深度传递，还有和原有功能交互的需求，为了更小的侵入式改造，我们需要一个状态管理库。推荐使用 Zustand，React Flow 内部也是基于 zustand。

Zustand 可让你创建一个 hook，用于访问 store 的值和函数。 们将节点和边以及 `onNodesChange`、`onEdgesChange`、`onConnect`、`setNodes` 和 `setEdges` 函数放在 store 中，以获得图形的基本交互性：

<code src="../learn/demos/create-a-store/index.tsx"></code>

这就是基本设置。现在，我们有了一个带有节点和边的存储空间，它可以处理 React Flow 触发的更改（拖动、选择或删除节点或边）。你会发现它保持得非常整洁。所有数据和动作现在都是 Store 的一部分，可以通过 `useStore` 钩子访问。

### 撤销和回退

撤销和回退，是我们在设计流程编排时必须需要考虑的重要功能。但这却是 React Flow Pro 的一部分。通过调研发现，可以使用 yjs 和 zundo 实现。zundo 是 zustand 的插件，api 简单，易用。下面介绍下 zundo 的使用技巧。

1、配置 zundo 插件：需要注意的是可以通过偏函数 `partialize` 指定需要存储到时间机器的字段。

```ts
import { temporal } from 'zundo';
import isDeepEqual from 'fast-deep-equal';

const useStore = create()(
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
    }),
    {
      equality: isDeepEqual,
      // 偏函数
      partialize(state) {
        const { nodes, edges } = state;
        return {
          edges,
          nodes,
        };
      },
    },
  ),
);
```

2、精准控制时间机器：zundo 会记录所有 zustand store 的状态改变，但是我们一般只需要记录关键步骤，比如新增节点、删除节点、新增边、删除边。在我的需求里，新增节点会涉及新增节点、新增边、对节点进行布局计算。所以需要有一个方案能够精准控制时间机器。这里有两个思路：

1. Dify 的方案：通过 React Flow 内置的 store 控制画布状态，然后封装了 `saveToHistory` 统一设置自己的 store 状态，在需要的记录的步骤里调用 `saveToHistory`，但是问题就是 React Flow 内置的 `setNodes` 和 `setEdges` 顺序是倒序的，不能满足我的需求。另外，这个思路相当于重复存了数据，性能是有损耗的。
2. 基于 zundo 的 `pause` 和 `resume` api 实现 record 方法。

```ts
export const useTemporalStore = () => {
  return {
    ...useStore.temporal.getState(),
    undo: () => {
      useStore.temporal.getState().undo();
      // 通过 eventBus 通知保存画布
      makeUpV2EventBus.emit(MakeUpV2EventType.SaveTree, {
        nodes: useStore.getState().nodes,
        edges: useStore.getState().edges,
      });
    },
    redo: () => {
      useStore.temporal.getState().redo();
      // 通过 eventBus 通知保存画布
      makeUpV2EventBus.emit(MakeUpV2EventType.SaveTree, {
        nodes: useStore.getState().nodes,
        edges: useStore.getState().edges,
      });
    },
  };
};

export const record = (callback: () => void) => {
  const temporalStore = useStore.temporal.getState();
  temporalStore.resume();
  callback();
  temporalStore.pause();
};

// 默认关闭时间机器
useStore.temporal.getState().pause();
```

### 复制和粘贴

![](https://cdn.jsdelivr.net/gh/youngjuning/images@main/1723718690847.png)

1、使用递归获取复制的节点的所有子节点 id：

```ts
export const getChildNodeIds = (nodes: AppNode[], parentId: string) => {
  // 1、定义 childNodeIds 数组，用于存储找到的所有节点的 id，默认把 parentId 添加到数组中
  const childNodeIds: string[] = [parentId];

  // 2、遍历 nodes 数组，查找具有匹配 parentId 的节点
  function findChildNodeIds(parentId) {
    nodes.forEach((node) => {
      if (node.parentId === parentId) {
        // 3、如果找到节点，将其 id 添加到 children 数组中
        childNodeIds.push(node.id);
        // 4、递归调用 findChildren 来查找该节点的子节点
        findChildNodeIds(node.id);
      }
    });
  }

  findChildNodeIds(parentId);

  return childNodeIds;
};
```

2、使用递归根据复制的节点生成新的节点

```ts
export const generateCopyNodes = (nodes: any[], parentNode: any) => {
  // 1、定义 childNodeIds 数组，用于存储找到的所有节点的 id，默认把 rootNode 添加到数组中
  const childNodes: any[] = [];
  const rootNode = {
    id: generateNodeId(parentNode.type),
    type: parentNode.type,
    data: {
      ...parentNode.data,
      label: `${parentNode.label}_复制`,
    },
    label: `${parentNode.label}_复制`,
    position: { x: 0, y: 0 },
    sourceId: parentNode.id,
  };
  childNodes.push(rootNode);

  const nodesWithSourceId = nodes.map((item) => ({
    ...item,
    id: generateNodeId(item.type),
    sourceId: item.id,
  }));

  // 2、遍历 nodes 数组，查找具有匹配 parentId 的节点
  function generateChildCopyNodes(parentNode) {
    nodesWithSourceId.forEach((node) => {
      if (node.parentId === parentNode.sourceId) {
        // 3、如果找到节点，将其添加到 children 数组中
        childNodes.push({
          ...node,
          data: {
            ...node.data,
            label: `${node.label}_复制`,
          },
          label: `${node.label}_复制`,
          parentId: parentNode.id,
          position: { x: 0, y: 0 },
        });
        // 4、递归调用 findChildren 来查找该节点的子节点
        generateChildCopyNodes(node);
      }
    });
  }

  generateChildCopyNodes(rootNode);

  return childNodes;
};
```


3、 基于上面两个递归算法，生成待粘贴的节点和边：

```ts
{
  copyNodesAndEdges: (nodeId) => {
    const willCopyNodeIds = getChildNodeIds(get().nodes, nodeId);
    const willCopyEdges = get().edges.filter((edge) => willCopyNodeIds.includes(edge.source));

    const copyNodes = generateCopyNodes(
      get().nodes,
      get().nodes.find((node) => node.id === nodeId),
    );
    const copyEdges = willCopyEdges.map((edge) => ({
      ...edge,
      id: generateEdgeId(),
      sourceId: edge.id,
      label: `${edge.label}_复制`,
      source: copyNodes.find((item) => item.sourceId === edge.source).id,
      target: copyNodes.find((item) => item.sourceId === edge.target).id,
    }));
    set({
      copyNodes,
      copyEdges,
    });
  },
}
```

### eventBus

有时候为了和其他功能交互，使用事件总线会很方便。

```ts
import EventEmitter from 'eventemitter3';

export enum MakeUpV2EventType {
  SaveTree = 'SaveTree',
  CopyTreeProcess = 'CopyTreeProcess',
  OpenPropertiesView = 'OpenPropertiesView',
  ClosePropertiesView = 'ClosePropertiesView'
}

export const makeUpV2EventBus = new EventEmitter();
```
