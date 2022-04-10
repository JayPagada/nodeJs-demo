// @desc   Get all bootcamps
// @route  GET api/v1/bootcamps
// @access public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "this for get all bootcamps",
    data: { id: 1 },
  });
};

// @desc   Get single bootcamp
// @route  GET api/v1/bootcamps/:id
// @access public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `this for get one bootcamps ${req.params.id}`,
    data: { id: 1 },
  });
};

// @desc   create new bootcamp
// @route  POST api/v1/bootcamps
// @access private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "this for create new bootcamps",
    data: { id: 1 },
  });
};
// @desc   update bootcamps
// @route  PUT api/v1/bootcamps/:id
// @access private
exports.updateBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `this for update bootcamps ${req.params.id}`,
    data: { id: 1 },
  });
};
// @desc   delete bootcamps
// @route  DELETE api/v1/bootcamps/:id
// @access public
exports.deleteBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `this for delete bootcamps ${req.params.id}`,
    data: { id: 1 },
  });
};
