const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5000;

const mongoURI = 'mongodb+srv://dhinaashwin11:MongoDBpassword@cluster-1.golhm.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster-1';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
