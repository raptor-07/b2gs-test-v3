export const Z_INDEX = {
  // Layout & Navigation
  header: 50,

  // Overlays & Modals
  overlay: {
    backdrop: 400,
    content: 400,
  },
  modal: {
    backdrop: 90,
    content: 100,
  },

  // Top Level Elements
  toast: 110,
  tooltip: 120,
  debug: 9999,
} as const;

// Type helpers for nested paths
type Join<K, P> = K extends string | number ?
  P extends string | number ?
    `${K}${'' extends P ? '' : '.'}${P}`
    : never : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ...0[]
];

type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
  { [K in keyof T]-?: K extends string | number ?
      `${K}` | Join<K, Paths<T[K], Prev[D]>>
      : never
  }[keyof T] : '';

// Export path and value types
export type ZIndexPath = Paths<typeof Z_INDEX>;
export type ZIndexValue = number;
