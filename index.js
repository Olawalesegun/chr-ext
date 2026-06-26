const inpBtn = document.getElementById("inp-btn")
const tabBtn = document.getElementById("tab-btn")
const delBtn = document.getElementById("del-btn")

const inpEl = document.getElementById("inp-el")
const ulEl = document.getElementById("ul-el")

let urlList = []

const leadsFromLocalStorage =
JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){

    urlList = leadsFromLocalStorage

    renderLists(urlList)
}

inpBtn.addEventListener("click", function(){
    const inpVal = inpEl.value.trim();

    if(inpVal === ""){
        return
    }
    console.log(inpVal)
    urlList.push(inpVal)
    inpEl.value = ""
    renderLists(urlList)
})

tabBtn.addEventListener("dblclick", function(){
    urlList.push(inputValue)
    localStorage.setItem("myLeads", JSON.stringify(urlList))
})

function renderLists(arrVal){
    let listItems = " "
    for(let count = 0; count<arrVal.length; count++){
        listItems +=
        `
            <li>
                <a target='_blank' href='${arrVal[count]}'>
                    ${arrVal[count]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

delBtn.addEventListener("click", function(){
    localStorage.clear()
    urlList = []
    renderLists(urlList)
})