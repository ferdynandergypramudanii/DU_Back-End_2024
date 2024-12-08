const post = require("../post.json");
const fs = require('fs')

// get all users
exports.getAllUsers = (req, res, next) => {
  res.status(200).json(post);
};

// get user by id
exports.getUserById = (req, res, next) => {
  const postById = post.find((i) => i.id === +req.params.id);
  res.status(200).json(postById);
};

// add new user
exports.addUser = (req, res, next) => {
  const { name, age } = req.body;

  const id = post[post.length - 1].id + 1;
  const newUser = { id, name, age };

  post.push(newUser);

  fs.writeFileSync('./post.json', JSON.stringify(post, null, 2));

  res.status(201).json({
    status: "success",
    code: 201,
    newUser,
  });
};

// update user by id
exports.updateUser = (req, res, next) => {
  const { id } = req.params; 
  const { name, age } = req.body;

  // Cari user berdasarkan id
  const user = post.find((i) => i.id === +id); 

  // Periksa jika ID tidak ditemukan
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update data user jika diberikan
  if (name) user.name = name;
  if (age) user.age = age;

  // Simpan perubahan ke file JSON
  try {
    fs.writeFileSync("./post.json", JSON.stringify(post, null, 2));
    res.status(200).json({
      status: "success",
      code: 200,
      updatedUser: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user data", error });
  }
};

// delete user by id
exports.deleteUser = (req, res, next) => {
  const { id } = req.params;

  // Cari user berdasarkan id
  const user = post.find((i) => i.id === +id);

  // Periksa jika user tidak ditemukan
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Cari index user di array berdasarkan referensi user yang ditemukan
  const userIndex = post.indexOf(user);

  // Hapus user dari array
  const deletedUser = post.splice(userIndex, 1)[0];

  // Simpan perubahan ke file JSON
  try {
    fs.writeFileSync("./post.json", JSON.stringify(post, null, 2));
    res.status(200).json({
      status: "success",
      code: 200,
      deletedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user data", error });
  }
};

