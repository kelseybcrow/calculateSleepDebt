const getSleepHours = (day) => {
    // day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8
            break
        case 'tuesday':
            return 7
            break
        case 'wednesday':
            return 5
            break
        case 'thursday':
            return 8
            break
        case 'friday':
            return 7
            break
        case 'saturday':
            return 5
            break
        case 'sunday':
            return 8
            break
    }
}

// console.log(getSleepHours('tuesday'))
// console.log(getSleepHours('monday'))
// console.log(getSleepHours('friday'))

const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
// const days = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// let sum = 0;
// console.log(days.forEach(getSleepHours(day))
// getActualSleepHours()

const getIdealSleepHours = () => {
    const idealHours = 9
    return idealHours * 7
}

// console.log(getActualSleepHours())
// console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than necessary')
    } else {
        console.log('You should get some more rest.')
    }
}
