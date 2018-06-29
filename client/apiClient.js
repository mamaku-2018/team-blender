import request from 'superagent'

export function addStudent (student) {
  return request.post('/v1/students/insert')
    .send({name: student})
    .then(res => {
      const newStudent = res.body
      return newStudent
    })
    .catch(err => {
      throw new Error('Red alert! Try again!', err.message)
    })
}
