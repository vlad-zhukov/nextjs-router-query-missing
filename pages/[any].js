import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <button type="button" onClick={() => {
        router.push({ query: 'page=1&__HIDDEN=true' }, { query: 'page=1' }, { shallow: true });
      }}>
        navigate
      </button>

      <div>Query: {JSON.stringify(router.query)}</div>
    </div>
  )
}
