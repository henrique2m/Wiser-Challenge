import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    const ErrorPash = error.path as string;

    validationErrors[ErrorPash] = error.message;
  });

  return validationErrors;
}
