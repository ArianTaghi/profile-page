import React from 'react'
import '../Css/AuthPage/StageCounter.css'

const steps = [
  { number: '۱', label: 'اطلاعات فردی' },
  { number: '۲', label: 'راه‌های ارتباطی' },
  { number: '۳', label: 'امنیت حساب' },
]

const StageCounter = ({ currentStage }) => {
  return (
    <header className="signup-header">
      <div className="signup-title flex items-center justify-center gap-[12px] text-[color:var(--color-emerald-950)] font-[850] leading-[1.35] tracking-[-0.7px]">ثبت‌نام</div>
      <div className="signup-subtitle mt-[8px] text-[color:var(--color-muted)] text-[12px] font-[400] leading-[1.8]">
        برای ساخت حساب کاربری، مراحل زیر را تکمیل کنید.
      </div>

      <div className="signup-progress flex items-start gap-[7px]" aria-label={`مرحله ${currentStage} از ۳`}>
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isComplete = currentStage > stepNumber
          const isActive = currentStage === stepNumber

          return (
            <React.Fragment key={step.number}>
              <div
                className={`signup-progress-item flex flex-[0_1_82px] min-w-[0] flex-col items-center gap-[8px] text-[color:#92998f] text-[10px] leading-[1.4] whitespace-nowrap ${isActive ? 'activeStage' : ''} ${isComplete ? 'is-complete' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <div className="signup-step grid w-[40px] h-[40px] flex-[0_0_40px] place-items-center rounded-[50%] text-[color:#899187] text-[14px] font-[800]" aria-label={isComplete ? 'تکمیل‌شده' : `مرحله ${stepNumber}`}>
                  <span className={`signup-step-symbol relative grid w-[1em] h-[1em] place-items-center ${isComplete ? 'is-complete' : ''}`}>
                    <span className="signup-step-number opacity-[1]">{step.number}</span>
                    <span className="signup-step-check opacity-[0] text-[1.12em] font-[900]" aria-hidden="true">✓</span>
                  </span>
                </div>
                <span className="signup-step-label">{step.label}</span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`signup-progress-line relative top-[19px] h-[2px] min-w-[8px] overflow-hidden rounded-[99px] ${currentStage > stepNumber ? 'is-complete' : ''}`}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
      
    </header>
  )
}

export default StageCounter
