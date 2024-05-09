const numbers = {
    'baseDamage': 0,
    'attacksPerSecond': 0,
    'strength': 0,
    'critDamage': 0,
    'additiveMulti': 0,
    'multiplicativeMulti': 0,
    'bonusMulti': 0
}

function getTotal() {
    return (5 + numbers.baseDamage) * (1 + (numbers.strength / 100)) * (1 + (numbers.critDamage / 100)) * numbers.additiveMulti * numbers.multiplicativeMulti + numbers.bonusMulti;
}

function updateDamage(event) {
    numbers[event.target.id] = event.target.value;
    document.querySelector('.dph').textContent = getTotal();
}