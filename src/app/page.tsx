import { getData } from '../api/service';
import Page from '../components/Page/Page';

export default async function MainPage() {
  const { data, pageParams } = await getData({});
  return <Page data={data} pageParams={pageParams} />;
}
