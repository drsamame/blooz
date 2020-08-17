import { extend, localize } from 'vee-validate'
import { required, email, max, min, alpha_spaces, length, digits, alpha_dash, confirmed, regex } from 'vee-validate/dist/rules'

import es from 'vee-validate/dist/locale/es.json'

localize('es', es)

extend('required', {
    ...required,
    message: 'Este campo es requerido'
})

extend('email', {
    ...email
})

extend('confirmed', {
    ...confirmed
})

extend('digits', {
    ...digits
})

extend('length', {
    ...length
})

extend('alpha_dash', {
    ...alpha_dash
})

extend('alpha_spaces', {
    ...alpha_spaces
})

extend('max', {
    ...max,
})

extend('min', {
    ...min,
})

extend('regex', {
    ...regex,
})


extend('alpha_num_spaces', {
    computesRequired: true,
    message: field => 'Solo se aceptan caracteres alfanuméricos',
    validate: value => /^[\w\-\s,.;_""º]+$/.test(value)
});

extend('num_slash', {
    computesRequired: true,
    message: field => 'Solo se acepta el mes y año (MM/YY)',
    validate: value => /^\d+([0-9]\/[1-9]\d+)*$/.test(value)
});

