"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
let max = lodash_1.default.max([1, 3, 5, 6, 8, 9]); //가장 큰 값 반환
let shuffledArray = lodash_1.default.shuffle([12, 4, 2, 6, 33]); //배열의 순서를 섞음
console.log(max);
console.log(shuffledArray);
