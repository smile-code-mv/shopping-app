const Source = () => {
  const names = ['banana','mango','apple','orange']
  const random = (start : number, end : number) : number => Math.floor(Math.random() * (end - start + 1)) + start

  function randomProduct() {
    return random(1,4)
  }
  function randomIndex(){
    return random(1,3)
  }
}

export default Source
