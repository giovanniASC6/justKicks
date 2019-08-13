database.on("child_added",addinfoToAcc)
const accountContainer=document.querySelector(".account-details")


function addinfoToAcc(rowData){
    const row=rowData.val()
    const name =row.NAME
    const email=row.EMAIL
    const pElement=document.createElement("p")
    pElement.innerText=`${name}
    :${email}`
    messageContainer.appendChild(pElement)
}