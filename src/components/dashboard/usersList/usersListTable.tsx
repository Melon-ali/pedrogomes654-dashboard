"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type User = {
  id: string
  name: string
  memoryCreate: number
  isPremium: boolean
  status: "Unrestricted" | "Restricted"
}

export default function UserListTable() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "2", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Restricted" },
    { id: "3", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "4", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "5", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "6", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "7", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "8", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "9", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "10", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "11", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "12", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "13", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "14", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "15", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "16", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
    { id: "17", name: "Allison Mat", memoryCreate: 4, isPremium: true, status: "Unrestricted" },
  ])

  const handleStatusChange = (userId: string, newStatus: "Unrestricted" | "Restricted") => {
    setUsers(
      users.map((user) => {
        if (user.id === userId) {
          return { ...user, status: newStatus }
        }
        return user
      }),
    )
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6">All list</h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">User name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Memory create</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Premium user</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.memoryCreate}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.isPremium ? "Yes" : "No"}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <Select
                    value={user.status}
                    onValueChange={(value) => handleStatusChange(user.id, value as "Unrestricted" | "Restricted")}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Unrestricted">Unrestricted</SelectItem>
                      <SelectItem value="Restricted">Restricted</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}