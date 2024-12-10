const mongoose = require('mongoose');//
const bcrypt = require('bcryptjs');//

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);
//.model('User', UserSchema) creates a Mongoose model for interacting with the users collection in the database.
/*'User':
The name of the model. It also determines the name of the collection in the MongoDB database:

Mongoose automatically converts the model name User to the plural, lowercase collection name: "users".
So, documents will be stored in the users collection.*/
