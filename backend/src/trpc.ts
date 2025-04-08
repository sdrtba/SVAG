import { initTRPC } from '@trpc/server'

const users = [
  {
    id: '1',
    firstName: 'Carl',
    lastName: 'Doe',
    age: 25,
    email: '123@mail',
    phone: '1234567890',
    photo: 'https://randomuser.me/api/portraits/women/59.jpg',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    email: '456@mail',
    phone: '0987654321',
    photo: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    id: '3',
    firstName: 'Alice',
    lastName: 'Smith',
    age: 35,
    email: '789@mail',
    phone: '1357924680',
    photo: 'https://randomuser.me/api/portraits/women/57.jpg',
  },
  {
    id: '4',
    firstName: 'Bob',
    lastName: 'Smith',
    age: 40,
    email: 'abc@mail',
    phone: '2468013579',
    photo: 'https://randomuser.me/api/portraits/women/56.jpg',
  },
  {
    id: '5',
    firstName: 'Charlie',
    lastName: 'Brown',
    age: 45,
    email: 'def@mail',
    phone: '5791352468',
    photo: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getUsers: trpc.procedure.query(() => {
    return { users }
  }),
})

export type TrpcRouter = typeof trpcRouter
