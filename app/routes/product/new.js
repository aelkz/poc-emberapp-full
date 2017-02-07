import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('product');
  },
  actions: {
    save(newProduct) {
      newProduct.save().then(() => this.transitionTo('product.list'));
    },
    cancel() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    },
    willTransition(transition) {
      let model = this.controller.get('model');
      let unsavedModel = this.get('unsaved');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
      //
      if (unsavedModel) {
        this.controller.get('model').rollbackAttributes();
        this.refresh();
      }
    }
  }
});
