---
order: 5
title: 状态管理
description: 在本指南中，我们将解释如何使用 React Flow 和状态管理库 Zustand。我们将构建一个小应用程序，其中每个节点都有一个颜色选择器来更新其背景颜色。
keywords: [React Flow, React, Zustand]
group:
  title: 高级用法
  order: 5
toc: content
---

> 在本指南中，我们假设你已经了解 React Flow 的[核心概念](/learn/core-concepts)以及如何实现[自定义节点](/learn/custom-nodes)。你还应该熟悉状态管理库的概念以及如何使用它们。

在本指南中，我们将介绍如何将 React Flow 与状态管理库 [Zustand](https://zustand-cn.js.org) 结合使用。 我们将创建一个小应用程序，其中每个节点都有一个颜色选择器，用于更新其背景颜色。 在本指南中，我们将使用 Zustand，因为我们已经在 React Flow 内部使用了它，当然，你也可以使用任何其他库，如 Redux、Recoil或 Jotai。

正如你在之前的指南和示例中看到的，React Flow 可以轻松地使用本地组件状态来处理图表的节点和边。 例如，当你的应用程序不断扩展，你希望从节点内部改变状态时，情况就会变得更加复杂。为了避免通过节点数据字段向下传递函数，您可以使用 [React 上下文](https://reactjs.org/docs/context.html) 或添加状态管理库，如本指南中所述。

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
