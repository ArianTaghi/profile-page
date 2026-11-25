import AuthFrame from '../Reusable/AuthFrame'
import React, { useState } from 'react'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import StageCounter from './StageCounter'
import'./../Css/AuthPage/Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [currentStage, setCurrentStage] = useState(1)
  const [data, setData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    pass: '',
  })

  const handleValidate = (isValid, stageData) => {
    if (!isValid) return

    setData(prev => ({
      ...prev,
      ...stageData,
    }))
    setCurrentStage(prev => prev + 1)
  }

  const handleFinish = (isValid, stageData) => {
    if (!isValid) return

    const completedData = { ...data, ...stageData }
    setData(completedData)
    console.log(completedData)
  }

  return (
    <AuthFrame stage={currentStage}>
      <div className={`signup-page relative isolate flex flex-col mx-auto overflow-hidden signup-page--stage-${currentStage}`}>
        <StageCounter currentStage={currentStage} />

        <div className="signup-stage-viewport relative w-full h-[370px] flex-[0_0_370px] min-w-0 overflow-hidden" aria-label="فرم ثبت‌نام">
          <div
            className="signup-stage-track flex w-[300%] h-full flex-row-reverse will-change-transform"
            style={{ '--stage-offset': `${(currentStage - 1) * +33.333333}%` }}
          >
            <div
              className="signup-stage-slide"
              aria-hidden={currentStage !== 1}
            >
              <Stage1 onValidate={handleValidate} inputData={data} isActive={currentStage === 1} />
            </div>

            <div
              className="signup-stage-slide"
              aria-hidden={currentStage !== 2}
            >
              <Stage2
                onValidate={handleValidate}
                inputData={data}
                isActive={currentStage === 2}
                onBack={() => setCurrentStage(1)}
              />
            </div>

            <div
              className="signup-stage-slide"
              aria-hidden={currentStage !== 3}
            >
              <Stage3
                onValidate={handleFinish}
                inputData={data}
                isActive={currentStage === 3}
                onBack={() => setCurrentStage(2)}
              />
            </div>
          </div>
        </div>
        <Link className="auth-text-link mt-3 text-center text-[11px]" to="/ghizilchi/auth">بازگشت به انتخاب ورود یا ثبت‌نام</Link>
      </div>
    </AuthFrame>
  )
}

export default Signup
