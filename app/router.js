import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('products', function() {
    this.route('list-products', {path: ''});
    this.route('new-product',   {path: '/new'});
    this.route('view-product',  {path: '/:id'});
  });
});

export default Router;
