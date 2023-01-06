const regExpdDic = {
    email: /^([a-zA-z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
}

/**
 * 
 * @param {HTMLInputElement} el
 * @returns {Boolean} - return true if input valid or doesnt has data-required attr
 */
export function validate(el) {
    const regExpName = el.dataset.required
    if (!regExpdDic[regExpName]) return true
    return regExpdDic[regExpName].test(el.value)
}