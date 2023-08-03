

const loginForm = (req, res) => {
    res.render('auth/login', {

    });
}

const registrationForm = (req, res) => {
    res.render('auth/registration', {

    });
}

// Only One for file
// export default loginForm

export {
    loginForm,
    registrationForm
}