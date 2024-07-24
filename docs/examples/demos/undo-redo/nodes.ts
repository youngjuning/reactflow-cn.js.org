import { AppNode } from './store';

export default [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 0, y: 0 },
  },

  {
    id: '2',
    data: { label: 'Default' },
    position: { x: 0, y: 0 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output' },
    position: { x: 0, y: 0 },
  },
] as AppNode[];
