import type { Meta, StoryObj } from '@storybook/react-vite';
import { Graphic } from './graphic.component';

const meta = {
  title: 'Example/Graphic',
  component: Graphic,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    bars: [20, 80, 50],
    labels: ['patatas', 'pimeintos', 'pomelos'],
    max: 100,
  },
} satisfies Meta<typeof Graphic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          height: '30rem',
          width: '50rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};