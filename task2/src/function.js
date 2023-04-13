export function getArr(arr) {
    let arr1 = []
    arr.forEach((e) => {
        arr1.push(e.value)
        return arr1
    })
    const sortValue = arr1.reduce((a, b) => Math.max(a, b), -Infinity);
    return sortValue
}
function maxValue() {
    const buttons = document.querySelectorAll('.sticer-btn');

    const element = getArr(buttons)
    return element
}
export function result() {
    const value = maxValue();
    const buttons = document.querySelectorAll('.sticer-btn');
    buttons.forEach(e => {
        if (e.value == value) {
            const container = document.querySelector('.container');

            const div = document.createElement('div')
            div.append(e.parentElement)
            container.innerHTML = ''
            container.append(div)
            const btnResult = document.querySelector('.result-btn').classList.add('none');

            console.log(container)
        }
    })
}