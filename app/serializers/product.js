import DS from 'ember-data';


// https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
// https://guides.emberjs.com/v2.0.0/models/customizing-serializers/

/* *****************************************************************************************************************************
 * see: https://discuss.emberjs.com/t/what-is-going-on-with-the-new-json-format-and-the-serializers/8560
 * need to convert flat json to json api 1.0 (json-server flat json => json api 1.0) for mock
 * *****************************************************************************************************************************
 */
export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('[2.1] calling serializers/product serializer. ['+requestType+']');

    if ('findAll' == requestType) {
      var normalizedRecords = [];

      payload.map(function(record){
        record.type = primaryModelClass.modelName;
        normalizedRecords.push(record);
      });

      var obj = {};
      obj[primaryModelClass.modelName] = normalizedRecords;

      return this._super(store, primaryModelClass, obj, id, requestType);
    }else {
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  },

  normalizeFindRecordResponse(store, type, payload) {
    console.log('[2.2] calling serializers/product serializer.');
    return {
      data: {
        id: payload.id,
        type: type.modelName,
        attributes: {
          name: payload.name,
          description: payload.description
        }
      }
    };
  }

});
