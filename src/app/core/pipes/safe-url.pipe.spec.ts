import { SafeUrlPipe } from './safe-url.pipe';
import {TestBed, inject} from "@angular/core/testing";
import {DomSanitizer} from "@angular/platform-browser";

describe('SafeUrlPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer]
    });
  });
  it('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new SafeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));
});
