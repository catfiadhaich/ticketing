import { CustomError } from "./CustomError";

export class DatabaseConnectionError extends CustomError {

    reason = 'Database connection error';
    statusCode = 500;
    
    constructor() {
    
        super('Error connecting to DB');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}