export default function login(req, res) {
    const {email, password } = req.body.email;

    res.status(200).json({ email, password});
}
