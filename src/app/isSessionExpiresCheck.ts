export const isSessionExpiresCheck = (session) => {
    if (session && new Date(session.expires) < new Date()) {
        return true // Сеанс истек
    } else {
        return false // Сеанс действителен
    }
}
