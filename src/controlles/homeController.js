module.exports = {
    index(req, res) {
        let msg = "Estou dentro do index/index";
        return res.json(msg);
    },

    view(req, res) {
        let msg = "Estou dentro da view";
        return res.json(msg);
    }
};