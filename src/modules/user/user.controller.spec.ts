import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    controller.createUser('Alice', res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({ id: 1, name: 'Alice' });
  });

  it('should return all users', () => {
    service.create('Bob');
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    controller.findAll(res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith([{ id: 1, name: 'Bob' }]);
  });

  it('should return a user by id', () => {
    service.create('Charlie');
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    controller.findOne('1', res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ id: 1, name: 'Charlie' });
  });

  it('should update a user', () => {
    service.create('Dave');
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    controller.update('1', 'David', res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ id: 1, name: 'David' });
  });

  it('should delete a user', () => {
    service.create('Eve');
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    controller.remove('1', res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalledWith();
  });
});
