import css from './Button.module.css';

export default function Button({ nextPage }) {
  return (
    <button className={css['button']} type="button">
      {' '}
      Load more{' '}
    </button>
  );
}

//============================================

// export default class Button {
//   constructor({ selector, isHidden }) {
//     this.button = this.getButton(selector);
//     if (isHidden) this.hide();
//     else this.show();
//   }

//   //* знаходимо потрібну кнопку
//   getButton(selector) {
//     return document.querySelector(selector);
//   }

//   //* додаємо клас на кнопку
//   hide() {
//     this.button.classList.add('hidden');
//   }
//   //* видаляємо клас з кнопки
//   show() {
//     this.button.classList.remove('hidden');
//   }

//   //* показуємо що контент підвантажується
//   disabled() {
//     this.button.disabled = true;
//     this.button.textContent = 'Loading...';
//   }
//   enable() {
//     this.button.disabled = false;
//     this.button.textContent = 'Loading more';
//   }
// }
