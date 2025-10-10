    import '@/app/global.css';
    import { RootProvider } from 'fumadocs-ui/provider';
    import type { Translations } from 'fumadocs-ui/i18n';
    import type { Metadata } from 'next';
    import { Geist, Geist_Mono } from 'next/font/google';
    import 'fumadocs-twoslash/twoslash.css';
    import 'katex/dist/katex.css';
    import '@/app/favicon.svg';
    
    export const metadata: Metadata = {
      title: 'Y-Agent Studio 多人推荐的智能体开发套件,告别开发瓶颈,高度灵活,快速部署。',
      description: 'Y-Agent Studio 是一款专业的企业级Agent智能体开发套件，提供从开发、测试到训练、部署的全链路解决方案。立即体验智能体开发新范式。',

    };
    
    const geist = Geist({
      variable: '--font-sans',
      subsets: ['latin'],
    });
    
    const mono = Geist_Mono({
      variable: '--font-mono',
      subsets: ['latin'],
    });

    const cn: Partial<Translations> = {
      search: '搜索',
      searchNoResult: '没有找到结果',
      toc: '目录',
      tocNoHeadings: '没有找到目录',
      lastUpdate: '最后更新',
      chooseLanguage: '选择语言',
      nextPage: '下一页',
      previousPage: '上一页',
      chooseTheme: '选择主题',
      editOnGithub: '在 GitHub 上编辑',
    };
    
    export default async function RootLayout({
      params,
      children,
    }: {
      params: Promise<{ lang: string }>;
      children: React.ReactNode;
    }) {
      let locales = [
        {
          name: 'English',
          locale: 'en',
        },
        {
          name: 'Chinese',
          locale: 'cn',
        },
      ];
    
      const lang = (await params).lang;
    
      if (lang === 'cn') {
        locales = [
          {
            name: '英文',
            locale: 'en',
          },
          {
            name: '中文',
            locale: 'cn',
          },
        ];
      }
    
      return (
        <html suppressHydrationWarning lang={lang}
        >
          <head>
            <link rel="icon" type="image/svg+xml" href="/cn/docs/icon.png" />
            <link rel="canonical" href="https://y-agent.cn/" />
            <link rel="canonical" href="https://y-agent.cn/docs" />
            <link rel="canonical" href="https://y-agent.cn/docs/no-time-read-this" />
            <meta name="keywords" content="Y-Agent Studio, AI智能体开发, 企业级Agent, 智能体编排, 有向有环图, Agent自动化测试, 语料生产, 模型训练框架, 多智能体协作, 垂直领域AI, RAG增强, 提示词工程"></meta>
          </head>
          <body className="test relative flex min-h-screen flex-col">
            
            <RootProvider
              i18n={{
                locale: lang,
                locales,
                translations: lang === 'cn' ? cn : undefined,
              }}
            >
              {children}
            </RootProvider>
        <div className="flex flex-col c-footbox items-center text-center text-fd-muted-foreground">
          <small>
              <a
                target="_blank"
                href="https://beian.miit.gov.cn"
                
              >
                <span>京ICP备2025145222号-1</span>
              </a>
              &nbsp;
              &nbsp;
              &nbsp;
              <span>
              © Copyright 向量感知（北京）智能科技有限公司 YAFO 2025.
              </span>
          </small>
        </div>
          </body>
        </html>
      );
    }