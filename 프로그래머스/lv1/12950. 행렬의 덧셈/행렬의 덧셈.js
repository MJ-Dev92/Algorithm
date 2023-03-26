function solution(a,b){
            let z = new Object();
            for(let i=0;i<a.length;i++){
                z[i.toString()] = {};
                for(let j=0;j<a[i].length;j++){
                    z[i.toString()][j.toString()] = {};
                    z[i.toString()][j.toString()] = a[i.toString()][j.toString()] + b[i.toString()][j.toString()]
                }   
            }
            return Object.values(z).map(e=>Object.values(e))
        }