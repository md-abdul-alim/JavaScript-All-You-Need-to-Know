//Run bubbling and delegation separately

// //Event bubbling: children to parent
// const li = document.querySelector('li')
// const ul = document.querySelector('ul')
// const container = document.querySelector('.container')
// li.addEventListener('click',()=>{//calling anonyimous
//     console.log("li clicked!")
// })
// ul.addEventListener('click',()=>{
//     console.log("ul clicked!")
// })
// container.addEventListener('click',()=>{
//     console.log("container clicked!")
// })

//Event delegation: parent to children
//container e click korle ul li sob jaiga tei click hobe
const container1 = document.querySelector('.container')

// container1.addEventListener('click',(e)=>{
//     console.log(e.target)
// })

container1.addEventListener('click',(e)=>{
    if(e.target.id =='sample'){
        // console.log(e.target)
        e.target.classList.add('custom')
    }
})
