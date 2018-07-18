import { Record, List } from 'immutable';

const DEF = 'N/A';

export const User = Record({
  id: 0,
  email: DEF,
  username: DEF,
  firstName: DEF,
  lastName: DEF,
  company: DEF,
  profile: null,
  legajo: null,
});

const userMapper = data => {
  return new User({
    id: data.UserId,
    email: data.UserEmail,
    username: data.UserName,
    firstName: data.UserFirstName,
    lastName: data.UserLastName,
    company: data.UserCompanyName,
    legajo: data.UserLegajo,
    profile: data.UserProfilePictureUrl,
  });
};

export default userMapper;
