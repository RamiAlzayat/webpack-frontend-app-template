import LayoutHelper from './layout.js';

const layoutHelper = new LayoutHelper({ name: 'Rami', age: 27 });

window.onload = () => {
  console.log('page is fully loaded');
  layoutHelper.appendH2();
};
