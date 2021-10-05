export interface BaseUseCase<Response> {
  // execute(): Promise<Response>;
  execute(id?: string): Promise<Response>;
}
