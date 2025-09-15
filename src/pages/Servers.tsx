type Server = {
  id: string
  name: string
  ip: string
  status: 'online' | 'offline' | 'maintenance'
}

const servers: Server[] = [
  { id: '1', name: 'api-eu-west', ip: '10.0.1.11', status: 'online' },
  { id: '2', name: 'api-us-east', ip: '10.0.3.42', status: 'maintenance' },
  { id: '3', name: 'db-core',    ip: '10.0.9.7',  status: 'offline' },
]

const statusBadge = (s: Server['status']) => {
  if (s === 'online') return 'badge-success'
  if (s === 'offline') return 'badge-error'
  return 'badge-warning'
}

export default function Servers() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold">Servers</h2>
        <span className="badge badge-outline">{servers.length} total</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servers.map(s => (
          <div key={s.id} className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title">{s.name}</h3>
                <span className={`badge ${statusBadge(s)}`}>{s.status}</span>
              </div>
              <p className="text-sm opacity-80">IP: {s.ip}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
