import { data, menData, womenData, kidsData } from "../..//utils/data.js";
import { createElementRepo } from "../..//utils/domUtils.js";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
const headerData = data.slice(0, 5);
console.log(headerData);
console.log(menData);
console.log(womenData);
console.log(kidsData);
