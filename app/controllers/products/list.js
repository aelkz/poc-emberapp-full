import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    {
      "title": "ID",
      "filteredBy": "id",
      "routeName": "products.view"
    },
    {
      "propertyName": "name",
      "routeName": "products.view",
      "title": "Name"
    }
  ]
});
