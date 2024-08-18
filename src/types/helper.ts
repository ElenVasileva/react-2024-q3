import { InputData } from './InputData';
import { StoredData } from './StoredData';

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (!reader.result) throw new Error('Input Data is invalid');
      return resolve(reader.result.toString());
    };
    reader.onerror = reject;
  });

const inputData2Stored = async (data: InputData): Promise<StoredData> => {
  if (!data.name || !data.age || !data.email || !data.password || !data.gender || !data.country || !data.image) {
    throw new Error('Input Data is invalid');
  }
  const result: StoredData = {
    name: data.name,
    age: data.age,
    email: data.email,
    password: data.password,
    gender: data.gender,
    country: data.country,
    image: await toBase64(data.image[0]),
  };
  return result;
};

export { inputData2Stored };
