const user = {
    name: 'Mango',
    age: 28,
    hobby: 'runing',
    premium: true,
  };

const {
    name: userName,
    age: userAge,
    hobby: userHobby,
    premium: userStatus,
  } = user;
  
  user.mood = 'happy';
  
  userHobby = 'skydiving';
  
  user.premium = userStatus;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }