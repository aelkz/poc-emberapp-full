import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

/**
 * http://codepen.io/mthouve/pen/gbebEr
 * http://www.zertz.ca/formatting-dates-with-ember-js-handlebars-and-moment-js/
 * https://momentjs.com/
 * https://github.com/stefanpenner/ember-moment
 */

this.application.IsodateTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    console.log(serialized);
    return Ember.isEmpty(serialized) ? null : moment(serialized, 'YYYY-MM-DD').toDate().toISOString();
  },
  serialize: function(deserialized) {
    console.log(deserialized);
    return Ember.isEmpty(deserialized) ? null : moment(deserialized).format('YYYY-MM-DD');
  }
});

this.application.register('transform:isodate', this.application.IsodateTransform);
