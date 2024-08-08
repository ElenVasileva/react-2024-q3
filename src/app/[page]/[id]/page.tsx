import { getData } from '../../../api/service';
import Page from '../../../components/Page/Page';

export default async function PageWithPageNumberAndCard({
  params: { id, page },
}: {
  params: { id: string; page: string };
}) {
  const { data, pageParams, person } = await getData({ pageParam: page, idParam: id });
  return <Page data={data} pageParams={pageParams} person={person} />;
}
