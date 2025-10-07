import {
  register,
  login as serviceLogin,
  logout as servicelogot,
  refresh as serviceRefresh,
  validateToken,
  deleteAccount as serviceDeleteAccount,
} from "../services/User-service.js";

import { validateAccessToken } from "../services/Token-service.js";

async function registration(req, res) {
  try {
    const { username, password } = req.body;
    const user = await register(username, password);

    res.cookie("refreshToken", user.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).send("User already exists");
    }
  } catch (e) {
    console.log(e);
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await serviceLogin(username, password);
    res.cookie("refreshToken", user.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    if (user) {
      res.status(201).json(user);
    }
  } catch (e) {
    throw e;
  }
}

async function logout(req, res) {
  try {
    const { refreshToken } = req.cookies;
    await servicelogot(refreshToken);
    res.clearCookie("refreshToken");
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
}

async function deleteAccount(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const userData_id = await validateAccessToken(token);
    if (!userData_id) {
      return res.status(401).json({ message: "Invalid token" });
    }
    serviceDeleteAccount(userData_id.id, req.cookies.refreshToken);
    res.clearCookie("refreshToken");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
}

async function refresh(req, res) {
  try {
    const { refreshToken } = req.cookies;
    const newtokens = await serviceRefresh(refreshToken);
    res.cookie("refreshToken", newtokens.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json(newtokens);
  } catch (e) {
    console.log(e);
  }
}

async function validation(req, res) {
  try {
    if (!req.cookies.refreshToken) {
      return res.status(200).json(false);
    }
    const valid = await validateToken(req.cookies.refreshToken);
    res.status(200).json(valid);
  } catch (error) {
    console.log(error);
  }
}

export { registration, login, logout, refresh, validation, deleteAccount };
