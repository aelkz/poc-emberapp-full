import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Route.extend(SweetAlertMixin,{
  model() {
    return this.store.createRecord('product');
  },
  actions: {
    save(newProduct) {
      // http://stackoverflow.com/questions/29017402/automatically-generating-ids-with-ember-firebase
      console.log('[1] trying to persist new product data.');
      // newProduct.save().then(() => this.transitionTo('product.list'));
      // this.transitionToRoute('product.view', newProduct.get('id'));
      newProduct.save();
    },
    cancel() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
      this.transitionTo('product.list');
    },
    willTransition(transition) {
      let model = this.controller.get('model');
      let unsavedModel = this.get('unsaved');

      if (model.get('hasDirtyAttributes')) {
        let sweetAlert = this.get('sweetAlert');

        transition.abort();
        sweetAlert({
          title: "Are you sure?",
          text: 'Your changes haven\'t saved yet. Would you like to leave this form?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes",
          allowOutsideClick: false
        }).then(
          (confirm)=> {
            model.rollbackAttributes();
            this.controller.get('model').rollbackAttributes();
            this.refresh();
            this.transitionTo('product.list');
          },
          (cancel)=> {
            transition.abort();
          }
        );
      }

    }
  }
});
