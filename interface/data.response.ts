export interface IDataResponse<Type> {
    data: Type;
    message: string;
    statusCode: number;
}
