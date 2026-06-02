module.exports = (req, res) => {

    if (req.method === "POST") {

        console.log(req.body);

        return res.status(200).json({
            success: true
        });
    }

    return res.status(405).json({
        error: "Method not allowed"
    });
};