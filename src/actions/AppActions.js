export const CHANGE_COUNTER = 'CHANGE_COUNTER'

export const updateCounter = (count) => {
    return {
        type:CHANGE_COUNTER,
        payload:count
    }
}