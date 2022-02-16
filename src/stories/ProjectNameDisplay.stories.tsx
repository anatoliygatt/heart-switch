import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProjectNameDisplay } from '../ProjectNameDisplay';

export default {
  title: 'ProjectNameDisplay',
  component: ProjectNameDisplay,
} as ComponentMeta<typeof ProjectNameDisplay>;

const Template: ComponentStory<typeof ProjectNameDisplay> = () => (
  <ProjectNameDisplay />
);

export const Default = Template.bind({});
