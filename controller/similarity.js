const cosineSimilarity = require('cosine-similarity');

const encodeFeature = (itemFeature, categories) => {
    return categories.map(category => itemFeature === category ? 1 : 0);
};

const shapeCategories = ['circle', 'square', 'triangle']; 
const colorCategories = ['red', 'blue', 'green']; 

const calculateSimilarity = (items, targetItem) => {
    const targetFeatures = [
        ...encodeFeature(targetItem.shape, shapeCategories),
        ...encodeFeature(targetItem.color, colorCategories)
    ];
    
    const similarities = items.map((item) => {
        const itemFeatures = [
            ...encodeFeature(item.shape, shapeCategories),
            ...encodeFeature(item.color, colorCategories)
        ];
        return {
            item,
            similarity: cosineSimilarity(targetFeatures, itemFeatures)
        };
    });

    const threshold = 0.3; 
    return similarities.filter(sim => sim.similarity >= threshold).sort((a, b) => b.similarity - a.similarity);
};

module.exports = calculateSimilarity;
