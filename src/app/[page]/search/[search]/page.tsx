import { getData } from '../../../../api/service';
import Page from '../../../../components/Page/Page';

export default async function PageWithPageNumberAndSearch({
  params: { page, search },
}: {
  params: { page: string; search: string };
}) {
  const { data, pageParams } = await getData({ pageParam: page, searchParam: search });
  return <Page data={data} pageParams={pageParams} />;
}
