const roleMiddleware = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: "Accès refusé. Rôle insuffisant." });
      }
      next();
    };
  };
  
  export default roleMiddleware;