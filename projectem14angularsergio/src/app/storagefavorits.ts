
export class storagefavorits{
        favorits=new Array();
        desar= function(nom,tipokey){
            if(JSON.parse(localStorage.getItem(tipokey))!=null){
                this.favorits=JSON.parse(localStorage.getItem(tipokey));
            }
            this.favorits.push(nom);
            localStorage.setItem(tipokey, JSON.stringify(this.favorits));   
        }
        mostrar= function(tipokey) {
            console.log(localStorage.getItem(tipokey));    
            return localStorage.getItem(tipokey);
        }
        verifica=function(nom,tipokey){
            if(JSON.parse(localStorage.getItem(tipokey))!=null){
                let temp=JSON.parse(localStorage.getItem(tipokey));
                let temp2=temp.find(a=>a==nom);
                if(temp2!=undefined) return true;
                else return false;
            }else return false;
        }
        esborrar= function(nom,tipokey) {
            this.favorits=JSON.parse(localStorage.getItem(tipokey));

            let temp2=this.favorits.find(a=>a==nom);
            let index=this.favorits.indexOf(temp2);
            this.favorits.splice(index,1);
            console.log(this.favorits);
            localStorage.removeItem(tipokey);
            localStorage.setItem(tipokey, JSON.stringify(this.favorits)); 
        }
}

