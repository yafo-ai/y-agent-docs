import { i18n } from '@/lib/i18n';

import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import { AlbumIcon, Heart, LayoutTemplate } from 'lucide-react';
import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FumadocsIcon } from '@/app/layout.client';
import Logo from '@/public/logo.png';

export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: '快速开始',
    url: '/docs/y-agent/quick_start',
    active: 'nested-url',
    type:'icon',
  },
  {
    text: '快速开始',
    url: '/docs/y-agent/quick_start',
    icon: <LayoutTemplate />,
    active: 'url',
  },
  {
    text: '工作流',
    url: '/docs/y-agent/work_flow/concept',
    icon: <LayoutTemplate />,
    active: 'url',
  },
  {
    text: 'DownLoad',
    url: '/docs/download',
    icon: <LayoutTemplate />,
    active: 'url',
  },
 
  
];

export const logo = (
  <>
    <Image
      alt="Fumadocs"
      src={Logo}
      sizes="100px"
      className="hidden w-20 md:w-24 [.uwu_&]:block"
      aria-label="Y-Agent Studio"
    />

    <FumadocsIcon className="size-5 [.uwu_&]:hidden" fill="currentColor" />
  </>
);

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
           <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8222"
            width="20"
            height="20"
          >
            <path
              d="M360.8064 85.3248c16.3584 91.264 62.976 181.1456 139.904 269.6704 59.4688 68.48 94.3872 168.0128 104.704 298.624H419.84c-8.0128-82.7648-44.8768-157.0048-110.6432-222.72-96.8192-96.7168-150.0928-211.9168-159.8464-345.5744h211.456z"
              fill="#00C7FF"
              p-id="8223"
            ></path>
            <path
              d="M874.6752 85.3248c-16.2816 147.968-71.0656 268.1856-164.352 360.6016-62.0032 61.3888-97.2544 130.6368-105.7536 207.7184H418.56c10.3424-130.6368 45.2608-230.1696 104.7296-298.6496 76.928-88.5248 123.5456-178.432 139.904-269.6704z"
              fill="#0063FB"
              p-id="8224"
            ></path>
            <path
              d="M850.1248 462.2848c-138.368 28.5952-207.5392 100.8128-207.5392 216.7296 0 173.824-26.5216 197.632-115.0464 238.336h184.0128a138.9568 138.9568 0 0 0 138.9568-139.1616l-0.384-315.904z"
              fill="#FBAE00"
              p-id="8225"
            ></path>
            <path
              d="M512 368.768c50.9952 65.6896 81.792 156.8512 92.4672 273.536l1.3824 0.0256v95.1808l-0.1024 2.1248 0.0512 0.3328-0.0768 0.1536-0.0256 1.0752a42.752 42.752 0 0 1-42.5984 39.0656h-143.9488v-137.9328l2.2272-0.0256-1.1776-6.3744c11.136-113.6128 41.728-202.6752 91.8016-267.1616z"
              fill="#0005C9"
              p-id="8226"
            ></path>
          </svg>
          Y-Agent Studio
        </>
      ),
    },
  };
}

// import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

