import ListData from './ListData';
import PageParams from './PageParams';
import Person from './Person';

export interface PageData {
  person?: Person;
  data: ListData;
  pageParams: PageParams;
}
