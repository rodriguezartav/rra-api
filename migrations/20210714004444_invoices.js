"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("invoices", function (table) {
    table.increments();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("paid_at").defaultTo(knex.fn.now());
    table.integer("student_id");
    table.string("details");
    table.string("total");
    table.string("pending");

    table.foreign("student_id").references("id").inTable("students");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("invoices");
};
