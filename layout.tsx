import PrivateRoute from '../components/PrivateRoute'
import OnboardingProgress from './OnboardingProgress'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <OnboardingProgress />
          {children}
        </div>
      </div>
    </PrivateRoute>
  )
}

