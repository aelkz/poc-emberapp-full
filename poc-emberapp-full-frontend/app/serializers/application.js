import DS from 'ember-data';


// https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
// http://emberjs.com/api/data/classes/DS.RESTSerializer.html

export default DS.RESTSerializer.extend({
  //keyForAttribute: function(attr, method) {
  //  return Ember.String.underscore(attr).toUpperCase();
  //}
});
