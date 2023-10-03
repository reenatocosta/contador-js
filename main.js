// 02 DE agosto
const frm = document.querySelector('form')
const resp = document.querySelector('h3')


frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const initialDate = frm.inDate.value
    const today = new Date()
    const dateControl = new Date()

    const parts = initialDate.split('-')                  
    dateControl.setDate(Number(parts[2]))
    dateControl.setMonth(Number(parts[1])-1)
    dateControl.setFullYear(Number(parts[0]))

    const delay = today - dateControl                                                                                
    const days = delay / 86400000            
    resp.innerText=`Eu estudo à: ${days} dia(s).`     
})