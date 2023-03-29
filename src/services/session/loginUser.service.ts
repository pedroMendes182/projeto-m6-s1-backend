import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUserService = async (data: string) => {
  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: data,
    expiresIn: "24h",
  });

  return token;
};

export default loginUserService;
