import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

/**
 * usefull info:
 * https://discuss.emberjs.com/t/what-is-going-on-with-the-new-json-format-and-the-serializers/8560/3
 * https://github.com/samselikoff/ember-cli-mirage/issues/746
 * https://github.com/emberjs/data/issues/3683#event-388197850
 * https://discuss.emberjs.com/t/trouble-getting-a-simple-ember-data-example-working/8867/11
 * http://guides.emberjs.com/v2.11.0/models/customizing-serializers/
 * http://www.ember-cli-mirage.com/docs/v0.1.x/working-with-json-api/
 * https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
 * http://thejsguy.com/2015/12/05/which-ember-data-serializer-should-i-use.html
 * http://emberjs.com/api/data/classes/DS.Adapter.html#method_generateIdForRecord
 * http://thau.me/2015/01/using-uuids-with-ember-data
 * https://github.com/thaume/ember-cli-uuid
 * http://thau.me/2015/01/using-uuids-with-ember-data
 * https://teamgaslight.com/blog/client-side-ids-with-ember-data
 */

  /* ****************************************************************************************************************
   * In the Republic of Ember, endpoint locations are translated in an Adapter. Content is translated in a Serializer.
   * - JSONAPIAdapter (don't works with json-server mock api)
   * READ-ME FIRST!!!
   * https://guides.emberjs.com/v2.6.0/models/customizing-adapters/
   * https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
   * https://www.emberscreencasts.com/posts/108-ember-data-20-overview-of-using-adapters-and-serializers
   * ****************************************************************************************************************
   */
export default DS.RESTAdapter.extend(DataAdapterMixin,{
  host:"http://localhost:3000",
  authorizer: 'authorizer:application'
  // needed for client-side id object generation (in production, use backend id generation)
  //generateIdForRecord: function(store, inputProperties) {
    // https://www.npmjs.com/package/ember-uuid
    // https://jsfiddle.net/briguy37/2MVFd/
  //  return v4();
  //}
});
