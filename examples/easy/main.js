import Ouiz from './js/ouiz.js'
let ouiz = new Ouiz()
let omitted = [ "@context", "id", "label", "pair:label", "name",  "inbox", "outbox", "followers", "following", "publicKey", "shape", "type", "title", "color", "image"]


document.getElementById("loadData").addEventListener("click", function() {
  loadData()
});


async function loadData(){
  let url = document.getElementById("inputUrl").value
  console.log("click",url,ouiz)
  await ouiz.load(url)
  console.log(ouiz)
  await ouiz.toVis(omitted)
  console.log(ouiz)

  console.log(ouiz)
  document.getElementById("result").innerHTML = JSON.stringify(ouiz.network, undefined,2)
}
