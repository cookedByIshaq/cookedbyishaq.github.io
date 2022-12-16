let controller;
const url = "flame.avi"


const downloadButton = document.createElement("button")
downloadButton.textContent = "download"

document.body.appendChild(downloadButton)

downloadButton.addEventListener("click",handle)

function handle(){

    if(controller){
        console.log("abort")
        controller.abort()
        controller =""
        downloadButton.textContent = "download"

        return
    } else {
        controller = new AbortController();
        const signal = controller.signal
        downloadButton.textContent ="cancel"
        fetch(url,{signal}).then((res)=>{
            console.log("Download finished",res)
        }).catch(err=>{
            console.log(err)
        })
    }
}