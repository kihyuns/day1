//도넛의 넓이 구하기
//

function getArea(redius){
    const area = Math.pow(redius,2) * Math.PI
    return area
}

function getTotal(r1, r2){

    return Math.abs(getArea(r1) - getArea(r2))  //abs = 절대값
}

console.log(getTotal(10,20))