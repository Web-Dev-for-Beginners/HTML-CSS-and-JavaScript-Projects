var cel,fer,prev_cel=0,prev_fer=0;

document.querySelector('.btn').addEventListener('click',function(){
    cel = parseFloat(document.querySelector('#input-cel').value);
    fer = parseFloat(document.querySelector('#input-fer').value);

    if((!fer)||fer==prev_fer)
    { 
        fer = ((cel*9)/5)+32;
        document.querySelector('#input-fer').value=fer;
        prev_fer=fer;
        prev_cel=cel;
    }
    else{   
        cel = ((fer-32)*5)/9;
        document.querySelector('#input-cel').value=cel;
        prev_cel=cel;
        prev_fer=fer;
    }
});
