var ob = document.getElementById("observation-table");
var se = document.getElementById("piezometers");
const gen = () =>{
    while(ob.children[1]){
        ob.removeChild(ob.lastChild);
    }
    const s = se.value;
    let count = 0;
    if(s=="two"){
        count = 2;
    }
    else if(s=="three"){
        count = 3;
    }
    else if(s=="four"){
        count = 4;
    }
    else if(s=="five"){
        count = 5;
    }
    else if(s=="six"){
        count = 6;
    }
    else if(s=="seven"){
        count = 7;
    }
    else if(s=="eight"){
        count = 8;
    }
    else if(s=="nine"){
        count = 9;
    }
    else if(s=="ten"){
        count = 10;
    }
    for(var i=0;i<count;i++){
        let row = document.createElement("tr");
        for(var z=0;z<6;z++){
            let d = document.createElement("td");
            let j = document.createElement("input");
            j.style.margin = 0+"px";
            j.style.padding = 1+"px";
            j.setAttribute("id","input-"+parseInt(i+1)+"-"+parseInt(z+1));
            if(z==0){
                j.style.disabled = "true";
                j.value = i+1;
            }
            d.appendChild(j);
            row.appendChild(d);
        }
        ob.appendChild(row);
    }
}