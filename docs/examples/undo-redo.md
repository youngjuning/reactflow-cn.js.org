---
order: 1
title: 撤销和重做
description: React Flow 中文文档 - 此示例展示了如何基于 Zustand 和 Zundo 为 React Flow 图实现简单的撤销和重做功能。
keywords: [React Flow, React, Undo, Redo, Zustand, Zundo, 'React Flow 中文文档']
group:
  title: 交互
  order: 3
---

此示例展示了如何基于 Zustand 和 Zundo 为 React Flow 实现简单的撤销和重做功能。

<code src="./demos/undo-redo/index.tsx"></code>

由于 [strange node reorder after setNode](https://github.com/xyflow/xyflow/issues/3967) 问题，基于 Sub Flow 的话需要自己实现 `addEdges` 和 `addNodes` 方法。
