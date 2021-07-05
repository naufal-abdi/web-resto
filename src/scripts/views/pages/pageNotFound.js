import { createPageNotFoundTemplate } from '../templates/template-creator';

const PageNotFound = {
  async render() {
    return `
      <div class="resto" id="restoData">        
        <div class="resto-cards" id="restoCards">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restoCards');
    restaurantsContainer.innerHTML = createPageNotFoundTemplate();
  },
};

export default PageNotFound;
