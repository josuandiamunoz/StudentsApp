const TEST_USER = {
    email: 'admin@studentsapp.com',
    password: '123456'
}

exports.login = async ({email, password}) => {
    if (email === TEST_USER.email && password === TEST_USER.password) {
        return { email };
    }
    else {
        throw new Error('Invalid email or password');
    }
}