import { useState } from "react"

interface Server {
  id: number
  name: string
  status: "online" | "offline"
  cpu: number // %
  ram: number // %
  disk: number // %
  netIn: number // Mbps
  netOut: number // Mbps
}

export default function Dashboard() {
  const [servers] = useState<Server[]>([
    { id: 1, name: "Server-1", status: "online", cpu: 23, ram: 68, disk: 55, netIn: 120, netOut: 80 },
    { id: 2, name: "Server-2", status: "online", cpu: 47, ram: 32, disk: 70, netIn: 90, netOut: 65 },
    { id: 3, name: "Server-3", status: "online", cpu: 12, ram: 45, disk: 40, netIn: 30, netOut: 25 },
    { id: 4, name: "Server-4", status: "offline", cpu: 0, ram: 0, disk: 0, netIn: 0, netOut: 0 },
    { id: 5, name: "Server-5", status: "online", cpu: 76, ram: 82, disk: 90, netIn: 200, netOut: 150 },
  ])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold">Active Servers</h2>
        <span className="badge badge-outline">{servers.length} total</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servers.map((server) => (
          <div
            key={server.id}
            className="rounded-2xl bg-base-100 shadow p-5 flex flex-col justify-between"
          >
            {/* Заголовок */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">{server.name}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  server.status === "online"
                    ? "bg-green-900 text-green-300"
                    : "bg-red-900 text-red-300"
                }`}
              >
                {server.status}
              </span>
            </div>

            {/* Метрики */}
            {server.status === "online" ? (
              <div className="space-y-2 text-sm">
                <p>CPU: <span className="font-semibold">{server.cpu}%</span></p>
                <p>RAM: <span className="font-semibold">{server.ram}%</span></p>
                <p>Disk: <span className="font-semibold">{server.disk}%</span></p>
                <p>Net In: <span className="font-semibold">{server.netIn} Mbps</span></p>
                <p>Net Out: <span className="font-semibold">{server.netOut} Mbps</span></p>
              </div>
            ) : (
              <div className="text-sm text-gray-400 italic">Server is offline</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
