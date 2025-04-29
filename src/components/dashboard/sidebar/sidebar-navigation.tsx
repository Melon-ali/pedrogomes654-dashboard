"use client"

import type React from "react"
import { LayoutDashboard, Clock, Users, DollarSign, Info, Hotel, MessageSquare, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
  label: string
  icon: React.ReactNode
  href: string
}

export default function SidebarNavigation() {

  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: "/",
    },
    {
      label: "Shifts",
      icon: <Clock className="w-5 h-5" />,
      href: "/dashboard/shifts",
    },
    {
      label: "Drivers",
      icon: <Users className="w-5 h-5" />,
      href: "/dashboard/drivers",
    },
    {
      label: "Income",
      icon: <DollarSign className="w-5 h-5" />,
      href: "/dashboard/income",
    },
    {
      label: "Car info",
      icon: <Info className="w-5 h-5" />,
      href: "/car-info",
    },
    {
      label: "Hotels",
      icon: <Hotel className="w-5 h-5" />,
      href: "/hotels",
    },
    {
      label: "Chat",
      icon: <MessageSquare className="w-5 h-5" />,
      href: "/chat",
    },
    {
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
      href: "/settings",
    },
  ]

  return (
    
    <div className="w-full md:w-64 bg-white rounded-xl p-4 ml-5 mt-5 space-y-6 shadow-lg">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${pathname === item.href ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}

      <button className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-gray-100 w-full">
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  )
}