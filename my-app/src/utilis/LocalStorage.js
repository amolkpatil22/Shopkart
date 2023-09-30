

export const getData = (value)=>{

    let data = localStorage.getItem(value)
    
    return JSON.parse(data)
}
export const setData = (key,value)=>{

localStorage.setItem(key,JSON.stringify(value))
    
}