import { useLoaderData, useNavigation } from '@remix-run/react';
import { json, LoaderFunctionArgs } from '@remix-run/node';

import DetailedItem from 'src/components/DetailedItem/DetailedItem';
import { getCard } from '~/services/api';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParam = url.searchParams.get('search');
  const pageParam = url.searchParams.get('page');
  const idParam = params.selectedCard;
  const data = await getCard({ pageParam, searchParam, idParam });

  return json({ data });
};

export default function DetailsPage() {
  const { data } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  if (navigation.state === 'loading') return <>Loading...</>;
  return !!data.person && <DetailedItem person={data.person} pageParams={data.pageParams} />;
}
