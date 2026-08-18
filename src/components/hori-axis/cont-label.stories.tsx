import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContLabel } from './cont-label.component';

const meta = {
  title: 'Example/ContLabel',
  component: ContLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    labels: ['label01', 'label02', 'label03']
  },
} satisfies Meta<typeof ContLabel>;

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