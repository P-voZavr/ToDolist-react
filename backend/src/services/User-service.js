import User from "../models/User-model.js";
import Token from "../models/Token-model.js";
import bcrypt from "bcrypt";
import {
  genereteTokens,
  saveToken,
  findToken,
  validateRefreshToken,
} from "../services/Token-service.js";

async function register(username, password) {
  try {
    if (await User.findOne({ username })) {
      throw new Error("User already exists");
    }
    const hashpassword = await bcrypt.hash(password, 4);
    const user = await User.create({ username, password: hashpassword });
    const { accessToken, refreshToken } = genereteTokens(user._id);

    await saveToken(user._id, refreshToken);
    return { user: user, accessToken, refreshToken };
  } catch (error) {
    console.log(error);
  }
}

async function login(username, password) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }

    const { accessToken, refreshToken } = genereteTokens(user._id);

    await saveToken(user._id, refreshToken);
    return { user: user, accessToken, refreshToken };
  } catch (error) {
    console.log(error);
  }
}

async function logout(refreshToken) {
  try {
    await Token.findOneAndDelete({ refreshToken });
  } catch (error) {
    console.log(error);
  }
}

async function refresh(RefreshToken) {
  try {
    if (!validateRefreshToken(RefreshToken)) {
      throw new Error("Invalid refresh token");
    }
    const token = await findToken(RefreshToken);
    const { accessToken, refreshToken } = genereteTokens(token.userid);
    token.refreshToken = refreshToken;
    await token.save();
    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
  }
}

export { register, login, logout, refresh };
