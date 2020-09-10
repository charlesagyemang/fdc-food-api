import HTTPStatus from 'http-status';

export const ping = async (req, res) => {
  res.status(HTTPStatus.OK).json({ data: 'Ping' });
};
