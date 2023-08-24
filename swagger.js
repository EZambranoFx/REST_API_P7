const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_pedido.js']

swaggerAutogen(outputFile, endpointsFiles)

