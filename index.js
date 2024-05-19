let todowork= document.querySelector("#container>input")
let priority= document.querySelector("#container>select")
let addtodoBtn=document.querySelector("#container>button")
let tBody=document.querySelector("#tablecont>tbody")

let data=[]


function savedata(){
    localStorage.setItem("data", JSON.stringify(data))
  }

  function loaddata(){
    let storedValue= JSON.parse(localStorage.getItem("data"))
if (storedValue){
    data=storedValue
    showData(data)
}}

function add(){
   let obj={
    title : todowork.value,
    priority : priority.value

   }
   data.push(obj)
   savedata()
   showData(data)
console.log(data)
}


function showData(arr){
    tBody.innerHTML=""
    arr.forEach(function(ele,i) {
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerHTML=`${i+1}`

        let td2=document.createElement("td")
        td2.innerHTML=ele.title

        let td3=document.createElement("td")
        td3.innerHTML=ele.priority

        let td4=document.createElement("td")
        let btn=document.createElement("button")
        btn.innerHTML="Delete 🧹"
        btn.addEventListener("click" ,function(){
            handleDelete(i)
           })
        td4.append(btn)

        tr.append(td1, td2, td3, td4)
        tBody.append(tr)
        
    })
}
function handleDelete(index){
    // console.log(index)
    // data.splice(index , 1)

    data = data.filter(function (ele,i){
          return index!==i
    })
   
    savedata()
    showData(data)
addtodoBtn.addEventListener("click", add)
   loaddata(data)}
   loaddata()