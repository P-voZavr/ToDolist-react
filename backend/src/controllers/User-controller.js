import {
  register,
  login as serviceLogin,
  logout as servicelogot,
  refresh as serviceRefresh,
} from "../services/User-service.js";

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

export { registration, login, logout, refresh };
