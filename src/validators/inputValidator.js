function inputValidator(inputName, inputValue) {
    const checkLength = new RegExp('.{8,}');
    const checkChar = new RegExp('(?=.*[a-zA-Zа-яА-Я])');
    const checkDigit = new RegExp('(?=.*[0-9])');

    const chekEmail = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');

    const isAnother =
        (inputName === 'username') ||
        (inputName === 'first_name') ||
        (inputName === 'last_name');

    if (isAnother) {
        const checkAnother = inputValue.length;

        if (checkAnother < 2) {
            return `${inputName} ust be at least 2 characters long`
        }
    }

    const isPassword =
        (inputName === 'password') ||
        (inputName === 'repeat_password');

    if (isPassword) {
        const passwordLength = checkLength.test(inputValue);

        if (!passwordLength) {
            return 'Password must be at least 8 characters long'
        }

        const passwordChar = checkChar.test(inputValue);

        if (!passwordChar) {
            return 'Password must contain at least one letter'
        }

        const passwordDigit = checkDigit.test(inputValue);

        if (!passwordDigit) {
            return 'Password must contain at least one digit'
        }
    }

    const isEmail = (inputName === 'email');

    if (isEmail) {
        const checkAllEmail = chekEmail.test(inputValue);

        if (!checkAllEmail) {
            return 'Email has invalid characters'
        }
    }

    return '';
}

export default inputValidator;
