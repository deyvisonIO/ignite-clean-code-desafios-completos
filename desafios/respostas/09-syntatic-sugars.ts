function getFirstFiveRatings(ratings) {
  const areThereAtLeastFiveRatings =  ratings.length >= 5;
  if(!areThereAtLeastFiveRatings) {
    return false
  }

  const firstFiveRatings = ratings.slice(0, 5);

  return firstFiveRatings;

}

function sumFirstFiveRatings(ratings) {
  const doesRatingsExist = Boolean(ratings);

  if (doesRatingsExist) {

    const firstFiveRatings = getFirstFiveRatings(ratings)

    if (!firstFiveRatings) return { error: 'there must be at least 5 ratings' }

    let ratingsSum = 0;

    for (const rating of firstFiveRatings) {
      ratingsSum += parseInt(rating)
    }

    return { ratingsSum, created_at: Number(new Date()) }
  }

  return { error: 'ratings is required' }
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatings)
