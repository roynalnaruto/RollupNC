const treeHelper = require("./treeHelper.js");
const {stringifyBigInts, unstringifyBigInts} = require('../src/stringifybigint.js')


const leaf = "5006558030089044989859996439040629072216186239090482295404137683931931291089";
const path = unstringifyBigInts(
    [
    "8400602295373547034824451810958993836468351338544322693826438452534955347122",
    "21583299871292629928390321792408769287872045519377446060277114792598820924696",
    "10153966452256817462802228695352791521111189653061705332718922061984071620050",
    "5203728862112155926172295673679403618196573492047777527639765651888130661887"
    ]
)
const root = treeHelper.rootFromLeafAndPath(leaf, 4, path)
console.log(root)

// try to reproduce: 
// 5853593421416813187387050086018929985881430924670046961192564740207096687837