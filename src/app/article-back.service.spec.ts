import { TestBed } from '@angular/core/testing';

import { ArticleBackService } from './article-back.service';

describe('ArticleBackService', () => {
  let service: ArticleBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
