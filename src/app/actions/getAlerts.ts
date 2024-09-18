'use server'
import { Alert } from '@/app/db/alert.model.ts'
import { Op } from 'sequelize'

export const getAlerts = async ()
    : Promise< Array<Alert> > => {
    const now = new Date()
    return await Alert.findAll({
        where: {
            startDate: {
                [Op.lt]: now
            },
            endDate: {
                [Op.gt]: now
            }
        },
        order: [ [ 'startDate', 'DESC' ] ],
    }).then(alerts => alerts.map(alert => alert.toJSON()))
}