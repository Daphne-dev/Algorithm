function solution(record) {
    const answer = [];
    const lastUserInfo = {};
    
    for (let i = 0; i < record.length; i++) {
        let [ action, uid, nickname ] = record[i].split(" ");
        
        if (action === "Enter" || action === "Change") {
            lastUserInfo[uid] = { nickname };
        }
    }
    
    for (let i = 0; i < record.length; i++) {
        let [ action, uid ] = record[i].split(" ");
        let nickname = lastUserInfo[uid].nickname;
        
        if (action === "Enter") {
            answer.push(`${nickname}님이 들어왔습니다.`);
        }
        
        if (action === "Leave") {
            answer.push(`${nickname}님이 나갔습니다.`);
        }
    }
    return answer;
}