const climbStairs = function(steps) {
    if (steps <= 3) {
        return steps
    }
    let first = 2
    let second = 3
    let total = 0
    for(let i = 3; i < steps; i++){
        total = first + second
        first = second
        second = total
    }
    return total
}
// Test cases
for(let i = 4; i < 50; i++) {
    console.log(climbStairs(i))
}