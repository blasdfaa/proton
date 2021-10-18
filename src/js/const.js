export const EMAIL_VALID_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const MAX_LENGTH_MESSAGE = 500;
export const SUCCESS_FORM_MESSAGE_TEXT = 'Ваше сообщение успешно отправлено';
export const FAILURE_FORM_MESSAGE_TEXT = 'Не удалось отправить сообщение';

export const FormMessageType = {
  FAILURE: 'failure',
  SUCCESS: 'success',
};
