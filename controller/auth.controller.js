const authGoogle = async (req, res) => {
  res.json({
    msg: `Autenticancion de google`,
  });
};

module.exports = {
  authGoogle,
};
