const count = document.getElementById('count')
const print1 = document.getElementById('print1')
const print = document.getElementById('print')
document.getElementById('print')
console.log('print.textcontent')
document.getElementById('print1')
console.log('print1.textcontent')
document.getElementById('count')
console.log(count.textContent)    
let c = 0
function incr()
{
    console.log("increment called")
    if (c>=10)
    {
          alert("number should not be increased more than 10")
          
    }
    else
    {
        c++;
        count.textContent = c;
        if(c%2==0)
        {
            document.getElementById('print').textContent="Even"
            
        }
        else
        {
            document.getElementById('print').textContent="odd"
        }
       
    }
}
function decr()
{
    console.log("decrement called")
    if (c<=0)
    {
          alert("number should not be decreased less than 0")
    }
    else
    {
        c--;
        count.textContent = c;
        if(c%2==0)
        {
            document.getElementById('print').textContent="Even"
        }
        else
        {
            document.getElementById('print').textContent="odd"
        }
        
    }
}
function reset()
{
    console.log("reset called")
    count.textContent = 0

}





