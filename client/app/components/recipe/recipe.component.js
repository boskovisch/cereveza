import template from './recipe.component.html';
import controller from './recipe.controller.js';
import './recipe.component.scss';

let recipeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'recipeController'
};
export default recipeComponent;