import { Test, TestingModule } from '@nestjs/testing';

import { HelloWorldController } from '../hello-world.controller';
import { HelloWorldService } from '../hello-world.service';

describe('HelloWorldController', () => {
  let module: TestingModule;

  let helloWorldController: HelloWorldController;
  let helloWorldService: HelloWorldService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HelloWorldController],
      providers: [HelloWorldService],
    }).compile();

    helloWorldController = module.get<HelloWorldController>(HelloWorldController);
    helloWorldService = module.get<HelloWorldService>(HelloWorldService);
  });

  it('should get a text', () => {
    expect(helloWorldController.send()).toMatch('Hello, World!');
  });
});
