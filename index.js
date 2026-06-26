const inpBtn = document.getElementById("inp-btn")
const tabBtn = document.getElementById("tab-btn")
const delBtn = document.getElementById("del-btn")

const inpEl = document.getElementById("inp-el")
const ulEl = document.getElementById("ul-el")

let inpVal = ""
let urlList = []

inpBtn.addEventListener("click", function(){
    inpVal = inpEl.value;
    console.log(inpVal)
    urlList.push(inpVal)
    inpEl.value = ""
    renderLists(urlList)
})

function renderLists(arrVal){
    for(let count = 0; count<arrVal.length; count++){
        ulEl.innerHTML +=
        `
            <li>
                <a target='_blank' href='${arrVal[count]}'>
                    ${arrVal[count]}
                </a>
            </li>
        `
    }
}