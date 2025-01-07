import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  
  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    }
  }, [router])

  return <>{children}</>
}

export default PrivateRoute

