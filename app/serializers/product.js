import DS from 'ember-data';


// https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
// https://guides.emberjs.com/v2.0.0/models/customizing-serializers/
export default DS.RESTSerializer.extend({

  normalizeFindRecordResponse(store, type, payload) {
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
