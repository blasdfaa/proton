const $7633a1648f81ca74$export$4b1ecd332c2c758e = ()=>{
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor)=>{
        anchor.addEventListener('click', (e)=>{
            e.preventDefault();
            const hash = anchor.getAttribute('href');
            const target = document.querySelector(hash);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            history.pushState(null, null, hash);
        });
    });
};


const $98f41e1efc81550f$export$c824afb4e943fa48 = ()=>{
    const page = document.querySelector('html');
    const burgerButton = document.querySelector('.header-menu__toggle');
    burgerButton.addEventListener('click', ()=>{
        page.classList.toggle('js-menu-open');
        const isMenuOpen = page.classList.contains('js-menu-open');
        if (isMenuOpen) burgerButton.setAttribute('aria-expanded', 'true');
        else burgerButton.setAttribute('aria-expanded', 'false');
    });
};


const $5036622db34bedfa$export$36297dca978b20e6 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const $5036622db34bedfa$export$dd9363c404a4ccc9 = 500;
const $5036622db34bedfa$export$a90c76ea28e383fa = 'Ваше сообщение успешно отправлено';
const $5036622db34bedfa$export$7ef2d539e25b2122 = 'Не удалось отправить сообщение';
const $5036622db34bedfa$export$4acf637ad0d06c5a = {
    FAILURE: 'failure',
    SUCCESS: 'success'
};


const $bc86c9caf6e0da68$export$9cc932ce80ba3c29 = (message, type = 'success', onSuccess = Function.prototype, onFailure = Function.prototype)=>{
    const container = document.createElement('div');
    const messageText = document.createElement('p');
    const button = document.createElement('button');
    container.classList.add('feedback-form__alert');
    messageText.classList.add('feedback-form__alert-message');
    button.classList.add('btn-blue', 'feedback-form__alert-button');
    messageText.textContent = message;
    switch(type){
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


const $b4dfb3fc1fbf646d$export$e530486184d838d7 = ()=>{
    const formSection = document.querySelector('.feedback-form');
    const formSectionContainer = document.querySelector('.feedback-form .container');
    const messageInput = document.querySelector('.feedback-form__field--message');
    const emailInput = document.querySelector('.feedback-form__field--email');
    const messageTextCounter = document.querySelector('.feedback-form__message-counter');
    const feedbackForm = document.querySelector('.feedback-form__form');
    let oldFormElements = [];
    const isEmailValid = (email)=>$5036622db34bedfa$export$36297dca978b20e6.test(String(email).toLowerCase())
    ;
    const hideFormElements = ()=>{
        while(formSectionContainer.firstChild){
            oldFormElements.push(formSectionContainer.firstChild);
            formSectionContainer.removeChild(formSectionContainer.firstChild);
        }
    };
    const showFormElements = ()=>{
        formSection.querySelector('.feedback-form__alert').remove();
        formSection.classList.remove('feedback-form--sent');
        oldFormElements.forEach((item)=>{
            formSectionContainer.appendChild(item);
        });
        feedbackForm.reset();
    };
    emailInput.addEventListener('input', (e)=>{
        var ref;
        const target = e === null || e === void 0 ? void 0 : (ref = e.target) === null || ref === void 0 ? void 0 : ref.value;
        if (target && !isEmailValid(target)) emailInput.setCustomValidity('Введите правильный Email');
        else if (!target) emailInput.setCustomValidity('Поле не должно быть пустым');
        else emailInput.setCustomValidity('');
        emailInput.reportValidity();
    });
    messageInput.addEventListener('input', (e)=>{
        var ref;
        const value = e === null || e === void 0 ? void 0 : (ref = e.target) === null || ref === void 0 ? void 0 : ref.value;
        if (value.length > $5036622db34bedfa$export$dd9363c404a4ccc9) messageInput.setCustomValidity(`Количество символов не должно превышать ${$5036622db34bedfa$export$dd9363c404a4ccc9}`);
        else if (!value) messageInput.setCustomValidity('Поле не должно быть пустым');
        else messageInput.setCustomValidity('');
        messageTextCounter.textContent = `${+messageInput.value.length}/${$5036622db34bedfa$export$dd9363c404a4ccc9}`;
        messageInput.reportValidity();
    });
    const successMessage = $bc86c9caf6e0da68$export$9cc932ce80ba3c29($5036622db34bedfa$export$a90c76ea28e383fa, $5036622db34bedfa$export$4acf637ad0d06c5a.SUCCESS, ()=>showFormElements()
    );
    const failureMessage = $bc86c9caf6e0da68$export$9cc932ce80ba3c29($5036622db34bedfa$export$7ef2d539e25b2122, $5036622db34bedfa$export$4acf637ad0d06c5a.FAILURE);
    feedbackForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        hideFormElements();
        formSection.classList.add('feedback-form--sent');
        try {
            formSectionContainer.appendChild(successMessage);
        } catch (e1) {
            formSectionContainer.appendChild(failureMessage);
        }
    });
};


const $8463ea33f996e699$var$viewportWidth = window.innerWidth;
if ($8463ea33f996e699$var$viewportWidth < 1200) $98f41e1efc81550f$export$c824afb4e943fa48();
$7633a1648f81ca74$export$4b1ecd332c2c758e();
$b4dfb3fc1fbf646d$export$e530486184d838d7();


//# sourceMappingURL=index.5656a6d0.js.map
