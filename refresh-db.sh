#!/bin/bash

rm -rf db/db.sqlite

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all