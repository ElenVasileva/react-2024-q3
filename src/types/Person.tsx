export default interface Person {
  name: string;
  height: string;
  mass: string;
  url: string;
  gender: string;
  hair_color: string;
  skin_color: string;
}

export const getFakePerson = (name: string, id: number) => {
  return {
    name: name,
    height: '',
    mass: '',
    url: `/${id}`,
    gender: '',
    hair_color: '',
    skin_color: '',
  };
};
