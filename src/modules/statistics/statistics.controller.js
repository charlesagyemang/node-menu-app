import HTTPStatus from 'http-status';
import Menu from '../menu/menu.model';
import Occassion from '../occassion/occassion.model';
import Responses from '../responses/responses.model';
import Item from '../item/item.model';
import Category from '../category/category.model';
import User from '../user/user.model';
// import pusher from '../../config/pusher';


export const getResponses = async (req, res) => {
  const responses = await Responses.findAndCountAll({
    where: {},
  });
  const occassions = await Occassion.findAndCountAll({
    where: {},
  });
  const menus = await Menu.findAndCountAll({
    where: {},
  });

  const menuItems = await Item.findAndCountAll({
    where: {},
  });

  const users = await User.findAndCountAll({
    where: {},
  });

  const categories = await Category.findAndCountAll({
    where: {},
  });

  const responseCount = responses.count;
  const occassionCount = occassions.count;
  const menuCount = menus.count;
  const categoryCount = categories.count;
  const menuItemCount = menuItems.count;
  const userCount = users.count;

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
