import {
  EMAIL_VALID_REGEX,
  FAILURE_FORM_MESSAGE_TEXT,
  FormMessageType,
  MAX_LENGTH_MESSAGE,
  SUCCESS_FORM_MESSAGE_TEXT,
} from './const';
import { createAlertMessage } from './alert-form-message';

export const feedbackFormInit = () => {
  const formSection = document.querySelector('.feedback-form');
  const formSectionContainer = document.querySelector('.feedback-form .container');
  const messageInput = document.querySelector('.feedback-form__field--message');
  const emailInput = document.querySelector('.feedback-form__field--email');
  const messageTextCounter = document.querySelector('.feedback-form__message-counter');
  const feedbackForm = document.querySelector('.feedback-form__form');

  let oldFormElements = [];

  const isEmailValid = (email) => EMAIL_VALID_REGEX.test(String(email).toLowerCase());

  const hideFormElements = () => {
    while (formSectionContainer.firstChild) {
      oldFormElements.push(formSectionContainer.firstChild);
      formSectionContainer.removeChild(formSectionContainer.firstChild);
    }
  };

  const showFormElements = () => {
    formSection.querySelector('.feedback-form__alert').remove();
    formSection.classList.remove('feedback-form--sent');

    oldFormElements.forEach((item) => {
      formSectionContainer.appendChild(item);
    });

    feedbackForm.reset();
  };

  emailInput.addEventListener('input', (e) => {
    const target = e?.target?.value;

    if (target && !isEmailValid(target)) {
      emailInput.setCustomValidity('Введите правильный Email');
    } else if (!target) {
      emailInput.setCustomValidity('Поле не должно быть пустым');
    } else {
      emailInput.setCustomValidity('');
    }

    emailInput.reportValidity();
  });

  messageInput.addEventListener('input', (e) => {
    const value = e?.target?.value;

    if (value.length > MAX_LENGTH_MESSAGE) {
      messageInput.setCustomValidity(`Количество символов не должно превышать ${MAX_LENGTH_MESSAGE}`);
    } else if (!value) {
      messageInput.setCustomValidity('Поле не должно быть пустым');
    } else {
      messageInput.setCustomValidity('');
    }

    messageTextCounter.textContent = `${+messageInput.value.length}/${MAX_LENGTH_MESSAGE}`;
    messageInput.reportValidity();
  });

  const successMessage = createAlertMessage(
    SUCCESS_FORM_MESSAGE_TEXT,
    FormMessageType.SUCCESS,
    () =>
      showFormElements(),
  );
  const failureMessage = createAlertMessage(FAILURE_FORM_MESSAGE_TEXT, FormMessageType.FAILURE);

  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    hideFormElements();

    formSection.classList.add('feedback-form--sent');

    try {
      formSectionContainer.appendChild(successMessage);
    } catch (e) {
      formSectionContainer.appendChild(failureMessage);
    }
  });
};
