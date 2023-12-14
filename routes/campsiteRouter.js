const express = require("express");
const Campsite = require("../models/campsite");
const authenticate = require("../authenticate");

const campsiteRouter = express.Router();

// Endpoint for all campsites
campsiteRouter
  .route("/")
  // .get, .post, .put, .delete as before
  .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    // Logic for POST request to add a campsite - Admin only
  })
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      // Logic for DELETE request to delete all campsites - Admin only
    }
  );

// Endpoint for a specific campsite
campsiteRouter.route('/:campsiteId')
// .get as before
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    // Logic for PUT request to update a specific campsite - Admin only
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    // Logic for DELETE request to delete a specific campsite - Admin only
});


// Endpoint for comments on a specific campsite
campsiteRouter.route('/:campsiteId/comments')
// .get, .post, .put as before
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    // Logic for DELETE request to delete all comments on a specific campsite - Admin only
});

// Endpoint for a specific comment on a specific campsite
campsiteRouter.route('/:campsiteId/comments/:commentId')
.get((req, res, next) => {
    // Logic for GET request for a specific comment
})
.post(authenticate.verifyUser, (req, res) => {
    // POST operation not supported on a specific comment
})
.put(authenticate.verifyUser, (req, res, next) => {
    Campsite.findById(req.params.campsiteId)
    .then(campsite => {
        if (campsite && campsite.comments.id(req.params.commentId)) {
            if (campsite.comments.id(req.params.commentId).author.equals(req.user._id)) {
                if (req.body.rating) {
                    campsite.comments.id(req.params.commentId).rating = req.body.rating;
                }
                if (req.body.text) {
                    campsite.comments.id(req.params.commentId).text = req.body.text;
                }
                campsite.save()
                .then(campsite => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(campsite);
                })
                .catch(err => next(err));
            } else {
                err = new Error('You are not authorized to update this comment!');
                err.status = 403;
                return next(err);
            }
        } else {
            err = new Error(`Campsite ${req.params.campsiteId} or Comment ${req.params.commentId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.delete(authenticate.verifyUser, (req, res, next) => {
    Campsite.findById(req.params.campsiteId)
    .then(campsite => {
        if (campsite && campsite.comments.id(req.params.commentId)) {
            if (campsite.comments.id(req.params.commentId).author.equals(req.user._id)) {
                campsite.comments.id(req.params.commentId).remove();
                campsite.save()
                .then(campsite => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(campsite);
                })
                .catch(err => next(err));
            } else {
                err = new Error('You are not authorized to delete this comment!');
                err.status = 403;
                return next(err);
            }
        } else {
            err = new Error(`Campsite ${req.params.campsiteId} or Comment ${req.params.commentId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
});

module.exports = campsiteRouter; 

