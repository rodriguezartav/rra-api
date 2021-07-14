"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("companies", function (table) {
    table.increments();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.string("name").notNullable();
    table.string("sales_phone");
    table.string("billing_email");
    table.integer("sales_contact_id");
    table.integer("billing_contact_id");
    table.integer("manager_contact_id");

    table.string("website");
    table.string("marketcap");

    table.string("country");
    table.string("province");
    table.string("id_number");

    table.string("description");
    table.string("profile_image_url");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("companies");
};
