import { TrpcProvider } from './lib/trpc'
import { Users } from './pages/Users'

export const App = () => {
  return (
    <TrpcProvider>
      <Users />
    </TrpcProvider>
  )
}
