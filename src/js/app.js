import { anchorScrollInit } from './anchor-scroll';
import { initMobileMenu } from './burger';
import { feedbackFormInit } from './feedback-form';

const viewportWidth = window.innerWidth;

if (viewportWidth < 1200) {
  initMobileMenu();
}

anchorScrollInit();
feedbackFormInit();
