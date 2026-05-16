const express = require("express");

const {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createCourse);

router.get("/", authMiddleware, getAllCourses);

router.get("/:id", authMiddleware, getSingleCourse);

router.put("/:id", authMiddleware, updateCourse);

router.delete("/:id", authMiddleware, deleteCourse);

module.exports = router;