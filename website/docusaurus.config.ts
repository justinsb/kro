import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Symphony',
  tagline: 'All purpose glue for Kubernetes resources',
  // The Melodious Kubernetes Integrator
  // Cementing Your Kubernetes Infrastructure
  // Connecting the Dots in Your Kubernetes Environment
  // Bringing Cohesion to Your Kubernetes Clusters
  favicon: 'img/favicon.ico',
  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],
  // Set the production url of your site here
  url: 'https://aws-controllers-k8s.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aws-controllers-k8s', // Usually your GitHub org/user name.
  projectName: 'private-symphony', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          versions: {
            current: {
              label: 'latest',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/symphony.svg',
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Symphony',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'examplesSidebar',
          position: 'left',
          label: 'Examples',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apisSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr class="dropdown-separator">',
            },
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://github.com/aws-controllers-k8s/private-symphony',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://github.com/aws-controllers-k8s/private-symphony',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/aws-controllers-k8s/private-symphony',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Amazon.com, Inc. or its affiliates. All rights reserved.`,
    },
    announcementBar: {
      id: `beta announcement`,
      // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter </a>`,
      // content: `🎉️ <b><a target="_blank" href="https://docusaurus.io/blog/releases/v">Docusaurus v</a> is out!</b> 🥳️`,
      content: `<b class="announcement-bar-style"> ⚠️ This is a private preview version of Symphony. Do not expose to public networks. </b>`,
      backgroundColor: "#ff2617",
      textColor: "white",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['yaml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
// '<a> This a private preview version of Symphony. Please do not expose to public networks.</a>',