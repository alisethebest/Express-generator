const express = require("express");
const partnerRouter = express.Router();
const Partner = require("../models/partner");

partnerRouter
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

  partnerRouter
    .route("/:partnerId")
    // .get, .post as before
    .put(
      authenticate.verifyUser,
      authenticate.verifyAdmin,
      (req, res, next) => {
        // Admin only PUT operation
      }
    )
    .delete(
      authenticate.verifyUser,
      authenticate.verifyAdmin,
      (req, res, next) => {
        // Admin only DELETE operation
      }
    );



module.exports = partnerRouter;
