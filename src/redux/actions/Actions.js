export const INC_COUNTER = "INCREMENET_COUNTER"


export const  updateCounter = (count)=>{
    return {
        type:INC_COUNTER,
        payload:(count)

    }
}