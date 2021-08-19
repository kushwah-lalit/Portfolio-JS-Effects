var linktags=document.querySelectorAll('.nav-menu a');
for(var i=0;i<linktags.length;i++){
    linktags[i].addEventListener('click',function(event){
        event.preventDefault();
        var sections=this.textContent.trim().toLowerCase();
        var sectionreach=document.getElementById(sections);
        var coordinate=sectionreach.getBoundingClientRect();
        var current=0;
        var scrollInterval=setInterval(function(){
          if(current>=coordinate.y){
              clearInterval(scrollInterval);
              return;
          } 
           current+=50;
            window.scrollBy(0,50);
        },50);
        
    });
}

var check=false;
window.addEventListener("scroll", function() {
    var element =document.getElementById('skills');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if(check==false&&position.top<= window.innerHeight) {
        check=true;
        var divFillers=document.querySelectorAll(".skill-progress > div");
        for(let i of divFillers){
            i.style.width=0+'%';
            // let mark=i.getAttribute('data-value');
            let count=0;
            let interval=setInterval(function(){
                let mark=i.getAttribute('data-value');
                if(count>=mark){
                    clearInterval(interval);
                    count=0;
                    return;
                }
                count++;
                i.style.width=count+'%';
               
            },5);
        }
       
    }else if(position.top>window.innerHeight){
         check=false;
        var divFillers=document.querySelectorAll(".skill-progress > div");
        for(let i of divFillers){
          i.style.width=0+'%';
        }
    }
});
