import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    event => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      });
    }
  ];
};
