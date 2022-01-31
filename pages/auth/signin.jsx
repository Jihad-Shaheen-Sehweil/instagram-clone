import React from 'react'
import { getProviders, signIn as signInToProviders } from 'next-auth/react'
import Header from '../../components/Header'

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="-mt-20 flex min-h-screen flex-col items-center justify-center px-14 py-2 text-center">
        <img
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="Instagram logo"
        />
        <p className="text-xs italic">Instagram Clone</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  signInToProviders(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
// this the middle server that gets the settings
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default signin
