module.exports = {
    getAllCharacters: (req, res) => {
        const db = req.app.get('db')
        db.get_all_characters()
        .then(characters => res.status(200).send(characters))
        .catch(err => res.status(500).send(err))
    },
    getCharacter: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.get_character(id)
        .then(character => res.status(200).send(character))
        .catch(err => res.status(500).send(err))
    },
    addCharacter: (req, res) => {
        const character = {...req.body}
        const db = req.app.get('db')
        db.add_character(character)
        .then(character => res.status(200).send(character))
        .catch(err => res.status(500).send(err))
    },
    editCharacter: (req, res) => {
        const {id} = req.params
        const {name, image} = req.body
        const db = req.app.get('db')
        db.edit_character(id, name, image)
        .then(character => res.status(200).send(character))
        .catch(err => res.status(500).send(err))
    },
    deleteCharacter: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_character(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}
