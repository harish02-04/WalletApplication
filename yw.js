const p=document.getElementById('b1');
const b=document.getElementById('b2');
const m=document.getElementById('b3');
const pb=document.getElementById('b4');


const add=document.getElementById('add');

const cb=document.getElementById('cb');
const am=document.getElementById('am');
const ppy=document.getElementById('ppy');

const head=document.getElementById('h1');
const img=document.getElementById('i1');
var det=["0"];
var k=0;

pb.addEventListener('click',(c)=>{
   head.innerHTML="𝓡𝓮𝓬𝓱𝓪𝓻𝓰𝓮 𝓨𝓸𝓾𝓻 𝓟𝓱𝓸𝓷𝓮";
   img.src="pb.png";
   document.getElementById('bal').style.display='none';
   document.getElementById('con').style.display='none';
   document.getElementById('ap').style.display='none';
   document.getElementById('pb').style.display='block';
   document.getElementById('id01').style.display='block';
});
m.addEventListener('click',(c)=>{
   head.innerHTML="𝓐𝓭𝓭 𝓟𝓸𝓲𝓷𝓽𝓼";
   img.src="ap.png";
   document.getElementById('bal').style.display='none';
   document.getElementById('con').style.display='none';
   document.getElementById('pb').style.display='none';
   document.getElementById('ap').style.display='block';
   document.getElementById('id01').style.display='block';
})
b.addEventListener('click',(c)=>{
   head.innerHTML="𝓒𝓱𝓮𝓬𝓴 𝓑𝓪𝓵𝓪𝓷𝓬𝓮";
   img.src="bal.jpg";
   document.getElementById('bal').style.display='block';
   document.getElementById('con').style.display='none';
   document.getElementById('ap').style.display='none';
   document.getElementById('pb').style.display='none';
   document.getElementById('id01').style.display='block';
});
p.addEventListener('click',(c)=>{
      document.getElementById('i1').src="card.jpeg";
   document.getElementById('h1').innerHTML="𝓐𝓭𝓭 𝓨𝓸𝓾𝓻 𝓒𝓪𝓻𝓭";
   document.getElementById('bal').style.display='none';
   document.getElementById('ap').style.display='none';
   document.getElementById('pb').style.display='none';
   document.getElementById('con').style.display='block';
   document.getElementById('id01').style.display='block';
});
add.addEventListener('click',(c)=>{
   var i1=document.getElementById('inp1').value;
   var i2=document.getElementById('inp2').value;
   var i3=document.getElementById('inp3').value;
   var i4=document.getElementById('inp4').value;
   det.push(i1,i2,i3,i4);
   document.getElementById('i1').src="suc.png";
   document.getElementById('h1').innerHTML="𝒜𝒹𝒹𝑒𝒹 𝒮𝓊𝒸𝒸𝑒𝓈𝓈𝒻𝓊𝓁𝓁𝓎";
   document.getElementById('con').style.display='none';
   document.getElementById('form').reset();
});
cb.addEventListener('click',(c)=>{
   var bi1=document.getElementById('bi1').value;
   var f=-1;
   for(var i=0;i<det.length;i++){
        if(det[i]==bi1){
         var b=det[i+2];
         var n=det[i-1];
         f=1;
         break;
        }
   }
   if(f==-1){
      alert("Invalid Card");
   }
   else{
   document.getElementById('h1').innerHTML="𝓝𝓪𝓶𝓮: "+n+"<br />"+"𝓑𝓪𝓵𝓪𝓷𝓬𝓮: ₹"+b;
   document.getElementById('bal').style.display='none';}
   document.getElementById('form').reset();
});
am.addEventListener('click',(c)=>{
   var ap1=document.getElementById('ap1').value;
   var ap2=document.getElementById('ap3').value;
   var f=-1;
   for(var i=0;i<det.length;i++){
        if(det[i]==ap1){
         det[i+2]=(parseInt(det[i+2])+parseInt(ap2)).toString();
         f=1;
         break;
        }
   }
   if(f==-1){
      alert("Invalid Card");
   }
   else{
   document.getElementById('h1').innerHTML="𝒜𝒹𝒹𝑒𝒹 𝒮𝓊𝒸𝒸𝑒𝓈𝓈𝒻𝓊𝓁𝓁𝓎..."+"<br />"+"𝓒𝓱𝓮𝓬𝓴 𝓨𝓸𝓾𝓻 𝓑𝓪𝓵𝓪𝓷𝓬𝓮!";
   document.getElementById('i1').src="suc.png";
   document.getElementById('ap').style.display='none';}
   document.getElementById('form').reset();
});
ppy.addEventListener('click',(c)=>{
   var a=document.getElementById('rh').value;
   var cn=document.getElementById('pc').value;
   var f=-1;
   for(var i=0;i<det.length;i++){
      if(det[i]==cn){
         if(parseInt(det[i+2])>parseInt(cn)){
         det[i+2]=(parseInt(det[i+2])-parseInt(a)).toString();
         f=1;}
         else{
             f=2;
         }
      } 
   }
   if(f==-1){
      alert("Invalid card");
   }
   else if(f==2){
      alert("Insufficient Balance");
   }
   else{
   document.getElementById('h1').innerHTML="𝑅𝑒𝒸𝒽𝒶𝓇𝑔𝑒𝒹 𝒮𝓊𝒸𝒸𝑒𝓈𝓈𝒻𝓊𝓁𝓁𝓎..."+"<br />"+"𝓒𝓱𝓮𝓬𝓴 𝓨𝓸𝓾𝓻 𝓟𝓱𝓸𝓷𝓮!";
   document.getElementById('i1').src="suc.png";
   document.getElementById('pb').style.display='none';}
   document.getElementById('form').reset();




});
const n=document.getElementById("but");
n.addEventListener('click',(c)=>{
     if(confirm("Are you sure????")){
      location.replace("login.html");}
});