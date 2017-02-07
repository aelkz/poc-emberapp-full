import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// JSONAPIAdapter (dont works with json-server)

/**
 * https://discuss.emberjs.com/t/what-is-going-on-with-the-new-json-format-and-the-serializers/8560/3
 * https://github.com/samselikoff/ember-cli-mirage/issues/746
 * https://github.com/emberjs/data/issues/3683#event-388197850
 * https://discuss.emberjs.com/t/trouble-getting-a-simple-ember-data-example-working/8867/11
 * http://guides.emberjs.com/v2.11.0/models/customizing-serializers/
 * http://www.ember-cli-mirage.com/docs/v0.1.x/working-with-json-api/
 * https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
 */

  /*
   In the Republic of Ember, endpoint locations are translated in an Adapter. Content is translated in a Serializer.
   */
export default DS.RESTAdapter.extend(DataAdapterMixin,{
  host:"http://localhost:3000",
  authorizer: 'authorizer:application'
});
