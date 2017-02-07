import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  unitValue: DS.attr(),
  serialNumber: DS.attr(),
  acquisitionDate: DS.attr(),
  category: DS.attr(),
  subCategory: DS.attr(),
  status: DS.attr('number'),
  vendorMail: DS.attr(),
  vendorPhone: DS.attr()
});
