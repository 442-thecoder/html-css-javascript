const mod = document.getElementById("modal")
const btn = document.getElementById("btn")
let arr = ["red","blue","green","yellow","voilet","gold","orange","wheat","black"]
function openmodal(audioName)
{
    mod.style.display='block'
    document.body.style.backgroundColor="rgba(0,0,0,0.4)"
        
}
function closemodal()
{
    mod.style.display="none"
    const index = Math.round(Math.random()* 10000000).toString(16)
    document.body.style.backgroundColor="#"+index
}
