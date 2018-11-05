module.exports = function(res, error) {
  return error.message.then(
    message => res.status(
      error.status
    ).json(
      message
    )
  );
};
