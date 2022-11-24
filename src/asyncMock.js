const notes = [
    {
      id: '1',
      title: 'Nota 1',
      text: 'Esta es la primer nota'
    }, 
    {
      id: '2',
      title: 'Nota 2',
      text: 'Esta es mi segunda nota'
    }
  ]
  
export const getNotes = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(notes)
      }, 2000)
    })
}

export const getNoteById = () => {
    
}