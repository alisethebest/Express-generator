const express = require("express");
const Promotion = require("../models/promotion");

const promotionRouter = express.Router();

promotionRouter
  .route("/")
  // .get as before
  .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    // Admin only POST operation
  })
  // .put as before
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Admin only DELETE operation
    }
  );

ppromotionRouter
  .route("/:promotionId")
  // .get, .post as before
  .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    // Admin only PUT operation
  })
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Admin only DELETE operation
    }
  );

module.exports = promotionRouter;
