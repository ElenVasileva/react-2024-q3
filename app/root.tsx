import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

import appStylesHref from './app.css?url';
import indexStylesHref from './index.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
  { rel: 'stylesheet', href: indexStylesHref },
];

import { json, Links, Meta, Scripts, useLoaderData } from '@remix-run/react';
import { getData } from './services/api';
import Page from 'src/components/Page/Page';
import Layout from 'src/components/Layout/Layout';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get('search');
  const pageParam = url.searchParams.get('page');
  const idParam = params.selectedCard;

  const data = await getData({ pageParam, searchParam, idParam });
  return json({ data });
};

export default function App() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Page data={data.data} pageParams={data.pageParams} />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
