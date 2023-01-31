import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';

export default {
  title: 'navigation/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NavBarStory = Template.bind({});
