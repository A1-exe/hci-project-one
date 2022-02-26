// --> DEPENDENCIES <--
const express = require('express');
const path = require('path');

// --> SERVER INITIALIZATION <--
const college = express()

// --> LOAD ROUTERS <--
college.enable('trust proxy');
college.set('port', (process.env.PORT || 5000))
college.use(express.json())

// --> HANDLE ENDPOINTS <--
college.use('/assets', express.static(path.join(__dirname, 'assets')));
college.get('/', (req, res) => {
  // Serve cart as homepage (for now)
  res.sendFile(path.join(__dirname, '/cart/'))
})


// --> NOTIFY STARTUP <--
college.listen(college.get('port'), () => {
  console.log('Node app is running at localhost:' + college.get('port'))
})