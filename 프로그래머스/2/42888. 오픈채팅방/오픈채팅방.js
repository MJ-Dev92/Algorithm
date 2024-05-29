function solution(record) {
    var answer = [];
    const map=new Map();
    record.forEach(item=>{
        const imme=item.split(' ');
        if((imme[0]==='Enter')||(imme[0]==='Change')){
               map.set(imme[1],imme[2]);
        }
    });
    record.forEach(item=>{
        const imme=item.split(' ');
        let name=map.get(imme[1]);
        if(imme[0]==='Enter'){
            answer.push(`${name}님이 들어왔습니다.`);
        }
        else if(imme[0]==='Leave'){
            answer.push(`${name}님이 나갔습니다.`);
        }
    })
    //console.log('map',map);
    return answer;
}