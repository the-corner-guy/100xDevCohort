/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let Cat = transactions.map(a => a["category"])
  const uniqueCat = [... new Set(Cat)]
  // console.log(uniqueCat)
   let cost = []

  if(uniqueCat.length > 0 && transactions.length > 0){
       for( i=0; i < uniqueCat.length; i++){
           let costEach = 0
           for( j=0; j< transactions.length; j++ ){
               if( transactions[j].category == uniqueCat[i])
               costEach = costEach + transactions[j].price
           }
           cost.push({ category: uniqueCat[i], totalSpent: costEach })
       }

  }
  return cost
 }

module.exports = calculateTotalSpentByCategory;
