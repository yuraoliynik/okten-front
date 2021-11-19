function passwordValidator(password, repeat_password) {
    const substringPasswords = password.substring(0, repeat_password.length);

    if (substringPasswords === repeat_password) {
        return;
    }

    return 'Passwords do not match';
}

export default passwordValidator;
