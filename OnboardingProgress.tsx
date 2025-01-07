'use client'

import { usePathname } from 'next/navigation'

const steps = [
  { path: '/onboarding/step1', label: 'Personal Info' },
  { path: '/onboarding/step2', label: 'Preferences' },
  { path: '/onboarding/step3', label: 'Finish' },
]

export default function OnboardingProgress() {
  const pathname = usePathname()
  const currentStepIndex = steps.findIndex(step => step.path === pathname)

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={step.path}
            className={`flex flex-col items-center ${
              index <= currentStepIndex ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                index <= currentStepIndex ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="text-white">{index + 1}</span>
            </div>
            <span className="text-sm">{step.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

