import { Layout } from "./components/layout/layout.component"
import type { NextPage } from 'next'
import { SubscriptionComponent } from "./components/subscription/subscription.component"

const Home: NextPage = () => {
  return Layout(SubscriptionComponent())
}

export default Home
