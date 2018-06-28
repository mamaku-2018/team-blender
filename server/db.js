module.exports = {
  getPeeps
}

function getPeeps () {
  const Peeps = ['Michael', 'Shane', 'Caitlyn, Rachael, Sam']
  return Promise.resolve(Peeps)
}
