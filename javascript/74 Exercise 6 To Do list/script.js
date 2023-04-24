// Create a ToDo list app capable of storing your ToDo's in local storage. Add an option to create, delete and access all the ToDos

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    console.log(e)
    todo.innerHTML = `
    <h1>${titlec} </h1>
    <p> ${descc}</p>
    `
    title.value = ""
    desc.value = ""
  })
  
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
  })