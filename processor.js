function processor(transmission) {
    const pattern = /^<\d*>$/g;
    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
    }
    let parts = transmission.split("::");
    let id = parts[0];
    let rawData = parts[1];
    if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">") {
        return -1;
    }
    if(!pattern.test(rawData)){
        return -1;
    }
    if(isNaN(id)) {
        return -1;
    }
    return {
        id: Number(id),
        rawData: rawData
    };
}

module.exports = processor;