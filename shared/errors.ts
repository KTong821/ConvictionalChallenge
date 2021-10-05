export class BaseError {
  public message: string;
  public constructor(error: string) {
    this.message = error;
  }
}
