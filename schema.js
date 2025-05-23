const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow("", null),
        price: Joi.number().min(0).required(),
        country: Joi.string().required(),
        location: Joi.string().required(),
    }).required(),
});

// const schema = Joi.object({
//   listing: Joi.object().keys({
//     name: Joi.string().required(),
//     price: Joi.number().required(),
//   }).presence('required') // This is correct usage
// });

module.exports.reviewSchema = Joi.object({
   review: Joi.object({
rating:Joi.number().required().min(1).max(5),
comment: Joi.string().required(),
   }).required(),

})