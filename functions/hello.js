exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ // body 부분에는 문자데이터만 들어갈 수 있기에 stringify 사용
      name: 'Malade',
      age: 27,
      email: 'oxywriter@gmail.com'
    })
  }
}