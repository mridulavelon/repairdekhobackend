import { Test, TestingModule } from '@nestjs/testing';
import { AccountdetailsController } from './accountdetails.controller';

describe('AccountdetailsController', () => {
  let controller: AccountdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountdetailsController],
    }).compile();

    controller = module.get<AccountdetailsController>(AccountdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
