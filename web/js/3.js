
var button=document.getElementsByClassName('btu');
var tu=document.getElementsByClassName('tu');
var i=0;



console.log(111);


console.dir(tu);
console.log(button);
button[0].addEventListener('click',function(){

for(var i=0;i<4;i++)
{

    tu[i].className='tu';
}

    tu[0].className='tu front';

})


button[1].addEventListener('click',function(){

for(var i=0;i<4;i++)
{

    tu[i].className='tu';
}

    tu[1].className='tu front';

})
button[2].addEventListener('click',function(){

for(var i=0;i<4;i++)
{

    tu[i].className='tu';
}

    tu[2].className='tu front';

})
button[3].addEventListener('click',function(){

for(var i=0;i<4;i++)
{

    tu[i].className='tu';
}

    tu[3].className='tu front';

})














