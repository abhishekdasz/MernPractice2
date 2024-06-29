const Home = async (req, res) => {
    try
    {
        res.status(200).send("Hello World, This is the backend from Router using controller.");
    }
    catch(error)
    {
        console.error("Error");
    }
}

const Register = async (req, res) => {
    try
    {
        res.status(200).send("Hello World, This is the backend Register from Router using controller.");
    }
    catch(error)
    {
        console.error("Error");
    }
}

module.exports = {Home, Register};