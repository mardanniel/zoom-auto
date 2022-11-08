export default function formDataValidation(keys: string[][], data: FormData): object {
  const result: { [key:string]: string } = {};

  keys.forEach((value) => {
    const dataVal = data.get(value[1]);
    if (dataVal === null || dataVal.toString() === ''){
      result[value[1]] = `${value[0]} is required.`;
    }
  });

  return result;
}
