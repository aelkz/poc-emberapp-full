import DS from 'ember-data';


// https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
// https://guides.emberjs.com/v2.0.0/models/customizing-serializers/
// http://emberjs.com/api/data/classes/DS.RESTSerializer.html#method_modelNameFromPayloadKey

/* *****************************************************************************************************************************
 * see: https://discuss.emberjs.com/t/what-is-going-on-with-the-new-json-format-and-the-serializers/8560
 *      http://thejsguy.com/2016/01/23/ember-data-and-custom-apis-5-common-serializer-customizations.html
 * need to convert flat json to json api 1.0 (json-server flat json => json api 1.0) for mock
 * *****************************************************************************************************************************
 */
export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  modelNameFromPayloadKey: function(payloadKey) {
    if (payloadKey === 'id') {
      return 'product';
    } else {
      return this._super(payloadKey);
    }
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('[2.1] calling serializers/product serializer. ['+requestType+']');

    if ('createRecord' === requestType) {
      // Verificar qual solução atende para criação/alteração de novo registro
      // (ainda não foi testado e pode variar conforme implementação do backend)
      console.log('#############################################################');
      console.log(primaryModelClass);
      console.log(payload);
      console.log(payload.product.name);
      console.log(id);
      console.log('#############################################################');

      /************************************
       * SOLUÇÃO 1
       * *********************************/
      var normalizedRecords = [];

      payload.map(function (record) {
        record.type = primaryModelClass.modelName;
        normalizedRecords.push(record);
      });

      var obj = {};
      obj[primaryModelClass.modelName] = normalizedRecords;

      return this._super(store, primaryModelClass, obj, id, requestType);

      /************************************
       * SOLUÇÃO 2
       * *********************************/
      id = payload.id;
      return this._super(store, primaryModelClass, payload, id, requestType);

      return {
        data: [
          {
            id: payload.id,
            type: primaryModelClass,
            attributes: [{
              name: payload.product.name,
              description: payload.product.description,
              category: payload.product.category,
              subCategory: payload.product.subCategory
            }]
          }]
      };

    }else {
      /************************************
       * SOLUÇÃO DEFAULT
       * *********************************/
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  }

});
