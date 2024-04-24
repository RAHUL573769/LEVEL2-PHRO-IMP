"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { userRoutes } from './routes/user.route'
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
// import { tourRoutes } from './routes/tour.route'
// import { reviewRoutes } from './routes/review.route'
// import { globalRouter } from './routes'
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/', routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to  Murir Tin Tours & Travels',
    });
});
//trying to catch not found route
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'success',
        message: `Website Not Found for ${req.originalUrl}`,
    });
});
//trying to catch not found route
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err, req, res, next) => {
    const statusCode = err.statusCode();
    const statusMessage = 'Failed';
    res.status(statusCode).json({
        status: statusMessage,
        message: 'Something went wrong',
    });
    next();
});
exports.default = app;
