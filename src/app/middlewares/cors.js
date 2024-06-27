module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://my-contacts-deploy.s3-website-sa-east-1.amazonaws.com');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next()
}
