import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContBar } from './cont-bar.component';

const meta = {
  title: 'Example/ContBar',
  component: ContBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    bars: [50, 20, 80],
    max: 100,
  },
} satisfies Meta<typeof ContBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          height: '30rem',
          width: '30rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};