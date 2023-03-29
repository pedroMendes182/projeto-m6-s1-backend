import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/users.interface";

const loginUserService = async (data: IUserLogin) => {
  const token = jwt.sign(
    {
      isActive: data.isActive,
    },
    process.env.SECRET_KEY,
    {
      subject: data.id,
      expiresIn: "24h",
    }
  );

  return token;
};

export default loginUserService;
