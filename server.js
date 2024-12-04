require('dotenv').config();
const http = require('http');
const app = require('./index');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// Crear servidor HTTP y pasar la aplicación Express
const server = http.createServer(app);

// Escuchar en el puerto especificado en las variables de entorno
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);

    /**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
// propertyId = 'YOUR-GA4-PROPERTY-ID';

// Imports the Google Analytics Data API client library.
const {BetaAnalyticsDataClient} = require('@google-analytics/data');

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();
const client = new BetaAnalyticsDataClient({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
})
// Define tu Google Analytics 4 property ID aquí
const propertyId = '464855214';  // Reemplaza 'YOUR-GA4-PROPERTY-ID' por tu ID real



// Runs a simple report.
async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '2020-03-31',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'city',
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  });

  console.log('Report result:');
  response.rows.forEach(row => {
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });
}

runReport();
});

