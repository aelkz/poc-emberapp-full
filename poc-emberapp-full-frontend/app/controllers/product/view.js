import Ember from 'ember';

/**
 * http://onechiporenko.github.io/ember-models-table
 */

export default Ember.Controller.extend({
  isAvailable: Ember.computed('status', function(key, value) {
    return this.get('status') == 1;
  })
});
