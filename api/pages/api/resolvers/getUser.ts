export const getUser = async (_: unknown, {name}) => {
  const response = await fetch(`https://api.github.com/users/${name}`)

  const {
    avatar_url: avatarUrl,
    id,
    login
  } = await response.json()

  return {
    avatarUrl,
    id,
    login,
    name: null
  }
}
