export default class ApiController {
  public async get(): Promise<string> {
    console.log('hogehoge');
    return 'fuga';
  }
}
