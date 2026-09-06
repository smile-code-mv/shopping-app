import useRandom from './useRandom.ts'
const useSource = () => {
  const random = useRandom()

  const names = ['banana','mango','apple','orange']

  let name = names[random.randomProduct]
  let index = random.randomIndex
  let image = `/${name}${index}.jpg`

  return { name , index , image }

}

export default Source
