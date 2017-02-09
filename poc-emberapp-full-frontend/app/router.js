import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('product', function() {
    this.route('list', {path: ''});
    this.route('new',  {path: '/new'});
    this.route('view', {path: '/:id'});
    this.route('edit', {path: '/:id/edit'});
  });

  this.route('protected');
  this.route('auth-error');
  this.route('login');
  this.route('callback');
  this.route('user-profile');
});

export default Router;
