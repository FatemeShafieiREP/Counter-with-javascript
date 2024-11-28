 let num=document.querySelector('.num') 
 let decrease=document.querySelector('.decrease')
 let increase=document.querySelector('.increase')
 let reset=document.querySelector('.reset')
let newnum;
    decrease.addEventListener('click',function(){
        newnum=Number(num.innerHTML) -1
        num.innerHTML=newnum
        changecolor(newnum)
    })
        increase.addEventListener('click',function(){
            newnum=Number(num.innerHTML) + 1
            num.innerHTML=newnum
            changecolor(newnum)
        })
    reset.addEventListener('click',function(){
                newnum=0
                num.innerHTML=newnum
                changecolor(newnum)
            })

        function changecolor(number){
                if(number>0){
                    num.style.color = 'green'
                }
                else if(number<0){
                    num.style.color = 'red'
                }
                else{
                    num.style.color = 'white'  
                }
        }
