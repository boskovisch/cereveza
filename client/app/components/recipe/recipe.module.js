import angular from 'angular';
import recipeComponent from './recipe.component';

const recipeModule = angular.module('recipe', [])
  .component('recipe', recipeComponent);
export default recipeModule;