# immersion-2022-05-homemade

### how to create and seed db
$ npm install sequelize-cli -g
$ sequelize db:create
$ sequelize db:migrate
$ sequelize db:seed --seed 20220523041332-users-seeder.js


### drop, create, migrate db (reset for testing)
sequelize db:drop && sequelize db:create && sequelize db:migrate