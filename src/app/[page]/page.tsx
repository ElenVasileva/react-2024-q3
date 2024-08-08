import { getData } from '../../api/service';
import Page from '../../components/Page/Page';

export default async function PageWithPageNumber({
  params: { page },
}: {
  params: { page: string };
}) {
  const { data, pageParams } = await getData({ pageParam: page });
  return <Page data={data} pageParams={pageParams} />;
}
