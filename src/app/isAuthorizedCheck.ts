export const isAuthorizedCheck = (session) => {
    if (!session || !session.user || session.user.email !== process.env.USER_EMAIL) {
        return false // Пользователь не авторизован
    } else {
        return true // Пользователь авторизован
    }
}