export const createAlertMessage = (
  message,
  type = 'success',
  onSuccess = Function.prototype,
  onFailure = Function.prototype,
) => {
  const container = document.createElement('div');
  const messageText = document.createElement('p');
  const button = document.createElement('button');

  container.classList.add('feedback-form__alert');
  messageText.classList.add('feedback-form__alert-message');
  button.classList.add('btn-blue', 'feedback-form__alert-button');

  messageText.textContent = message;

  switch (type) {
    case 'success':
      button.textContent = 'ОК';
      button.addEventListener('click', onSuccess);
      break;
    case 'failure':
      button.textContent = 'Попробовать еще раз';
      button.addEventListener('click', onFailure);
      break;
  }

  container.appendChild(messageText);
  container.appendChild(button);

  return container;
};
