
export default function swDev(){
  if("serviceWorker" in navigator){
    let url = `${process.env.PUBLIC_URL}/service-worker.js`;
    navigator.serviceWorker.register(url).then(response =>{
        console.warn("response", response)
    })
  }
}