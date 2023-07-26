const controller = require("./controller/controller");
const mongoose = require('mongoose');
const app = require('express')();
const PORT = 3000;

// Connection String
mongoose.connect('mongodb+srv://believe0256:wU2dwn5RwHFePLT1@project-cluster.bounugu.mongodb.net/taskDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
