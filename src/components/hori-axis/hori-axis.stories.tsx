import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoriAxis } from './hori-axis.component';

const meta = {
  title: 'Example/HoriAxis',
  component: HoriAxis,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    labels: ['label01', 'label02', 'label03']
  },
} satisfies Meta<typeof HoriAxis>;

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