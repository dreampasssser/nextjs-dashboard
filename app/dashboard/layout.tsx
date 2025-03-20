import SideNav from '@/app/ui/dashboard/sidenav'

// 实验性功能，只能在最新的 canary 版本中使用
// export const experimental_ppr = true

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
