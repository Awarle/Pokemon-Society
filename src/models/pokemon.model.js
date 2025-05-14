"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllPokemon = exports.getConnection = void 0;
// src/models/pokemon.model.ts
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};
const getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield promise_1.default.createConnection(connectionConfig);
});
exports.getConnection = getConnection;
// Vous pourrez ajouter ici des fonctions CRUD, par exemple :
const findAllPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, exports.getConnection)();
    const [rows] = yield connection.execute("SELECT * FROM pokemon");
    yield connection.end();
    return rows;
});
exports.findAllPokemon = findAllPokemon;
