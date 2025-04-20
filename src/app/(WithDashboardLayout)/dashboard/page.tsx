
// import DashboardSidebar from "@/components/dashboard-sidebar"
// import IncomeStats from "@/components/income-stats"
// import DriverStats from "@/components/driver-stats"
// import MapView from "@/components/map-view"
// import DriversTable from "@/components/drivers-table"

import DriverStats from "@/components/dashboard/DriverStats/driver-stats";
import IncomeStats from "@/components/dashboard/incomeStats/income-stats";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-3xl p-4 shadow-lg">
          {/* Header */}


          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {/* Sidebar */}
            {/* <DashboardSidebar /> */}

            {/* Main Content */}
            <div className="flex-1 space-y-4">
              {/* Income and Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <IncomeStats />
                <DriverStats />
              </div>

              {/* Map and Drivers List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* <MapView /> */}
                {/* <DriversTable /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
