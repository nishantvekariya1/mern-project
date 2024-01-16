const home = async (req, res) => {
  try {
    res.status(200).send("Hello From the Home Page");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Hello From the Register Page");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    res.status(200).send("Hello From the Login Page");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login };
