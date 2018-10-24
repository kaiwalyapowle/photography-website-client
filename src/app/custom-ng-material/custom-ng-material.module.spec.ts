import { CustomNgMaterialModule } from './custom-ng-material.module';

describe('CustomNgMaterialModule', () => {
  let customNgMaterialModule: CustomNgMaterialModule;

  beforeEach(() => {
    customNgMaterialModule = new CustomNgMaterialModule();
  });

  it('should create an instance', () => {
    expect(customNgMaterialModule).toBeTruthy();
  });
});
