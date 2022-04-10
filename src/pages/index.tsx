import type { NextPage } from 'next'
import { Button } from '@mantine/core'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button className="mt-3">Button</Button>
    </>
  )
}

export default Home
