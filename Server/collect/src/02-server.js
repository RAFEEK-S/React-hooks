const http = require('http')

const querystring = require('querystring')

const port = process.env.PORT || 7777

//req.url - It will always contain the full path of the client request
//Routing - All client requests are not same, we should respond differently 
//           based on the requested url path
const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/Text') return respondText(req, res)

  if (req.url === '/add') return respondadd(req, res)

  if (req.url === '/mul') return respondmul(req, res)

  if (req.url === '/json') return respondJson(req, res)

  if (req.url.match(/^\/dr/)) return respondDymanicResponse(req, res)

  // if (req.url.match(/^\/dr/)) return respondDymanicResponse(req, res)

  respondNotFound(req, res)
})

server.listen(port);

console.log(`Server listening on port ${port}`);


function respondText(req, res) {
    let a=10;
    let b=10;
    let sum=a+b;

    // res.setHeader('Content-type', 'text/plain')
    res.end({sum})
}

function respondadd(req, res) {
    const a=10;
    const b=10;
    const sum1=a-b;
    res.setHeader('Content-type', 'text/plain')
    res.end('sum: ${sum1}')
}

function respondmul(req, res) {
    const a=10;
    const b=10;
    const sum2=a*b;

    res.setHeader('Content-type', 'text/plain')
    res.end('hi')
}

function respondDymanicResponse(req, res) {
  const {inputA = ''} = querystring.parse(
    req.url
    .split('?')
    .slice(1)
    .join('')
      )
  const {inputB = ''} = querystring.parse(
        req.url
        .split('?')
        .slice(1)
        .join('')

      )

console.log(input)
console.log(inputB)
res.setHeader('Content-Type', 'application/json')
res.end(
  JSON.stringify({
  input1:inputA,
  input2:inputB,
  sum:Number(inputA)+Number(inputB),

   
  })
)
}

