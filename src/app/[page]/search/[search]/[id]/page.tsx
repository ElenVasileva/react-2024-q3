import { getData } from '../../../../../api/service';
import Page from '../../../../../components/Page/Page';

export default async function PageWithPageNumberAndSearchAndCard({
  params: { id, page, search },
}: {
  params: { id: string; page: string; search: string };
}) {
  const { data, pageParams, person } = await getData({
    pageParam: page,
    searchParam: search,
    idParam: id,
  });
  return <Page data={data} pageParams={pageParams} person={person} />;
}
