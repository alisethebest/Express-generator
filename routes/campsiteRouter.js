const express = require("express");
const Campsite = require("../models/campsite");
const authenticate = require("../authenticate");
const cors = require("./cors");

const campsiteRouter = express.Router();

campsiteRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    // Logic for GET request to retrieve all campsites
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for POST request to add a campsite - Admin only
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      // PUT operation not supported on campsites
      res.statusCode = 403;
      res.end("PUT operation not supported on /campsites");
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for DELETE request to delete all campsites - Admin only
    }
  );

campsiteRouter
  .route("/:campsiteId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    // Logic for GET request to retrieve a specific campsite
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      // POST operation not supported on campsiteId
      res.statusCode = 403;
      res.end(
        "POST operation not supported on /campsites/" + req.params.campsiteId
      );
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for PUT request to update a specific campsite - Admin only
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for DELETE request to delete a specific campsite - Admin only
    }
  );

campsiteRouter
  .route("/:campsiteId/comments")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    // Logic for GET request to retrieve comments for a specific campsite
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    // Logic for POST request to add a comment to a specific campsite - Logged in users only
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    // PUT operation not supported on comments
    res.statusCode = 403;
    res.end(
      "PUT operation not supported on /campsites/" +
        req.params.campsiteId +
        "/comments"
    );
  })
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for DELETE request to delete all comments on a specific campsite - Admin only
    }
  );

campsiteRouter
  .route("/:campsiteId/comments/:commentId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    // Logic for GET request for a specific comment
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    // POST operation not supported on a specific comment
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /campsites/" +
        req.params.campsiteId +
        "/comments/" +
        req.params.commentId
    );
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    // Logic for PUT request to update a specific comment - Logged in users only
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    // Logic for DELETE request to delete a specific comment - Logged in users only
  });

module.exports = campsiteRouter;
