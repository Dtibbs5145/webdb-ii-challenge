
exports.up = function (knex) {
  return knex.schema.createTable('cars', cars => {
    cars.increments();
    cars
      .string('VIN', 130)
      .unique()
      .notNullable();
    cars
      .string('make', 130)
      .notNullable();
    cars
      .string('model', 130)
      .notNullable();

    cars.decimal('mileage', 130);
    cars.string('transmission type', 130);
    cars.string('title status', 130);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
