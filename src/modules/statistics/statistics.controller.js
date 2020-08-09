import HTTPStatus from 'http-status';
import Menu from '../menu/menu.model';
import Occassion from '../occassion/occassion.model';
import Responses from '../responses/responses.model';
import Item from '../item/item.model';
import Category from '../category/category.model';
import User from '../user/user.model';
import sequelize from '../../db';
// import { queryParams } from '../../helpers/helper'

export const getResponses = async (req, res) => {
  const creatorId = req.query.creatorId;
  const responseCount = await Responses.count({
    where: {
      others: {
        createdForId: {
          [sequelize.Op.like]: creatorId,
        },
      }, // where ends
    },
  });
  const occassionCount = await Occassion.count({
    where: {
      others: {
        creatorId: {
          [sequelize.Op.like]: creatorId,
        },
      }, // where ends
    },
  });
  const menuCount = await Menu.count({
    where: {
      others: {
        creatorId: {
          [sequelize.Op.like]: creatorId,
        },
      }, // where ends
    },
  });

  const menuItemCount = await Item.count({
    where: {
      others: {
        creatorId: {
          [sequelize.Op.like]: creatorId,
        },
      }, // where ends
    },
  });

  const userCount = await User.count({
    where: {},
  });

  const categoryCount = await Category.count({
    where: {
      others: {
        creatorId: {
          [sequelize.Op.like]: creatorId,
        },
      }, // where ends
    },
  });

  res.status(HTTPStatus.OK).json({
    responseCount,
    occassionCount,
    menuCount,
    categoryCount,
    menuItemCount,
    userCount,
  });

  // res.send(occassionCount3);
};
