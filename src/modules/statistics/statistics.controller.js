import HTTPStatus from 'http-status';
import Menu from '../menu/menu.model';
import Occassion from '../occassion/occassion.model';
import Responses from '../responses/responses.model';
import Item from '../item/item.model';
import Category from '../category/category.model';
import User from '../user/user.model';

export const getResponses = async (req, res) => {
  const responseCount = await Responses.count({
    where: {},
  });
  const occassionCount = await Occassion.count({
    where: {},
  });
  const menuCount = await Menu.count({
    where: {},
  });

  const menuItemCount = await Item.count({
    where: {},
  });

  const userCount = await User.count({
    where: {},
  });

  const categoryCount = await Category.count({
    where: {},
  });

  // console.log(responses);
  res.status(HTTPStatus.OK).json({
    responseCount,
    occassionCount,
    menuCount,
    categoryCount,
    menuItemCount,
    userCount,
  });
};
