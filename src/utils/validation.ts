type RequiredMeetingValidationItems = {
  title: string,
  description: string,
  zoomlink: string
};

export default function formDataValidation(keys: RequiredMeetingValidationItems, data: FormData): object {
  const result: { [key:string]: string } = {};
  
  for (const [inputName, inputTitle] of Object.entries(keys)) {
    const dataVal = data.get(inputName);
    if (dataVal === null || dataVal.toString() === ''){
      result[inputName] = `${inputTitle} is required.`;
    }
  }

  console.log(result);

  return result;
}
