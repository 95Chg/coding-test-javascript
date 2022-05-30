function solution(skill, skill_trees) {
    const answer = [];

    for (let i = 0; i < skill_trees.length; i += 1) {
        const str = skill_trees[i].split('').filter((el) => skill.includes(el)).join('');
        if (skill.indexOf(str) === 0) answer.push(str);
    }

    return answer.length;
}
