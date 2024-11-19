export const addUser = (data) => {
    return{
        type:'add',
        payload:data
    }
}

export const deletUser =(did)=>{
    return{
        type:'delet',
        payload:did
    }
}