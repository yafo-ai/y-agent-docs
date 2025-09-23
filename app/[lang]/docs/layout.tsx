import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, linkItems, logo } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { LargeSearchToggle } from 'fumadocs-ui/components/layout/search-toggle';
import { Sparkles } from 'lucide-react';
import { AISearchTrigger } from '@/components/ai';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import 'katex/dist/katex.min.css';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const base = baseOptions(lang);

  return (
    <DocsLayout
      {...base}
      tree={source.pageTree[lang]}
      // just icon items
      links={linkItems.filter((item) => item.type === 'icon')}
      searchToggle={{
        components: {
          lg: (
            <div className="flex gap-1.5 max-md:hidden">
              <LargeSearchToggle className="flex-1" />
              <AISearchTrigger
                aria-label="Ask AI"
                className={cn(
                  buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                    className: 'text-fd-muted-foreground',
                  }),
                )}
              >
                <Sparkles className="size-4" />
              </AISearchTrigger>
            </div>
          ),
        },
      }}
      nav={{
        ...base.nav,
        title: (
          <>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8222" width="32" height="32"><path d="M360.8064 85.3248c16.3584 91.264 62.976 181.1456 139.904 269.6704 59.4688 68.48 94.3872 168.0128 104.704 298.624H419.84c-8.0128-82.7648-44.8768-157.0048-110.6432-222.72-96.8192-96.7168-150.0928-211.9168-159.8464-345.5744h211.456z" fill="#00C7FF" p-id="8223"></path><path d="M874.6752 85.3248c-16.2816 147.968-71.0656 268.1856-164.352 360.6016-62.0032 61.3888-97.2544 130.6368-105.7536 207.7184H418.56c10.3424-130.6368 45.2608-230.1696 104.7296-298.6496 76.928-88.5248 123.5456-178.432 139.904-269.6704z" fill="#0063FB" p-id="8224"></path><path d="M850.1248 462.2848c-138.368 28.5952-207.5392 100.8128-207.5392 216.7296 0 173.824-26.5216 197.632-115.0464 238.336h184.0128a138.9568 138.9568 0 0 0 138.9568-139.1616l-0.384-315.904z" fill="#FBAE00" p-id="8225"></path><path d="M512 368.768c50.9952 65.6896 81.792 156.8512 92.4672 273.536l1.3824 0.0256v95.1808l-0.1024 2.1248 0.0512 0.3328-0.0768 0.1536-0.0256 1.0752a42.752 42.752 0 0 1-42.5984 39.0656h-143.9488v-137.9328l2.2272-0.0256-1.1776-6.3744c11.136-113.6128 41.728-202.6752 91.8016-267.1616z" fill="#0005C9" p-id="8226"></path></svg>
            <span className="font-medium [.uwu_&]:hidden max-md:hidden">
            Y-Agent Studio
            </span>
          </>
        ),
        children: (
          <AISearchTrigger
            className={cn(
              buttonVariants({
                variant: 'secondary',
                size: 'sm',
                className:
                  'absolute left-1/2 top-1/2 -translate-1/2 text-fd-muted-foreground rounded-full gap-2 md:hidden',
              }),
            )}
          >
            <Sparkles className="size-4.5 fill-current" />
            Ask AI
          </AISearchTrigger>
        ),
      }}
      sidebar={{
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node);
            if (!meta || !node.icon) return option;

            const color = `var(--${meta.path.split('/')[0]}-color, var(--color-fd-foreground))`;

            return {
              ...option,
              icon: (
                <div
                  className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
                  style={
                    {
                      '--tab-color': color,
                    } as object
                  }
                >
                  {node.icon}
                </div>
              ),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
