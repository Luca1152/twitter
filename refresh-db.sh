#!/bin/bash

rm -rf storage/db.sqlite

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all