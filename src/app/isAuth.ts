export const isAuth = (session) => {
    if (session && new Date(session.expires) < new Date()) {
        // todo: Implement a function isAuthorised and include all logic there: expires and email check
        throw new Error('Your session is expired|403')
    }

    if (!session || !session.user || session.user.email !== process.env.USER_EMAIL) {
        throw new Error('Custom Forbidden|403')
    }
}