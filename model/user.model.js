module.exports = (sequilize, Sequilize) => {
    const User = sequilize.define('users', {
        name: {
            type: Sequilize.String
        },
        username: {
            type:Sequilize.String
        },
        email: {
            type: Sequilize.String
        },
        password: {
            type: Sequilize.String
        }
    });
    return User;
}