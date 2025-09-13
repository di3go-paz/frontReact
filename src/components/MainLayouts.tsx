import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <div className="main-content">{children}</div>
    </div>
  )
}
