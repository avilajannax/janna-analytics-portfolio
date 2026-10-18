import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
        This page doesn't exist.
      </h1>
      <p className="mt-4 text-muted">
        The link you followed may be broken, or the page may have moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  )
}
