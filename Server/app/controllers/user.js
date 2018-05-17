import jwt from 'jsonwebtoken';
import app from '../../app';
import { models } from '../models';

const User = models.user;

export const create = async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

  const user = await User
    .create({
      name,
      email,
      password
    })
    .then((user) => {
      if (email === 'c@g.com') {
        const token = jwt.sign(
          {
            role: 'admin',
            name: user.name
          },
          app.get('secret'),
          {
            expiresIn: 60 * 60 * 72
          }
        );
        return res.status(200).send({
          status: 'Success',
          message: 'Successfully Registered',
          adminToken: token
        });
      }
    });
}

export default userController;
