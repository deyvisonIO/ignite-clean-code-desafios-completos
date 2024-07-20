// Nomenclatura de variáveis

const userPossibleCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserWithCategory(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubUserResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubUserResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUser = await githubUserResponse.json()

  const usersSortedByNumberOfFollowers = userPossibleCategories.sort((a, b) => b.followers - a.followers);

  const category = usersSortedByNumberOfFollowers.find(i => githubUser.followers > i.followers)

  const categorizedUser = {
    githubUsername,
    category: category.title
  }

  return categorizedUser;
}

getUserWithCategory({
  query: {
    username: 'josepholiveira'
  }
}, {})
