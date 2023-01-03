const Money = require('../model/moneySchema');



const createMoney = async (req, res) => {
    try {
        const usd = req.body.usd
        const inr = req.body.inr
        const sender_name = req.body.sender_name
        const receiver_name = req.body.receiver_name
        const purpose = req.body.purpose


        let money = new Money({ usd, inr, sender_name, receiver_name, purpose })



        const newMoney = await money.save()
        console.log(newMoney)

        res.status(500).json({ message: 'please fill all details' })
        console.log('please fill all details')

        res.status(200).json({
            message: 'data suceessfully recived',
            data: newMoney

        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }


};

module.exports = { createMoney }