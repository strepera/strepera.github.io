const numbers = {
    'baseDamage': 1,
    'attacksPerSecond': 1,
    'strength': 1,
    'critDamage': 1,
    'additiveMulti': 1,
    'multiplicativeMulti': 1,
    'bonusMulti': 0
}

const addis = {
    'combatLevel': 0
}

function formatNumber(num) {
    if (num >= 1000000000) return (num / 1000000000).toFixed(3) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(3) + "M";
    if (num >= 1000) return (num / 1000).toFixed(3) + "K";
    return num.toFixed(3);
}

function getTotal() {
    const dmg = numbers.baseDamage + 5;
    const str = 1 + numbers.strength / 100;
    const cd = 1 + numbers.critDamage / 100;

    const addi = numbers.additiveMulti;
    const multi = numbers.multiplicativeMulti;
    const bonus = numbers.bonusMulti;
    const multiplied = dmg * str * cd * addi * multi;
    return multiplied + bonus;
}

function combatUpdate(event) {
    let value = Number(event.target.value);
    if (value > 60) value = 60; 
    const addi = value <= 50 ? (value * 4) / 100 : (value - 50 + 200) / 100;
    updateAddi(event.target.id, addi);
}

function updateAddi(type, num) {
    addis[type] = num;
    updateValues();
}

function updateDamage(event) {
    if (!event.target.value) numbers[event.target.id] = 1;
    else numbers[event.target.id] = Number(event.target.value);
    updateValues();
}

function updateValues() {

    let addiTotal = 1;
    for (const addi in addis) {
        document.getElementById(addi + 'Text').innerHTML = formatNumber(addis[addi]);
        addiTotal += addis[addi];
    }
    numbers.additiveMulti = addiTotal;

    for (const number in numbers) {
        document.getElementById(number + 'Text').innerHTML = formatNumber(numbers[number]);
    }

    document.getElementById('dph').textContent = formatNumber(getTotal());
    document.getElementById('dps').textContent = formatNumber(getTotal() * numbers.attacksPerSecond);
}