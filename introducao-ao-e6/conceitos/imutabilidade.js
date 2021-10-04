const user = {
  name: 'Greg',
  lastName: 'Neto'
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);