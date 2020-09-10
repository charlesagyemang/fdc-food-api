import HTTPStatus from 'http-status';
import { allFoods, searchFoods } from '../../helpers/fdc_api_helper';

export const ping = async (req, res) => {
  res.status(HTTPStatus.OK).json({ data: 'Ping' });
};


export const getAllFoods = async (req, res) => {
  const response = await allFoods();
  try {
    res.status(HTTPStatus.OK).json(response);
  } catch (e) {
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(e.response.data);
  }
};

export const getSingleFoodDetails = async (req, res) => {
  const response = await searchFoods(req.body.foodName);
  try {
    res.status(HTTPStatus.OK).json(response.foods);
  } catch (e) {
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(e.response.data);
  }
};
