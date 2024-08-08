import PageParams from '../types/PageParams';
import Person from '../types/Person';

const createUrl = (pageParams: PageParams) => {
  const cardIdUrl = pageParams.selectedCard ? `/${pageParams.selectedCard}` : '/';
  const currentSearchUrl = pageParams.search ? `?search=${pageParams.search}&` : '?';
  const currentPageUrl = pageParams.page ? `page=${pageParams.page}` : '';
  return `${cardIdUrl}${currentSearchUrl}${currentPageUrl}`;
};

const createFileContent = (checkedItems: Person[]) => {
  const separator = ',';
  let dataString = `Name${separator}Gender${separator}Height\n`;
  dataString += checkedItems
    .map((person: Person) => {
      return `${person.name}${separator}${person.gender}${separator}${person.height}`;
    })
    .join('\n');
  return new Blob([dataString]);
};

export { createUrl, createFileContent };
