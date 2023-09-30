import { Test, TestingModule } from '@nestjs/testing';
import { ResetpasswordController } from './resetpassword.controller';

describe('ResetpasswordController', () => {
  let controller: ResetpasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResetpasswordController],
    }).compile();

    controller = module.get<ResetpasswordController>(ResetpasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
