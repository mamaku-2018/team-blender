exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Shane', emoji: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Face_With_Rolling_Eyes_Emoji_large.png?v=1481523400'},
        {id: 2, name: 'Rachael', emoji: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?v=1480481059'},
        {id: 3, name: 'Sam', emoji: 'https://clipart.info/images/ccovers/1496184260Poop-Emoji-Png.png'},
        {id: 4, name: 'Caitlyn', emoji: 'https://clipart.info/images/ccovers/1496184260Poop-Emoji-Png.png'},
        {id: 5, name: 'Mike', emoji: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1513251060'}
      ])
    })
}
