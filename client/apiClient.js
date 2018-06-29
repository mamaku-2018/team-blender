import request from 'superagent'

export function fetchPeople () {
  return request.get('/v1/students')
    .then(res => {
      console.log(res)
      const students = res.body
      return students
    })
}
