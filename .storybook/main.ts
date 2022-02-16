import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: true,
    checkOptions: {
      typescript: {
        configOverwrite: {
          include: ['src/**/stories/**/*'],
          exclude: ['node_modules'],
        },
      },
    },
  },
};

module.exports = config;
