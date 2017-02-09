import Ember from 'ember';

/**
 * This controller was created just to format the models-table behavior.
 * http://onechiporenko.github.io/ember-models-table
 */

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
      "propertyName": "description",
      "routeName": "product.view",
      "title": "Description"
    },
    {
      "propertyName": "acquisitionDate",
      "routeName": "product.view",
      "title": "Acquisition Date"
    },
    {
      "propertyName": "category",
      "routeName": "product.view",
      "title": "Category"
    },
    {
      "propertyName": "subCategory",
      "routeName": "product.view",
      "title": "Sub Category"
    },
    {
      "title": "Edit",
      "template": "product/edit",
      "disableSorting": true,
      "disableFiltering": true
    },
    {
      "title": "Delete",
      "template": "product/delete",
      "disableSorting": true,
      "disableFiltering": true
    }
  ]
});
