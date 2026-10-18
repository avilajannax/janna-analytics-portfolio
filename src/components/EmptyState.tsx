export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-ink/20 bg-white/50 px-8 py-16 text-center">
      <p className="font-mono text-sm text-muted">{'{ }'}</p>
      <h3 className="mt-4 text-2xl font-bold tracking-tight">Case studies are on the way</h3>
      <p className="mx-auto mt-3 max-w-md text-muted">
        I'm currently building my first public analytics projects — real analyses on
        real data, done right. Check back soon, or connect with me to follow the work
        as it ships.
      </p>
    </div>
  )
}
