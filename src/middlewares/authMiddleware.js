import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Accès non autorisé, token manquant" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;  // Attache les données du token à req.user
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token invalide ou expiré" });
  }
};

export default authMiddleware;