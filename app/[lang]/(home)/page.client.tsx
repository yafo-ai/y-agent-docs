'use client';

import {
  Fragment,
  type HTMLAttributes,
  type HTMLProps,
  type ReactElement,
  type ReactNode,
  useEffect,
  useState,
} from 'react';
import { TerminalIcon } from 'lucide-react';
import Link from 'next/link';
import scrollIntoView from 'scroll-into-view-if-needed';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import MainImg from './main.png';
import NotebookImg from './notebook.png';
import MainImg3 from './main3.png';
import MainImg4 from './main4.png';
import DemoImg1 from './demo1.png';
import DemoImg2 from './demo2.png';
import DemoImg3 from './demo3.png';
import DemoImg4 from './demo4.png';
import DemoImg5 from './demo5.png';
import { cva } from 'class-variance-authority';

export function CreateAppAnimation() {
  const installCmd = 'git clone https://github.com/yafo-ai/y-agent-docs.git';
  const tickTime = 100;
  const timeCommandEnter = installCmd.length;
  const timeCommandRun = timeCommandEnter + 3;
  const timeCommandEnd = timeCommandRun + 3;
  const timeWindowOpen = timeCommandEnd + 1;
  const timeEnd = timeWindowOpen + 1;

  const [tick, setTick] = useState(timeEnd);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev >= timeEnd ? prev : prev + 1));
    }, tickTime);

    return () => {
      clearInterval(timer);
    };
  }, [timeEnd]);

  const lines: ReactElement[] = [];

  lines.push(
    <span key="command_type">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && (
        <div className="inline-block h-3 w-1 animate-pulse bg-white" />
      )}
    </span>,
  );

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>);
  }

  if (tick > timeCommandRun)
    lines.push(
      <Fragment key="command_response">
        {tick > timeCommandRun + 1 && (
          <>
            <span className="font-bold">◇ 安装依赖 </span>
            <span>│ pip install requirements.txt</span>
          </>
        )}
        {tick > timeCommandRun + 2 && (
          <>
            <span>│</span>
            <span className="font-bold">◆ 启动</span>
          </>
        )}
        {tick > timeCommandRun + 3 && (
          <>
            <span>│ python main.py</span>
            <span>│ 启动成功</span>
          </>
        )}
      </Fragment>,
    );

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (tick >= timeEnd) {
          setTick(0);
        }
      }}
    >
      {tick > timeWindowOpen && (
        <LaunchAppWindow className="absolute bottom-5 right-4 z-10 animate-in fade-in slide-in-from-top-10" />
      )}
      <pre className="overflow-hidden rounded-xl border text-[13px] shadow-lg">
        <div className="flex flex-row items-center gap-2 border-b px-4 py-2">
          <TerminalIcon className="size-4" />{' '}
          <span className="font-bold">Terminal</span>
          <div className="grow" />
          <div className="size-2 rounded-full bg-red-400" />
        </div>
        <div className="min-h-[200px] bg-gradient-to-b from-fd-card">
          <code className="grid p-4">{lines}</code>
        </div>
      </pre>
    </div>
  );
}

function LaunchAppWindow(
  props: HTMLAttributes<HTMLDivElement>,
): React.ReactElement {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden rounded-md border bg-fd-background shadow-xl',
        props.className,
      )}
    >
      <div className="relative flex h-6 flex-row items-center border-b bg-fd-muted px-4 text-xs text-fd-muted-foreground">
        <p className="absolute inset-x-0 text-center">localhost:8010</p>
      </div>
      <div className="p-4 text-sm">Application started successfully.</div>
    </div>
  );
}

export function WhyInteractive(props: {
  codeblockTheme: ReactNode;
  codeblockSearchRouter: ReactNode;
  codeblockInteractive: ReactNode;
  typeTable: ReactNode;
  codeblockMdx: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const items = [
    '电商客服助理',
    '商业客户分析',
    '法律文件审核',
    'HR流程自动化',
    '系统自动监控',
    '自动生产语料',
    '集成模型训练',
  ];

  return (
    <div
      id="why-interactive"
      className="flex flex-col-reverse gap-3 md:flex-row md:min-h-[380px]"
    >
      <div className="flex flex-col">
        {items.map((item, i) => (
          <button
            key={item}
            ref={(element) => {
              if (!element || i !== active) return;

              scrollIntoView(element, {
                behavior: 'smooth',
                boundary: document.getElementById('why-interactive'),
              });
            }}
            type="button"
            className={cn(
              'transition-colors text-nowrap border border-transparent rounded-lg px-3 py-2.5 text-start text-sm text-fd-muted-foreground font-medium',
              i === active
                ? 'text-fd-primary bg-fd-primary/10 border-fd-primary/10'
                : 'hover:text-fd-accent-foreground/80',
            )}
            onClick={() => {
              setActive(i);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <style>
        {`
        @keyframes why-interactive-x {
          from {
            width: 0px;
          }
          
          to {
            width: 100%;
          }
        }`}
      </style>

      <div className="flex-1 p-4 border border-fd-primary/10 bg-fd-card/40 rounded-lg shadow-lg">
        {active === 0 ? (
          
            <pre className="p-4 text-[13px]">
              <Image src={DemoImg1} alt="preview" priority className="rounded-lg mb-4" />
            </pre>
        ) : null}

        {active === 1 ? (
          <WhyPanel>
              <Image src={DemoImg2} alt="preview" priority className="rounded-lg mb-4" />
          </WhyPanel>
        ) : null}

        {active === 2 ? (
          <WhyPanel>
              <Image src={DemoImg3} alt="preview" priority className="rounded-lg mb-4" />          
          </WhyPanel>
        ) : null}
        {active === 3 ? (
          <WhyPanel>
              <Image src={DemoImg4} alt="preview" priority className="rounded-lg mb-4" />    
          </WhyPanel>
        ) : null}
        {active === 4 ? (
          <WhyPanel>
              <Image src={DemoImg5} alt="preview" priority className="rounded-lg mb-4" />    
          </WhyPanel>
        ) : null}
        {active === 5 ? (
          <WhyPanel>
            <h3>支持语料训练集的自动化生成</h3>
          <p>语料生产在垂直领域的应用非常普遍，但在企业级应用中，往往需要大量的手动工作。</p>
          <p>Y-Agent 提供了自动化语料生成的能力，通过智能的识别技术，可以自动挖掘模型不知道的知识，
            并针对性自动生成符合业务需求的语料。</p>
          
            <h3>自动化分析</h3>
          <p>借助套件内的 Y-Squeeze 框架，可以自动分析出模型在处理问题时，缺少的领域知识。</p>
            <h3>人工方式分析</h3>
          <p>当发现模型输出不符合预期的时候，点击“添加语料”按钮。</p>

          <p>依靠 生成参考输出 功能，辅助编辑。可以快速生成语料，并将其添加到模型训练集中。 </p>
            
            <div className="mt-4 flex flex-row items-center gap-1.5 not-prose">
              <Link
                href="/docs/y-agent/demo/auto-add-training-data"
                className={cn(buttonVariants({ variant: 'primary' ,size: 'sm'}))}
              >
                自动生产预训练语料
              </Link>
              <Link
                href="/docs/y-agent/corpus/add-corpus"
                className={cn(buttonVariants({ variant: 'primary' ,size: 'sm'}))}
              >
                手工添加语料
              </Link>
            </div>
          </WhyPanel>
        ) : null}
        
        
        {active === 6 ? (
          <WhyPanel>
            <h3>让模型后训练更加简单.</h3>
            <p>
              本套件集成训练框架，支持继续预训练、指令微调、强化学习，能够快速完成模型训练，且训练效果好，对模型能力破坏极小。
            </p>
            {props.typeTable}
            <p>
              本训练框架常见训练框架不同，具有算力需求低，训练效果好的优势。甚至单卡即可完成7b模型的强化学习。
            </p>

            <div className="mt-6 flex flex-row items-center gap-1.5 not-prose">
              <Link
                href="/docs/y-trainer/introduction"
                className={cn(buttonVariants({ variant: 'secondary' ,size: 'sm'}))}
              >
                训练框架Y-Trainer
              </Link>
              <Link
                href="/docs/y-squeeze/introduction"
                className={cn(buttonVariants({ variant: 'secondary' ,size: 'sm'}))}
              >
                分析框架Y-Squeeze
              </Link>
            </div>
          </WhyPanel>
        ) : null}
        {active === 7 ? (
          <WhyPanel>
            <h3>Interactive docs with React.</h3>
            <p>
              Fumadocs offers many useful components, from File Tree, Tabs, to
              Zoomable Image.
            </p>
            {props.codeblockInteractive}
            <Link
              href="/docs/ui/components"
              className={cn(buttonVariants(), 'not-prose')}
            >
              View Components
            </Link>
          </WhyPanel>
        ) : null}
      </div>
    </div>
  );
}

function WhyPanel(props: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        'duration-700 animate-in fade-in text-sm prose',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

const previewButtonVariants = cva(
  'w-22 h-9 text-sm font-medium transition-colors rounded-full',
  {
    variants: {
      active: {
        true: 'text-fd-primary-foreground',
        false: 'text-fd-muted-foreground',
      },
    },
  },
);
export function PreviewImages() {
  const [active, setActive] = useState(0);
  const previews = [
    {
      image: MainImg,
      name: '套件',
    },
    {
      image: NotebookImg,
      name: '智能体',
    },
    {
      image: MainImg3,
      name: '语料',
    },
    {
      image: MainImg4,
      name: '训练',
    },
  ];

  return (
    <div className="mt-12 min-w-[800px] overflow-hidden xl:-mx-12 dark:[mask-image:linear-gradient(to_top,transparent,white_40px)]">
      <div className="absolute flex flex-row left-1/2 -translate-1/2 bottom-4 z-2 p-1 rounded-full bg-fd-card border shadow-xl dark:shadow-fd-background">
        <div
          role="none"
          className="absolute bg-fd-primary rounded-full w-22 h-9 transition-transform z-[-1]"
          style={{
            transform: `translateX(calc(var(--spacing) * 22 * ${active}))`,
          }}
        />
        {previews.map((item, i) => (
          <button
            key={i}
            className={cn(previewButtonVariants({ active: active === i }))}
            onClick={() => setActive(i)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {previews.map((item, i) => (
        <Image
          key={i}
          src={item.image}
          alt="preview"
          priority
          className={cn(
            'w-full select-none duration-1000 animate-in fade-in -mb-60 slide-in-from-bottom-12 lg:-mb-40',
            active !== i && 'hidden',
          )}
        />
      ))}
    </div>
  );
}
