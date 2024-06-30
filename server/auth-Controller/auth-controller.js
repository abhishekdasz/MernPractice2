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
        console.log(req.body);
        res.status(200).json(req.body);
    }
    catch(error)
    {
        res.status(400).json("Internal server error.");
        console.error("Error");
    }
}

module.exports = {Home, Register};