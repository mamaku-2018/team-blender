import request from 'superagent'


export function fetchPeople () {
  return request.get('/results')
    .then(data => {
      const people = data.body
      
    })
}
