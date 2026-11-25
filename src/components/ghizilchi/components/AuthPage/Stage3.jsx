import React, { useState } from 'react'
import ErrorField from '../Reusable/ErrorField'
import FormActions from '../Reusable/FormActions'
import AuthBottuns from '../Reusable/AuthBottuns'

const Stage3 = ({ onValidate, inputData, onBack, isActive }) => {
  const [errors, setErrors] = useState({})
  const [pass, setPass] = useState(inputData.pass ?? '')
  const [isSent, setIsSent] = useState(false)

  const getErrors = ({ pass }) => {
    const newErrors = {}
    if (!pass.trim()) newErrors.pass = 'رمز را وارد کنید'

    return newErrors
  }

  const validate = () => {
    const newErrors = getErrors({ pass })
    setErrors(newErrors)
    onValidate(Object.keys(newErrors).length === 0, { pass })
  }
  const onBackF = () => {
    setIsSent(false)
    onBack()
  }
  const handleSMS = () => {
    if ("sms if")
      console.log("s")
    setIsSent(true);
  }

  return (
    <div className="signup-stage signup-stage--three">
      <div className="signup-form-content">
        <div className="signup-fields">
          <ErrorField
            label="رمز عبور"
            error={errors.pass}
            id="password"
            disabled={!isActive}
            type="password"
            value={pass}
            onChange={e => {
              setPass(e.target.value)
              if (errors.pass) setErrors({ ...errors, pass: getErrors({ pass: e.target.value }).pass })
            }}
            placeholder="رمز عبور"
            autoComplete="new-password"
          />
        </div>
        <section className="signup-verification mt-[13px] p-[13px_14px_12px]" aria-labelledby="signup-verification-title">
          <div className="signup-verification-heading flex items-start gap-[9px]">
            <span className="signup-verification-icon grid w-[27px] h-[27px] flex-[0_0_27px] place-items-center rounded-[9px] text-[color:var(--color-gold-400)] text-[14px] font-[800]" aria-hidden="true">✓</span>
            <div className="signup-verification-copy min-w-0">
              <h2 id="signup-verification-title" className="signup-verification-title m-[0] text-[color:var(--color-emerald-900)] text-[12px] font-[800] leading-[1.6]">تأیید شماره تلفن</h2>
              <p className="signup-verification-description m-[2px_0_0] text-[color:var(--color-muted)] text-[10px] leading-[1.65]">برای تأیید شماره تلفن کد پیامک‌شده را وارد کنید</p>
            </div>
          </div>
          {!isSent ?  (
                      <div className="signup-verification-send flex items-center gap-[8px] mt-[10px]">
            <span className="signup-verification-phone flex min-w-[0] h-[34px] items-center justify-center rounded-[9px] text-[color:var(--color-emerald-800)] font-[inherit] text-[11px] font-[700] tracking-[0.35px]" dir="ltr">{inputData.phone || 'شماره تلفن'}</span>
            <AuthBottuns
              variant="sms"
              onClick={handleSMS}
              disabled={!isActive}
            >
              ارسال کد
            </AuthBottuns>
          </div>
          ) : (
          <div>
          <ErrorField
            label={<>کد ارسالشده به شماره {inputData.phone} را وارد کنید</>}
            labelClassName="signup-verification-label block m-[9px_0_5px] text-[color:var(--color-emerald-800)] text-[10px] leading-[1.6]"
            id="smsCode"
            className="signup-input--sms"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            dir="ltr"
            placeholder="کد تأیید پیامک"
            disabled={!isActive}
          />
          </div>
          )}
        </section>
      </div>

      <FormActions onNext={validate} onBack={onBackF} nextLabel="ثبت‌نام" disabled={!isActive} />
    </div>
  )
}

export default Stage3
