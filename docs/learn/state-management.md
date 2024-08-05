---
order: 5
title: 状态管理
description: React Flow 中文文档 - 在本指南中，我们将解释如何使用 React Flow 和状态管理库 Zustand。我们将构建一个小应用程序，其中每个节点都有一个颜色选择器来更新其背景颜色。
keywords: [React Flow, React, Zustand, 'React Flow 中文文档']
group:
  title: 高级用法
  order: 5
---

# 状态管理

> 在本指南中，我们假设你已经了解 React Flow 的[核心概念](/learn/core-concepts)以及如何实现[自定义节点](/learn/custom-nodes)。你还应该熟悉状态管理库的概念以及如何使用它们。

在本指南中，我们将介绍如何将 React Flow 与状态管理库 [Zustand](https://zustand-cn.js.org) 结合使用。 我们将创建一个小应用程序，其中每个节点都有一个颜色选择器，用于更新其背景颜色。 在本指南中，我们将使用 Zustand，因为我们已经在 React Flow 内部使用了它，当然，你也可以使用任何其他库，如 Redux、Recoil或 Jotai。

正如你在之前的指南和示例中看到的，React Flow 可以轻松地使用本地组件状态来处理图表的节点和边。 例如，当你的应用程序不断扩展，你希望从节点内部改变状态时，情况就会变得更加复杂。为了避免通过节点数据字段向下传递函数，你可以使用 [React 上下文](https://reactjs.org/docs/context.html) 或添加状态管理库，如本指南中所述。

## 概念

- Store（存储对象）：Store 就是用来维持应用所有的 state 树的一个对象。改变 store 内 state 的唯一途径是对它 dispatch 一个 action。 Store 不是类。它只是有几个方法的对象。
- State（状态）：应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
- Hook：React 钩子函数
- Action：要想更新 state 中的数据，你需要发起一个 action。Action 就是一个普通 JavaScript 对象用来描述发生了什么。action 就像是描述发生了什么的指示器。

## 安装 Zustand

如上所述，我们在本示例中使用了 Zustand。Zustand 有点像 Redux：你有一个中心 store，其中包含用于改变状态的 action（动作）和访问 state（状态）的 hook（钩子）。 你可以通过以下方式安装 Zustand：

```bash
yarn add zustand
```

## 创建一个 Store

Zustand 可让你创建一个 hook，用于访问 store 的值和函数。 我们将节点和边以及 `onNodesChange`、`onEdgesChange`、`onConnect`、`setNodes` 和 `setEdges` 函数放在 store 中，以获得图形的基本交互性：

<code src="./demos/create-a-store/index.tsx"></code>

这就是基本设置。 现在，我们有了一个带有节点和边的存储空间，它可以处理 React Flow 触发的更改（拖动、选择或删除节点或边）。当你查看 `index.tsx` 文件时，你会发现它保持得非常整洁。所有数据和动作现在都是 Store 的一部分，可以通过 `useStore` 钩子访问。

## 实现一个颜色改变动作

我们添加了一个新的 `updateNodeColor` 操作，用于更新特定节点的 `data.color` 字段。 为此，我们将节点 id 和新颜色传递给动作，遍历节点并用新颜色更新匹配的节点：

```tsx | pure
updateNodeColor: (nodeId: string, color: string) => {
  set({
    nodes: get().nodes.map((node) => {
      if (node.id === nodeId) {
        // 在这里创建一个新对象，以便通知 React Flow 有关更改的信息，这一点很重要。
        return { ...node, data: { ...node.data, color } };
      }

      return node;
    }),
  });
};
```

现在可以像这样在 React 组件中使用这个新动作：

```tsx | pure
const updateNodeColor = useStore((s) => s.updateNodeColor);
...
<button onClick={() => updateNodeColor(nodeId, color)} />;
```

## 添加一个颜色选择器节点

在这一步中，我们将实现 `ColorChooserNode` 组件，并在用户更改颜色时调用 `updateNodeColor`。颜色选择器节点的自定义部分是颜色输入。

```tsx | pure
<input
  type="color"
  defaultValue={data.color}
  onChange={(evt) => updateNodeColor(id, evt.target.value)}
  className="nodrag"
/>
```

我们添加了 `nodrag` 类名，这样用户在更改颜色时就不会误拖动节点，并在 `onChange` 事件处理程序中调用 `updateNodeColor`。

<code src="./demos/updateNodeColor/index.tsx"></code>

现在，你可以点击颜色选择器，更改节点的背景。
