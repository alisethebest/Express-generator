const express = require("express");
const Promotion = require("../models/promotion");
const authenticate = require("../authenticate");
const cors = require("./cors");

const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    // Logic for GET
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for POST - Admin only
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for PUT - Admin only
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for DELETE - Admin only
    }
  );

promotionRouter
  .route("/:promotionId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    // Logic for GET on /:promotionId
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for POST on /:promotionId - Admin only
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for PUT on /:promotionId - Admin only
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for DELETE on /:promotionId - Admin only
    }
  );

module.exports = promotionRouter;
