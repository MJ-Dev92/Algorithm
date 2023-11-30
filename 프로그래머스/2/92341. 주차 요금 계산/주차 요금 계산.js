const calculateParkingCost = (fees,carPerTime)=>{
    const [basicTime,basicFee,perTime,perFee] = fees
    const result = Object.entries(carPerTime).map(([carNumber,timeRange])=>{
        let totalFee
        if(basicTime >= timeRange){
            totalFee = basicFee             
        }
        else{
            totalFee = basicFee + Math.ceil((timeRange - basicTime) / perTime) * perFee
        }
        return {totalFee,carNumber}
    })

    return result.sort((a,b)=>a.carNumber > b.carNumber ? 1 : -1).map(({totalFee})=>Number(totalFee))
}

function solution(fees, records) {
    var answer = [];
    const carPerTime = {}
    const parkingCar = {}
    // 출차가 존재하지 않는 차량 제외 시간 계산
    const recordsData = records.map((record)=>{
        const [time,carNumber,status] = record.split(' ')
        const [hour,minute] = time.split(':').map(str=>Number(str))
        const timeRange = hour * 60 + minute

        if(status === 'IN'){
            parkingCar[carNumber] = timeRange
        }
        else if(status === 'OUT'){
            const inTimeRange = parkingCar[carNumber]
            if(carPerTime[carNumber] === undefined){
                carPerTime[carNumber] = (timeRange - inTimeRange)
            }
            else{
                carPerTime[carNumber] += (timeRange - inTimeRange)
            }

            delete parkingCar[carNumber]
        }
    })

    // 출차하지 않은 차량 시간 계산
    Object.entries(parkingCar).forEach(([carNumber,timeRange])=>{
        if(carPerTime[carNumber] === undefined){
            carPerTime[carNumber] = (24*60-1 - timeRange)
        }
        else{
            carPerTime[carNumber] += (24*60-1 - timeRange)
        }
    })

    // 시간에 대한 차량의 요금 계산 리턴 
    const result = calculateParkingCost(fees,carPerTime)
    return result;
}