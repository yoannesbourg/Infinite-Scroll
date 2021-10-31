module.exports = function () {
    const faker = require('faker');
    const { image } = require('faker');
    const _ = require('lodash');
    const categories = [
        'abstract',
        'animals',
        'business',
        'cats',
        'city',
        'food',
        'nightlife',
        'fashion',
        'people',
        'nature',
        'sports',
        'technics',
        'transport',
    ];
    return {
        images: _.times(100000, function () {
            return {
                type: 'Image',
                id: faker.datatype.uuid(),
                title: faker.lorem.words(),
                author: faker.name.findName(),
                created_at: faker.date.past(),
                main_attachment: {
                    big: image.imageUrl(500, 400, categories[Math.floor(Math.random() * categories.length)], true),
                    small: image.imageUrl(125, 100, categories[Math.floor(Math.random() * categories.length)], true),
                },
                likes_count: faker.datatype.number(),
                liked: faker.datatype.boolean(),
                price: faker.datatype.number({ min: 1, max: 1000}),
            };
        }),
    };
};
