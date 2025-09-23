import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { i18n } from '@/lib/i18n';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { transformerOpenAPI } from 'fumadocs-openapi/server';
import { createMDXSource } from 'fumadocs-mdx';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  i18n,
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    transformers: [transformerOpenAPI()],
  },
});




export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;