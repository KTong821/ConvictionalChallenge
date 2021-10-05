export interface BaseUseCase<Response> {
    execute(id?: string): Promise<Response>;
}
