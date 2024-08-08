import { InvisibleSmartCaptcha } from '@yandex/smart-captcha'
import { useCallback, useState } from 'react'

export const InvisibleCaptcha = () => {
    const [ token, setToken ] = useState('')
    const [ visible, setVisible ] = useState(false)

    const handleChallengeHidden = useCallback(() => setVisible(false), [])

    const handleButtonClick = () => setVisible(true)

    return (
        <>
            <button type="button" onClick={handleButtonClick}>Validate</button>
            <InvisibleSmartCaptcha
                sitekey={process.env.YANDEX_CLIENT_ID}
                onSuccess={setToken}
                onChallengeHidden={handleChallengeHidden}
                visible={visible}
            />
        </>
    )
}