import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "TONX",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "KARPED1EM",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/": ["Features", "GetStart", "Advanced", "Roles", "FAQ"],
    },
    bulletin: {
      body: [
        {
          type: "text",
          content: `TOHE 已经改名为 TONX 并将在未来一段时间内作为我的兴趣爱好维护。我可能不会添加许多新内容，但我会用一些零钱和空闲时间来维持用户最好的体验。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/Donate",
            },
          ],
        },
      ],
    },
  }),
  locales: {
    '/zh/': {
      lang: '简体中文',
    },
    '/': {
      lang: 'English',
    },
  },
});
