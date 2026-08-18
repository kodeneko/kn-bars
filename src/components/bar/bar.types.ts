type BarProps = {
  size: number;
  max: number;
};

type ContBarProps = {
  bars: BarProps['size'][];
  max: BarProps['max'];
};

export type { BarProps, ContBarProps };