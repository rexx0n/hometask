/**
 * 
 * @param {String} msg 
 */

function inputErrorTemplate(msg) {
    return `
    <div class="invalid-feedback">${msg}</div>`
}
/**
 * 
 * @param {HTMLInputElement} el 
 */

export function showInputError(el) {
    const parent = el.parentElement
    const msg = el.dataset.invalidMessage || 'Invalud input'
    const template = inputErrorTemplate(msg)
    el.classList.add('is-invalid')
    parent.insertAdjacentHTML('beforeend', template)
}

/**
 * 
 * @param {HTMLInputElement} el 
 * 
 */

export function removeInputError(el) {
    const parent = el.parentElement
    const err = parent.querySelector('.invalid-feedback')
    if (!err) return

    el.classList.remove('is-invalid')
    parent.removeChild(err)
}