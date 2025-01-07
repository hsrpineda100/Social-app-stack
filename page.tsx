import { useRouter } from 'next/navigation'
import { Button } from '@db/components/ui/button'

export default function Step3() {
  const router = useRouter()

  const handleFinish = () => {
    // Save completion status and redirect to main app
    localStorage.setItem('onboarding_completed', 'true')
    router.push('/dashboard')
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">All Set!</h2>
      <p>Thank you for completing the onboarding process.</p>
      <Button onClick={handleFinish} className="w-full">
        Finish
      </Button>
    </div>
  )
}

