import jwt from "jsonwebtoken";

const SECRET = "netculture-secret-key";

export function createToken(payload) {
  return jwt.sign(payload, SECRET, {
    expiresIn: "7d"
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}