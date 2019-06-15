import { EmailIdPipe } from './email-id.pipe';

describe('EmailPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailIdPipe();
    expect(pipe).toBeTruthy();
  });
});
