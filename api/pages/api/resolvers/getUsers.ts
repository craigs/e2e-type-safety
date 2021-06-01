export const getUsers = async () => {
  const response = await fetch('https://api.github.com/users')
  const users = await response.json()

  return users.map(({ avatar_url: avatarUrl, id, login }) => ({
    avatarUrl,
    id,
    login,
    name: null
  }))
}
