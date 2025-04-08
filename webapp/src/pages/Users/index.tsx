import { trpc } from '../../lib/trpc'

export const Users = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getUsers.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>Users</h1>
      {data.users.map((user) => {
        return (
          <div key={user.id}>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
          </div>
        )
      })}
    </div>
  )
}
