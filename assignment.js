/* ------------------------------------
Solution to the problem number-1
------------------------------------ */

function seerToMon(seer) {
  //Error validation for Negative value!
  if (seer <= 0) {
    return "Please! Enter a Positive value greater than 0";
  }
  //Error validation for Type!
  else if (typeof seer != "number") {
    return "Please! Enter Numeric value only";
    asa;
  }
  //Calculation of Mon From Seer..
  const perMonToSeer = 40;
  const mon = seer / perMonToSeer;
  return mon;
}

// console.log(seerToMon(400));

/* ------------------------------
Solution to the problem no-2
--------------------------------- */

function totalSales(shirtQuantity, pentQuantity, shoeQuantity) {
  //Error validation for Negative value!
  if (shirtQuantity < 0 || pentQuantity < 0 || shoeQuantity < 0) {
    return "Please! Enter a Positive value";
  }
  //Error validation for Type!
  else if (
    typeof shirtQuantity != "number" ||
    typeof pentQuantity != "number" ||
    typeof shoeQuantity != "number"
  ) {
    return "Please! Enter Numeric value only";
  }
  //Error validation for floating value!
  else if (
    Number.isInteger(shirtQuantity) != true ||
    Number.isInteger(pentQuantity) != true ||
    Number.isInteger(shoeQuantity) != true
  ) {
    return "Please! Enter an Integer value";
  }

  //per product price
  const perShirtPrice = 100;
  const perPentPrice = 200;
  const perShoePrice = 500;
  //calculation of sales per product
  const totalPriceOfShirt = perShirtPrice * shirtQuantity;
  const totalPriceOfPent = perPentPrice * pentQuantity;
  const totalPriceOfShoe = perShoePrice * shoeQuantity;
  //calculation of total sales!
  const totalSalesValue =
    totalPriceOfShirt + totalPriceOfPent + totalPriceOfShoe;

  return totalSalesValue;
}

// console.log(totalSales(1, 1, 1));

/* --------------------------------
   Solution to the problem no-3
-------------------------------- */

function deliveryCost(tShirtQuantity) {
  //Error validation for Negative value!
  if (tShirtQuantity <= 0) {
    return "Please! Enter a Positive value greater than 0";
  }
  //Error validation for Type!
  else if (typeof tShirtQuantity != "number") {
    return "Please! Enter Numeric value only";
  }
  //Error validation for Floating number!
  else if (Number.isInteger(tShirtQuantity) != true) {
    return "Please! Enter an Integer value";
  }
  //per delivery cost at difference term
  const perDeliveryCostOfFirst100 = 100;
  const perDeliveryCostOfSecond100 = 80;
  const perDeliveryCostOfRest = 50;
  //calculation of delivery cost upto 100!
  if (tShirtQuantity <= 100) {
    const first100DeliveryCost = tShirtQuantity * perDeliveryCostOfFirst100;
    return first100DeliveryCost;
  }
  //calculation of delivery cost upto 100!
  else if (tShirtQuantity <= 200) {
    const first100DeliveryCost = 100 * perDeliveryCostOfFirst100;
    const restQuantity = tShirtQuantity - 100;
    const second100DeliveryCost = restQuantity * perDeliveryCostOfSecond100;
    const totalDeliveryCost = first100DeliveryCost + second100DeliveryCost;
    return totalDeliveryCost;
  }
  //calculation of delivery cost above 200!
  else {
    const first100DeliveryCost = 100 * perDeliveryCostOfFirst100;
    const second100DeliveryCost = 100 * perDeliveryCostOfSecond100;
    const restQuantity = tShirtQuantity - 200;
    const restDeliveryCost = restQuantity * perDeliveryCostOfRest;
    const totalDeliveryCost =
      first100DeliveryCost + second100DeliveryCost + restDeliveryCost;
    return totalDeliveryCost;
  }
}

// console.log(deliveryCost(300));

/* ------------------------------
  Solution to the problem- 4
-------------------------------- */

function perfectFriend(Arr) {
  //Error validation for Type...
  if (typeof Arr != "object") {
    return "Please! Enter an Array..";
  }
  //Error validation for Blank Array!!
  else if (Arr.length <= 0) {
    return "Please Enter Some Elements in array, your array is blank!";
  }
  let friend = [];
  for (const element of Arr) {
    //Error validation for String value in array
    if (typeof element != "string") {
      return "Please! Enter String value in array";
    }
    //Main Task!
    else if (element.length == 5) {
      friend = element;
      break;
    }
  }
  return friend;
}
const myFriends = [
  "rafi",
  "safi",
  "ashraful",
  "nakib",
  "sifat",
  "habiba",
  "fahim",
  "ashfaq",
];

const perfectFriendName = perfectFriend(myFriends);
console.log(perfectFriendName);
