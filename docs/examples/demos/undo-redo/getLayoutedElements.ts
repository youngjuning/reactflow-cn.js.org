import Dagre from '@dagrejs/dagre';
import { Position } from '@xyflow/react';

export const getLayoutedElements = (nodes, edges, options: {
  direction: 'LR' | 'TB';
}) => {
  const isHorizontal = options.direction === 'LR';
  const dagreGraph = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: options.direction, nodesep: 100, ranksep: 100 });

  edges.forEach((edge) => dagreGraph.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    dagreGraph.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    }),
  );

  Dagre.layout(dagreGraph);

  return {
    nodes: nodes.map((node) => {
      const position = dagreGraph.node(node.id);
      const x = position.x - (node.measured?.width ?? 0) / 2;
      const y = position.y - (node.measured?.height ?? 0) / 2;

      return {
        ...node,
        targetPosition: isHorizontal ? Position.Left : Position.Top,
        sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
        position: { x, y },
      };
    }),
    edges,
  };
};
