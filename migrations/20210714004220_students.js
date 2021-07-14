"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("students", function (table) {
    table.increments();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.timestamp("last_class_at").defaultTo(knex.fn.now());
    table.timestamp("last_qa_at").defaultTo(knex.fn.now());
    table.timestamp("last_video_at").defaultTo(knex.fn.now());

    table.integer("company_id");
    table.string("name").notNullable();
    table.string("nickname").notNullable();
    table.string("phone");
    table.string("email");
    table.string("country");
    table.string("province");
    table.string("description");
    table.string("profile_image_url");
    table.string("linkedIn_id");
    table.boolean("send_summary").default(false);
    table.boolean("send_marketing").default(false);
    table.boolean("send_remineder").default(false);

    table.foreign("company_id").references("id").inTable("companies");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("students");
};
