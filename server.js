const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello! CI/CD Pipeline is working 🚀');
});

const PORT = 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;