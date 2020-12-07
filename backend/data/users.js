import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@palace.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Joe Doe',
    email: 'joe@palace.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
  {
    name: 'Wily Wonka',
    email: 'willy@palace.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
]

export default users