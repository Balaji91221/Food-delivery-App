import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ success: false, message: "Not Authorized! Login Again" });
    }

    const token = authHeader.split(' ')[1]; // Assuming the token is prefixed with "Bearer "

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware;
