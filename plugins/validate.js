import { extend, localize } from 'vee-validate'
import { required, email, max, min, alpha_spaces, length, digits } from 'vee-validate/dist/rules'

import es from 'vee-validate/dist/locale/es.json'

localize('es', es)

extend('required', {
    ...required,
    message: 'Este campo es requerido'
})

extend('email', {
    ...email
})

extend('digits', {
    ...digits
})

extend('length', {
    ...length
})

extend('max', {
    ...max
})

extend('min', {
    ...min
})

extend('alpha_spaces', {
    ...alpha_spaces
})
