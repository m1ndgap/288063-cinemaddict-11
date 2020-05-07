export const createExtraCardBlock = (title) => {
  return (`
      <section class="films-list--extra films-list--${title.toLowerCase().split(` `).join(`-`)}">
        <h2 class="films-list__title">${title}</h2>
        <div class="films-list__container">

        </div>
  </section>
`);
};
