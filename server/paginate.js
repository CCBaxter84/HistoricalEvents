module.exports = (req, res, next) => {
  res.msg = 'your mom';
  next();
};