const numbers = {
    'baseDamage': 1,
    'attacksPerSecond': 1,
    'strength': 1,
    'critDamage': 1,
    'additiveMulti': 1,
    'multiplicativeMulti': 1,
    'bonusMulti': 1
}

function getTotal() {
    return (5 + numbers.baseDamage) * (1 + (numbers.strength / 100)) * (1 + (numbers.critDamage / 100)) * numbers.additiveMulti * numbers.multiplicativeMulti + Number(numbers.bonusMulti);
}

function updateDamage(event) {
    if (!event.target.value) numbers[event.target.id] = 1;
    else numbers[event.target.id] = event.target.value;
    document.getElementById('dph').textContent = getTotal();
    document.getElementById('dps').textContent = Number(getTotal()) * numbers.attacksPerSecond;
}