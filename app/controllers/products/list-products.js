import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    {
      "title": "ID",
      "filteredBy": "id",
      "routeName": "products.id"
    },
    {
      "propertyName": "name",
      "routeName": "products.name",
      "title": "Name"
    }
  ]
});
