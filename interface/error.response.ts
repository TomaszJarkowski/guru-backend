export interface IErrorResponse {
    statusCode: number;
    message: string;
    errors?: never[];
}
