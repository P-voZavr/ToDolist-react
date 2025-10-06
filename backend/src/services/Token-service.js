import jwt from "jsonwebtoken";
import Token from "../models/Token-model.js";

function genereteTokens(id) {
  const accessToken = jwt.sign({ id }, process.env.ACCESS_SECRET, {
    expiresIn: "30m",
  });

  const refreshToken = jwt.sign({ id }, process.env.REFRESH_SECRET, {
    expiresIn: "15d",
  });

  return { accessToken, refreshToken };
}

async function saveToken(userid, refreshToken) {
  const tokenData = await Token.findOne({ userid });
  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return tokenData.save();
  }
  return Token.create({ userid, refreshToken });
}

async function findToken(refreshToken) {
  const token = await Token.findOne({ refreshToken });
  return token;
}

async function validateAccessToken(token) {
  try {
    const userData = jwt.verify(token, process.env.ACCESS_SECRET);
    return userData;
  } catch (error) {
    return null;
  }
}

async function validateRefreshToken(token) {
  try {
    const userData = jwt.verify(token, process.env.REFRESH_SECRET);
    return userData;
  } catch (error) {
    return null;
  }
}

async function updateRefreshToken(refreshToken) {
  const token = await findToken(refreshToken);
  token.refreshToken = refreshToken;
  return token.save();
}

export {
  genereteTokens,
  saveToken,
  findToken,
  validateAccessToken,
  validateRefreshToken,
  updateRefreshToken,
};
