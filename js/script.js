
 const uppercaseFunction=()=>{
    var tejas= document.getElementById('txtarea1').value;
    getvalue=tejas.toUpperCase();
    var tejas= document.getElementById('txtarea1').value=getvalue;
}

 const LowerFunction=()=>{
    var tejas= document.getElementById('txtarea1').value;
    getvalue=tejas.toLowerCase();
    var tejas= document.getElementById('txtarea1').value=getvalue;
 }

const CapitalizeFunction = () => {
    var tejas= document.getElementById('txtarea1').value;
    let myupper = tejas.charAt(0).toUpperCase();
    console.log(myupper);
    let newtext = tejas.split(/[ ]+/);
    let setNewText=(newtext.join(" "));
    console.log(newtext);
    console.log(setNewText);
}

const ExtraSpaceFunction=()=>{
    var tejas= document.getElementById('txtarea1').value;
    console.log(tejas);
    getvalue=tejas.trim();
    var tejas=document.getElementById('txtarea1').value=getvalue;
    console.log("REMOVED LEFT RIGHT SIDE EXTRASPACE  SUCCESSFULLY");
}


const CopyFunction=()=>{
    var getText = document.getElementById("txtarea1");
    getText.select();
    navigator.clipboard.writeText(getText.value); 
    console.log("COPY TEXT DONE SUCCESSFULLY");
}
   

const ClearTextFunction=()=>{
    var ClearText = document.getElementById("txtarea1").value=" ";
    console.log("YOUR TEXT HAS SUCCESSFULLY CLEARED");
}

const CountCharFunction=()=>{
    var c1 = document.getElementById("txtarea1").value;
    let count1=c1.length;
    alert(count1);
}
const UnderLineTextFunction=()=>{
    let g1=document.getElementById("txtarea1").style.textDecoration="underline";
    console.log("UNDERLINE DONE SUCCESSFULLY");
}

const ReverseTextFunction=()=>{
    let g2=document.getElementById("txtarea1").addEventListener('click',function(str){
		if(!str || str.length < 2 || typeof str!== 'string') 
                {
			            return 'Not valid';
		        }
		const revArray = [];
		const length = str.length - 1;
		for(let i = length; i >= 0; i--) 

        {
			revArray.push(str[i]);
		}
		return revArray.join('');
        
	})
}

const BinaryTextFunction=(str = '')=>{
    let g3=document.getElementById("txtarea1").value;
        let res = '';
        res = str.split('').map(char => {
           return char.charCodeAt(0).toString(2);
        }).join(' ');
        return res;
        console.log(res)
     };


const setmode=document.getElementById('themeSwitch').addEventListener('click',function(){
    let checked=true;
    let unchecked=false;
    if (checked) {
        document.body.style.backgroundColor="black";
        document.getElementById('mytext').style.color="White";
        document.getElementById('Designer').style.color="White";
    }
    else{
        document.body.style.backgroundColor="gray";
    }
})




