import { cva } from "class-variance-authority";
import {
  BatteryChargingIcon,
  CpuIcon,
  FileEditIcon,
  FileTextIcon,
  Heart,
  KeyboardIcon,
  LayoutIcon,
  LibraryIcon,
  type LucideIcon,
  MousePointer,
  PaperclipIcon,
  PersonStandingIcon,
  RocketIcon,
  SearchIcon,
  ServerIcon,
  Terminal,
  Check,
  BookOpen,
  TimerIcon,
  StarHalf,
} from "lucide-react";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { CodeBlock } from "@/components/code-block";
import SourceImage from "@/public/source.png";
import {
  CreateAppAnimation,
  PreviewImages,
  WhyInteractive,
} from "./page.client";
import { GiteeLogo, GithubLogo,NetlifyLogo, VercelLogo } from "./icons";
import { TypeTable } from "fumadocs-ui/components/type-table";
import ArchImg from "./arch.png";
import LayerImg from "./layer.png";

const badgeVariants = cva(
  "inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground"
);

export default function Page() {
  const gridColor =
    "color-mix(in oklab, var(--color-fd-primary) 10%, transparent)";

  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 z-2 lg:py-8">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <Hero />
          </div>
          <Feedback />
          <Introduction />
          <div
            className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)",
            }}
          >
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              解放 开发人员
              <br />
              快速 响应 用户需求
            </h2>
          </div>
          <Features />
          <Highlights />
          <Architecture />
          <Why />
          <Contributing />
          <End />
        </div>
      </main>
    </>
  );
}

function Architecture() {
  return (
    <div className="flex flex-col gap-4 border-x border-t p-8 md:px-12 lg:flex-row">
      <div className="text-start">
        <p className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4">
          完整 生命周期 管理
        </p>
        <h3 className="text-xl font-semibold mb-5">流程搭建 - 流程测试 - 日志分析 - 模型训练</h3>
        <p className="text-fd-muted-foreground mb-6">
          Agentic AI助力企业营收增长与业务变革。
          <br />
          <br />
          从搭建到进化，一站式智能体工厂。
          <br />
          不止于搭建，更善于进化！让您的智能体在数据中自我完善。
        </p>
      </div>
      <Image
        src={LayerImg}
        alt="SysLayer"
        className="mx-auto -my-16 w-full max-w-[400px] invert dark:invert-0 lg:mx-0"
      />
    </div>
  );
}

async function Why() {
  return (
    <div className="relative overflow-hidden border-x border-t p-2">
      <WhyInteractive
        typeTable={
          <TypeTable
            type={{
              name: {
                type: "string",
                description: "The name of player",
                default: "hello",
              },
              code: {
                type: "string",
                description: (
                  <CodeBlock lang="ts" code='console.log("Hello World")' />
                ),
              },
            }}
          />
        }
        codeblockSearchRouter={
          <CodeBlock
            lang="ts"
            code={`import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
 
export const { GET } = createFromSource(source);`}
          />
        }
        codeblockTheme={
          <CodeBlock
            lang="css"
            code={`@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';`}
          />
        }
        codeblockInteractive={
          <CodeBlock
            lang="tsx"
            code={`import { File, Folder, Files } from 'fumadocs-ui/components/files';
 
<Files>
  <Folder name="app" defaultOpen>
    <File name="layout.tsx" />
    <File name="page.tsx" />
    <File name="global.css" />
  </Folder>
  <File name="package.json" />
</Files>`}
          />
        }
        codeblockMdx={
          <CodeBlock
            lang="tsx"
            code={`import { db } from '@/server/db';

export function ProductTable() {
  const products = db.getProducts()
    
  return (
    <ul>
      {products.map(product => <li key={product.key}>{product.name}</li>)}
    </ul>
  );
}

## Products

<ProductTable />`}
          />
        }
      />
    </div>
  );
}

function End() {
  return (
    <div className="flex flex-col border-b border-r md:flex-row *:border-l *:border-t">
      <div className="group flex flex-col min-w-0 flex-1 pt-8 **:transition-colors">
        <h2 className="text-3xl text-center font-extrabold font-mono uppercase text-fd-muted-foreground mb-4 lg:text-4xl group-hover:text-blue-500">
          AI 创造 未来
        </h2>
        <p className="text-center font-mono text-xs text-fd-foreground/60 mb-8 group-hover:text-blue-500/80">
          light and gorgeous, just like the moon.
        </p>
        <div className="h-[200px] overflow-hidden p-8 bg-gradient-to-b from-fd-primary/10 group-hover:from-blue-500/10">
          <div className="mx-auto bg-radial-[circle_at_0%_100%] from-60% from-transparent to-fd-primary size-[500px] rounded-full group-hover:from-blue-500 group-hover:to-blue-600/10" />
        </div>
      </div>
      <ul className="flex flex-col gap-4 p-6 pt-8">
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <BatteryChargingIcon className="size-5" />
            稳定保障.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Actively maintained, open for contributions.
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            完整开源.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Open source, available on Github.
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <TimerIcon className="size-5" />
            快速构建.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Initialize a new project with Y-Agent-launch.
          </span>
        </li>
        <li className="flex flex-row flex-wrap gap-2 mt-auto">
          <a
            href="/docs/y-agent/quick_start"
            rel="noreferrer noopener"
          >
            Quick Start
          </a>
        </li>
      </ul>
    </div>
  );
}

const searchItemVariants = cva(
  "flex flex-row items-center gap-2 rounded-md p-2 text-sm text-fd-popover-foreground"
);

function Search(): React.ReactElement {
  return (
    <div className="mt-6 rounded-lg bg-gradient-to-b from-fd-border p-px">
      <div className="flex select-none flex-col rounded-[inherit] bg-gradient-to-b from-fd-popover">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-fd-muted-foreground">
          <SearchIcon className="size-4" />
          Agent Trainer...
        </div>
        <div className="border-t p-4 text-fd-muted-foreground text-sm mb-6 ">
          {[
            " 自动日志分析",
            " 流程测试",
            " 单元测试",
            " 语料标注",
            " 快速生产私有领域语料",
            " 集成训练框架",
          ].map((v, i) => (
            <div key={v}>
              <Check  className="size-4 text-fd-muted-foreground" />
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
          产品亮点
        </h2>
        <MousePointer className="-ml-1 mt-8" />
      </div>
      <Highlight icon={TimerIcon} heading="灵活 & 快速.">
        高度开放的 UI 工作流组件。
        支持 单智能体 多智能体 混排，同时开放了底层提示词修改功能。
      </Highlight>
      <Highlight icon={RocketIcon} heading="高效集成.">
        可以将原有的 IT 系统，快速接入到智能场景中，实现自动化、智能化。
      </Highlight>
      <Highlight icon={LayoutIcon} heading="测试 & 训练.">
        集成了全面的测试功能，和定制的训练微调框架，包括预训练、微调、强化学习。
      </Highlight>
      <Highlight icon={ServerIcon} heading="日志追踪.">
        友好直观的日志查看界面，可以快速分析问题，同时支持自定义的 自动化日志 分析。
      </Highlight>
      <Highlight icon={KeyboardIcon} heading="RAG.">
        支持 文本文档、Excel文档，可与其他 RAG系统集成。
      </Highlight>
      <Highlight icon={PersonStandingIcon} heading="领域数据生产.">
        可以识别基础模型不懂的领域知识，并自动化进行数据采集、数据清洗、数据增强。
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2">
        <Icon className="size-5" />
        <h2 className="text-l font-medium">{heading}</h2>
      </div>
      <span className="text-sm font-medium text-fd-muted-foreground">{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative z-2 flex flex-col border-x border-t bg-fd-background/80 px-4 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] blur-2xl hidden dark:block"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          background:
            "repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)",
        }}
      />
      <div
        className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          background:
            "repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)",
        }}
      />
      <h1 className="mb-8 text-4xl font-medium md:hidden">开始 创建 您的</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        企业级 Agent 开发平台套件
        <br />
        
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-l">
        Y-Agent Studio 是一个面向开发人员的框架，简单、灵活、高效；支持测试、模型微调。<br />

        可以快速集成到，现有的企业 IT 环境中。
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link href="/docs">快速开始 →</Link>
      </div>
      <PreviewImages />
    </div>
  );
}

const feedback = [
  {
    avatar: "https://avatars.githubusercontent.com/u/124599",
    user: "shadcn",
    role: "Creator of Shadcn UI",
    message: `You know how you end up rebuilding a full docs site every time you start a new project? 

Fumadocs fixes this by giving you all the right blocks that you compose together.

Like headless docs to build exactly what you need.`,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/35677084",
    user: "Anthony Shew",
    role: "Turbo DX at Vercel",
    message: `Major shoutout to @fuma_nama for making fumadocs, a gorgeous documentation framework that composes beautifully into the App Router.`,
  },
  {
    user: "Aiden Bai",
    avatar: "https://avatars.githubusercontent.com/u/38025074",
    role: "Creator of Million.js",
    message: "fumadocs is the best Next.js docs framework",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/10645823",
    user: "David Blass",
    role: "Creator of Arktype",
    message: `I'd have no shot building @arktypeio docs that looked half this good without it 😍`,
  },
];

function Feedback() {
  return (
    <div className="relative border-x border-t pt-8 bg-fd-background">
      <div className="flex flex-row gap-6 justify-between px-6 mb-6 items-center">
        <p className="text-sm font-medium md:text-lg">
          将 IT 资产快速接入 智能场景  ！
        </p>
      </div>
    </div>
  );
}

function Introduction(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        <h3 className="text-xl font-semibold">从源码创建.</h3>
        <p className="mb-8 text-fd-muted-foreground">
          从源码安装启动 适合生产环境.
        </p>
        <CreateAppAnimation />
      </div>
      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        <h3 className="text-xl font-semibold">直接下载启动器.</h3>
        <p className="text-fd-muted-foreground">
          快速开始 直接下载启动器 适合测试研发.
        </p>
        <div className="relative flex flex-col">
          <CodeBlock
            lang="mdx"
            wrapper={{
              className: "absolute inset-x-2 top-0 shadow-lg",
            }}
            code={`
下载启动器

运行：
Y-Agent-Studio-Lancher.exe

## 仅支持Windows系统
          />
`}
          />
          <Files className="z-2 mt-40 shadow-xl">
            <Folder name="启动器包含的项目" defaultOpen>
              <File name="Y-Agent" />
              <File name="Y-Squeeze" />
            </Folder>
          </Files>
        </div>
      </div>
      <div className="col-span-full flex flex-col items-center gap-2 border-l border-t px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold">完整开源</h3>
        <p className="text-fd-muted-foreground">
          Y-Agent 框架 完整开源，可商用，不区分社区版 商用版，下载后意味着您可以获得全部功能。
        </p>

        <div className="mt-4 flex flex-row flex-wrap items-center gap-8">
          <a href="https://github.com/yafo-ai" rel="noreferrer noopener">
            <GithubLogo className="h-auto w-32" />
          </a>
          <a href="https://gitee.com/yafo-ai" rel="noreferrer noopener">
            <GiteeLogo className="h-auto w-32" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Contributing() {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <Heart fill="currentColor" className="text-orange-500 mb-4" />
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
        敏捷 安全 稳定.
      </h2>
      <p className="mb-4 text-fd-muted-foreground">
        提供从构思、开发部署、到训练的一整套框架，帮助你的 IT 团队 快速升实现 AI智能集成。
      </p>
      <div className="mb-8 flex flex-row items-center gap-2"></div>
    </div>
  );
}

function Features() {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <Feature
        icon={BookOpen}
        subheading="完整开源"
        heading="企业部署. 最优选择."
        description={
          <>
            <span className="font-medium text-fd-foreground">
              设计用于与内部系统快速集成:{" "}
            </span>
            <span>
              可以快速开发测试Agent流程，在您的内部服务器运行，和内部 IT 系统集成。
            </span>
          </>
        }
        className="overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 50%,var(--color-fd-secondary),var(--color-fd-background) 80%)",
        }}
      >
        <div className="mt-8 flex flex-col">
          <div className="flex flex-row w-fit bg-fd-secondary border rounded-full *:rounded-full"></div>
          <Image
            alt="Source"
            src={SourceImage}
            sizes="600px"
            className="-mt-16 w-[400px] min-w-[400px] invert pointer-events-none dark:invert-0"
          />
          <div className="z-2 mt-[-170px] w-[300px] overflow-hidden rounded-lg border border-fd-foreground/10 shadow-xl backdrop-blur-lg">
            <div className="flex flex-row items-center gap-2 bg-fd-muted/50 px-4 py-2 text-xs font-medium text-fd-muted-foreground">
              <FileEditIcon className="size-4" />
              WebAPI  MCP
            </div>
            <pre className="p-4 text-[13px]">
              <code className="grid">
                <span className="font-medium"># 启动!</span>
                <span>创建流程 → 集成API → 发布API</span>
                <span>{` `}</span>
                <span className="font-medium">{`<ServerComponent />`}</span>
              </code>
            </pre>
          </div>
        </div>
      </Feature>
      <Feature
        icon={CpuIcon}
        subheading="支持 预训练 SPF 强化学习"
        heading="解决语料生产难题，快速实现业务需求."
        description="可以通过流程日志生产语料，自动识别问题语料，自动识别模型不懂的知识。"
      >
        <Search />
      </Feature>
      <Feature
        icon={Terminal}
        subheading="可以快速与代码集成"
        heading="通过Web API 和 MCP 进行快速集成"
        description="将外部系统的API添加为插件工具。Agent 快速发布为Web API。"
      >
        <div className="relative">
          <div className="grid grid-cols-[1fr_2fr_1fr] h-[220px] *:border-fd-foreground/50 *:border-dashed mask-radial-circle mask-radial-from-white">
            <div className="border-r border-b" />
            <div className="border-b" />
            <div className="border-l border-b" />

            <div className="border-r" />
            <div className="w-[200px]" />
            <div className="border-l" />

            <div className="border-r border-t" />
            <div className="border-t" />
            <div className="border-l border-t" />
          </div>
          <code className="absolute inset-0 flex items-center justify-center">
            <code className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-fd-foreground font-medium">
              Web API Plugin and MCP Integration
            </code>
          </code>
        </div>
      </Feature>
      <Feature
        icon={PaperclipIcon}
        subheading="完善的文档支持，持续升级更新"
        heading="本项目已商业化使用，持续更新维护."
        description="无需担心后续的升级维护问题."
      >
        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/docs"
            className="rounded-xl bg-gradient-to-br from-transparent via-fd-primary p-px shadow-lg shadow-fd-primary/20"
          >
            <div className="rounded-[inherit] bg-fd-background bg-gradient-to-br from-transparent via-fd-primary/10 p-4 transition-colors hover:bg-fd-muted">
              <LayoutIcon />
              <h3 className="font-semibold">文档</h3>
              <p className="text-sm text-fd-muted-foreground">
                查看文档和指南。
              </p>
            </div>
          </Link>
        </div>
      </Feature>
    </div>
  );
}

function Feature({
  className,
  icon: Icon,
  heading,
  subheading,
  description,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon: LucideIcon;
  subheading: ReactNode;
  heading: ReactNode;
  description: ReactNode;
}): React.ReactElement {
  return (
    <div {...props}>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
        <Icon className="size-4" />
        <p>{subheading}</p>
      </div>
      <h2 className="mb-2 text-lg font-semibold">{heading}</h2>
      <p className="text-fd-muted-foreground">{description}</p>

      {props.children}
    </div>
  );
}
