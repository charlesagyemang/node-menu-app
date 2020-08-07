import HTTPStatus from 'http-status';
// import Menu from '../menu/menu.model';
// import Occassion from '../occassion/occassion.model';
import Responses from '../responses/responses.model';
// import pusher from '../../config/pusher';


export const getResponses = async (req, res) => {
  const id = req.params.id;

  const responses = await Responses.findById(id);
  if (!responses) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(responses);
};
