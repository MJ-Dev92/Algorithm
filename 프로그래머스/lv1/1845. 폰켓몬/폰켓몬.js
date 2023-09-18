function solution(nums) {
    var answer = 0;
    let num = new Array(200000).fill(0);
    let cnt = 0;
    let result = nums.length / 2;
    
    for (let i = 0; i < nums.length; ++i) {
        if (num[nums[i]] === 0) {
            num[nums[i]] = 1;
            cnt++;
        }
    }
    
    if(cnt > result) {
        answer = result;
    } else {
        answer = cnt
    }
    
    return answer;
}