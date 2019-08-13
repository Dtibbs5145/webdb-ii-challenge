
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 'AS214KJ23N', make: 'Ford', model: 'Ford Focus', mileage: '150,382'},
        {vin: 'KS8N3282N4', make: 'Toyota', model: 'Camry', mileage: '65,875'},
        {vin: 'B325N6D8E3', make: 'Subaru', model: 'Impreza', mileage: '15,194'}
      ]);
    });
};
