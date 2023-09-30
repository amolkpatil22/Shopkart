

export const getLocaluserData = (value)=>{

    let data = localStorage.getItem(value)
    
    return JSON.parse(data)
}
export const setLocalUserData = (key,value)=>{

localStorage.setItem(key,JSON.stringify(value))
    
}