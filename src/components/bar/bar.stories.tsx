import type { Meta, StoryObj } from '@storybook/react-vite';
import Bar from './bar.component';

const meta = {
  title: 'Example/Bar',
  component: Bar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    size: 50,
    max: 100,
  },
} satisfies Meta<typeof Bar>;

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