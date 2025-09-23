import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';

import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from '@/public/banner.png';
import { Book, ComponentIcon, Pencil, PlusIcon, Server } from 'lucide-react';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <HomeLayout
      {...baseOptions(lang)}
      style={
        {
          '--spacing-fd-container': '1120px',
        } as object
      }
      links={[
        {
          type: 'menu',
          on: 'menu',
          text: '文档',
          items: [
            {
              text: '开始',
              url: '/docs',
              icon: <Book />,
            },
            {
              text: '流程',
              url: '/docs',
              icon: <ComponentIcon />,
            },
          ],
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs">文档</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent className="text-[15px]">
                <NavbarMenuLink href="/docs" className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Perview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage:
                          'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">开始</p>
                  <p className="text-fd-muted-foreground text-sm">
                    查看文档和指南。
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/no_time_read_this"
                  className="lg:col-start-2"
                >
                  <ComponentIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">概要</p>
                  <p className="text-fd-muted-foreground text-sm">
                    快速预览
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/y-agent/work_flow/wf_nodes/webapi_tool_node"
                  className="lg:col-start-2"
                >
                  <Server className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">WebAPI</p>
                  <p className="text-fd-muted-foreground text-sm">
                    接入IT系统
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <Pencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">套件介绍</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Y-Agent Studio 全套软件介绍
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/y-agent/quick_start"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <PlusIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">快速开始</p>
                  <p className="text-fd-muted-foreground text-sm">
                    学习如何安装和使用
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
    >
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">Y-Agent Studio</p>
          <p className="text-xs">
            Built with ❤️ by{' Y-Agent Studio Team'}
            
          </p>
        </div>
      </div>
    </footer>
  );
}
