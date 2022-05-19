function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    let time = 0;

    const sum = (arr) => arr.reduce((a, b) => a + b, 0);

    while (bridge.length) {
        time += 1;
        bridge.shift();

        if (truck_weights.length) {
            if (sum(bridge) + truck_weights[0] <= weight)
                bridge.push(truck_weights.shift());
            else bridge.push(0);
        }
    }

    return time;
}
