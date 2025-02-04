/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { renderToStream, RenderToStreamOptions } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import Root, { ShellRoot } from './root';

export default function (opts: RenderToStreamOptions) {
//  return renderToStream(<Root />, {
  return renderToStream(<ShellRoot />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: 'en-us',
      ...opts.containerAttributes,
    },
    prefetchStrategy: {
      implementation: {
        linkInsert: null,
        workerFetchInsert: null,
        prefetchEvent: 'always',
      },
    },
    qwikLoader: {
      include: 'always',
    },
    streaming: {
      inOrder: {
        strategy: 'auto',
        maximunInitialChunk: 0,
        maximunChunk: 0,
      },
    },
  });
}
