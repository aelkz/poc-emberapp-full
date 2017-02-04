import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    {
      "title": "ID",
      "filteredBy": "id",
      "routeName": "view-product"
    },
    {
      "propertyName": "name",
      "routeName": "view-product",
      "title": "Name"
    }
  ]
});
