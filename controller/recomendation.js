const Item = require('../model/Items')
const calculateSimilarity = require('../controller/similarity')


const recommendationSystem = async (req,res)=>{
    try {
        const {itemId} = req.params
        const targetItem = await Item.findById(itemId)
        if (!targetItem) {
            return res.status(404).send('Item not found')
           
        }
        const items = await Item.find({ _id: { $ne: targetItem._id} });
        const recommendations = calculateSimilarity(items, targetItem).map((i) =>i.item);
        res.json(recommendations)

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports= {recommendationSystem}