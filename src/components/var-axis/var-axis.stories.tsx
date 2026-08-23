import type { Meta, StoryObj } from '@storybook/react-vite';
import { VarAxis } from './var-axis.component';

const meta = {
  title: 'Example/VarAxis',
  component: VarAxis,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    max: 100,
    divs: 5,
  },
} satisfies Meta<typeof VarAxis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          height: '30rem'
        }}
      >
        <Story />
      </div>
    ),
  ],
};