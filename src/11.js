const http = require('http');
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Math Problems</title>
        </head>
        <body>
          <h1>Math Problems</h1>
          <p>Solve the math problems below:</p>
          <ul>
            <li><a href="/problem-1">Problem 1</a></li>
            <li><a href="/problem-2">Problem 2</a></li>
            <li><a href="/problem-3">Problem 3</a></li>
          </ul>
        </body>
      </html>`);
  } else if (req.url === '/problem-1') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Math Problem 1</title>
        </head>
        <body>
          <h1>Math Problem 1</h1>
          <p>What is the value of x in the equation:</p>
          <p><strong>3x + 5 = 20</strong></p>
          <form action="/problem-1" method="post">
            <label for="answer">Your Answer:</label>
            <input type="text" id="answer" name="answer"><br>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>`);
  } else if (req.url === '/problem-2') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Math Problem 2</title>
        </head>
        <body>
          <h1>Math Problem 2</h1>
          <p>What is the value of y in the equation:</p>
          <p><strong>y = mx + b, where m = 2 and b = 3</strong></p>
          <form action="/problem-2" method="post">
            <label for="answer">Your Answer:</label>
            <input type="text" id="answer" name="answer"><br>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>`);
  } else if (req.url === '/problem-3') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Math Problem 3</title>
        </head>
        <body>
          <h1>Math Problem 3</h1>
          <p>What is the value of z in the equation:</p>
          <p><strong>z = (x + y) / 2, where x = 4 and y = 5</strong></p>
          <form action="/problem-3" method="post">
            <label for="answer">Your Answer:</label>
            <input type="text" id="answer" name="answer"><br>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>`);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>404 Not Found</title>
        </head>
        <body>
          <h1>404 Not Found</h1>
          <p>The page you requested could not be found.</p>
        </body>
      </html>`);
  }
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
