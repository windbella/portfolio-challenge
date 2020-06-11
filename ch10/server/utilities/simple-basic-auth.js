module.exports = function auth(user, password) {
    return (req, res, next) => {
        if (req.method === 'GET') {
            next();
        } else {
            const authorization = req.headers.authorization || '';
            const [, encodedToken] = authorization.match(/Basic (.+)/i) || ['', ''];
            const [, decodedUser, decodedPassword] = Buffer.from(encodedToken, 'base64').toString().match(/(.+):(.+)/) || [];
            if (user === decodedUser && password === decodedPassword) {
                next();
            } else {
                res.set('WWW-Authenticate', 'Basic');
                res.sendStatus(401);
            }
        }
    };
};
