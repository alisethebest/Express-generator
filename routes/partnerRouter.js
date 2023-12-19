const express = require("express");
const Partner = require("../models/partner");
const authenticate = require("../authenticate");
const cors = require("./cors");

const partnerRouter = express.Router();

partnerRouter
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

partnerRouter
  .route("/:partnerId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    // Logic for GET on /:partnerId
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for POST on /:partnerId - Admin only
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for PUT on /:partnerId - Admin only
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for DELETE on /:partnerId - Admin only
    }
  );

module.exports = partnerRouter;
