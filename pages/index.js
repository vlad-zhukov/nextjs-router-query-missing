import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push({
      pathname: "/something/new",
      query: {param: "value"}},
    "/something/new")
  }, [router]);
  return (
    <div>
      router.push() regression test
    </div>
  )
}
