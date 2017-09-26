import angular from 'angular';
    import RecipeModule from './recipe/recipe.module';

const ComponentsModule = angular.module('app.components',[
       RecipeModule.name 
]);

export default ComponentsModule;