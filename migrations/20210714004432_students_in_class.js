"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("students_in_class", function (table) {
    table.increments();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.integer("student_id").notNullable();
    table.integer("class_id").notNullable();

    table.foreign("student_id").references("id").inTable("students");
    table.foreign("class_id").references("id").inTable("classes");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("students_in_class");
};
