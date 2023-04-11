async function sort(req, res, next) {
  try {
    const {limit = 10, page = 1, sort = '_id:-1'} = req.query;

    const [sortField, sortOrientation] = sort?.split(':');

    if (limit > 0 && page > 0) {
      const finalRes = await req.res
        .find()
        .sort({[sortField]: sortOrientation})
        .skip((page - 1) * limit)
        .limit(limit);
      res.status(200).json(finalRes);
    } else {
      next(new FormatError());
    }
  } catch (err) {
    next(err);
  }
}

export default sort;
