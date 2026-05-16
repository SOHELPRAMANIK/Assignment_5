const Course = require("../models/Course");



exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Course Created Successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



exports.getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Updated",
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};