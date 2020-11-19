// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObject = { ...driver };

    newObject[key] = value
    return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newObject = { ...driver };

    newObject[key] = undefined;
    return newObject
}

// function deleteFromDriverByKey(driver, key) {
//     const newObject = { ...driver };
//     newObject[key] = undefined;
//     return newObject
// }

function destructivelyDeleteFromDriverByKey(driver, key) {
    driver[key] = undefined;
    return driver
}