import DS from 'ember-data';


// https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
export default DS.JSONSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('calling application serializer.');
    return {
      data: {
        id: payload.id,
        type: type.modelName,
        attributes: {
          name: payload.name,
          description: payload.description
        }
      }
    }
  }

});
