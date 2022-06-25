function solution(dirs) {
  const coord = { x: 0, y: 0 }; // 좌표설정
  const route = new Set();

  for (const dir of dirs) {
    const { x: beforeX, y: beforeY } = coord; // 이동 전 x, y 좌표
    if (dir === 'U') {
      if (beforeY === 5) continue;
      coord.y += 1;
    } else if (dir === 'D') {
      if (beforeY === -5) continue;
      coord.y -= 1;
    } else if (dir === 'R') {
      if (beforeX === 5) continue;
      coord.x += 1;
    } else if (dir === 'L') {
      if (beforeX === -5) continue;
      coord.x -= 1;
    }
    const { x: afterX, y: afterY } = coord; // 이동 후 x, y 좌표

    // (이동 후 x, 이동 후 y / 이동 전 x, 이동 전 y)로 양방향 좌표 설정
    const case1 = `(${afterX},${afterY})/(${beforeX},${beforeY})`;
    const case2 = `(${beforeX},${beforeY})/(${afterX},${afterY})`;
    route.add(case1);
    route.add(case2);
  }

  return route.size / 2;
}
