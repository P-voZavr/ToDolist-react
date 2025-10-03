function getAccessToken(): string | null {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
}

export default getAccessToken;
