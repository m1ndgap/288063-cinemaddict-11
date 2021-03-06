import {createElement} from "../utils";

const createExtraCardBlock = (title) => {
  return (`<section class="films-list--extra films-list--${title.toLowerCase().split(` `).join(`-`)}">
        <h2 class="films-list__title">${title}</h2>
        <div class="films-list__container">

        </div>
  </section>`);
};

export default class ExtraCardBlock {
  constructor(title) {
    this._title = title;

    this._element = null;
  }

  getTemplate() {
    return createExtraCardBlock(this._title);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}
