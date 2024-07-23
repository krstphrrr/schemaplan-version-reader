"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCSVFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const findCSVFile = (path) => {
    var _a, _b, _c;
    if (!fs_1.default.existsSync(path)) {
        console.log("no dir ", path);
        return;
    }
    let vers;
    let files = fs_1.default.readdirSync(path);
    let pattern = /(?<path>([a-zA-Z]*(\\|\/|))*)(?<prefix>([a-zA-Z]*(-)))(?<version>(\d+.\d+.\d+))(?<extension>(.*))/;
    for (let i = 0; i < files.length; i++) {
        let filename = (0, path_1.join)(path, files[i]);
        if (filename) {
            if ((_a = filename.match(pattern)) === null || _a === void 0 ? void 0 : _a.groups) {
                vers = (_c = (_b = filename.match(pattern)) === null || _b === void 0 ? void 0 : _b.groups) === null || _c === void 0 ? void 0 : _c.version;
            }
        }
    }
    return vers;
};
exports.findCSVFile = findCSVFile;
