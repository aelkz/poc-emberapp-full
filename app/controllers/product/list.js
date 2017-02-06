import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    {
      "title": "ID",
      "filteredBy": "id",
      "routeName": "product.view"
    },
    {
      "propertyName": "name",
      "routeName": "product.view",
      "title": "Name"
    },
    {
      "title": "Delete",
      "template": "product/delete"
    }
  ]
});
