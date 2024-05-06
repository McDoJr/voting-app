
const candidate = (firstname, lastname, votes) => {
    return {firstname, lastname, votes}
}

export const positions = (type) => {
    const positions = {
        executive: ['president', 'vice-president', 'secretary', 'treasurer'],
        local: ['governor', 'vice-governor', 'treasurer', 'auditor'],
    }

    return positions[type];
}

export const candidates = (type) => {
    const data = {
        executive: {
            president: [
                candidate("Johnny", "Sins", 180),
                candidate("Alex", "Guduyo", 22)
            ],
            "vice-president": [
                candidate("Allan", "Rubilla", 26),
                candidate("Johnny", "Smith", 30),
            ],
            secretary: [
                candidate("John", "Arpon", 60),
                candidate("Tee", "Calo", 32)
            ],
            treasurer: [
                candidate("Chayle", "Famador", 40),
                candidate("Charles", "Anoc", 22)
            ],
        },
        local: {
            governor: [
                candidate("Emily", "Pantin", 31),
                candidate("Ralph", "Guduyo", 118),
            ],
            "vice-governor": [
                candidate("Liza", "Balladares", 71),
                candidate("Kathryn", "Villahermosa", 29),
            ],
            treasurer: [
                candidate("Nonoy", "Revillame", 40),
                candidate("Andrea", "Bacog", 22)
            ],
            auditor: [
                candidate("Joshua", "Bas", 40),
                candidate("Dominic", "Bomediano", 22)
            ],
        }
    }

    return data[type];
}