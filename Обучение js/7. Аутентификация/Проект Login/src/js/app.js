import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config'
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from "./views/form";
import { login } from './services/auth.service';
import { notify, closeNotify } from './views/notifications';
import { getNews } from './services/news.service';

const {form, inputEmail, inputPassword} = UI;
const inputs = [inputEmail, inputPassword]
//Events
form.addEventListener('submit', (e) => {
    e.preventDefault()
    onSubmit()
})
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)))

// Handlers
async function onSubmit() {
    const isValidForm = inputs.every((el) => {
       const isValidInput = validate(el)
       if (!isValidInput) {
        showInputError(el)
       }
       return isValidInput
    })

    if (!isValidForm) return

    try {
        await login(inputEmail.value, inputPassword.value )
        await getNews()
        form.reset()
    } catch (err) {
        
    }
}

notify({msg: 'Some notifacation 1', className:'alert-danger'})
notify({msg: 'Some notifacation 2', className:'alert-warning'})
notify({msg: 'Some notifacation 3', className:'alert-primary'})

setTimeout(() => closeNotify(1), 3000)