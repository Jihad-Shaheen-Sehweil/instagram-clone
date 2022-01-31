import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'

export default function Feed() {
  const { data: session } = useSession()

  return (
    <main
      className={`${
        !session && '!max-w-3xl !grid-cols-1'
      } mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3`}
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed top-16">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  )
}
