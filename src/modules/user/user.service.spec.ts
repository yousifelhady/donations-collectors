import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const user = service.create('Alice');
    expect(user).toEqual({ id: 1, name: 'Alice' });
  });

  it('should return all users', () => {
    service.create('Bob');
    expect(service.findAll()).toEqual([{ id: 1, name: 'Bob' }]);
  });

  it('should return a user by id', () => {
    service.create('Charlie');
    expect(service.findOne(1)).toEqual({ id: 1, name: 'Charlie' });
  });

  it('should update a user', () => {
    service.create('Dave');
    const updated = service.update(1, 'David');
    expect(updated).toEqual({ id: 1, name: 'David' });
  });

  it('should remove a user', () => {
    service.create('Eve');
    expect(service.remove(1)).toBe(true);
    expect(service.findAll()).toEqual([]);
  });

  it('should return undefined for non-existent user', () => {
    expect(service.findOne(999)).toBeUndefined();
    expect(service.update(999, 'Ghost')).toBeUndefined();
    expect(service.remove(999)).toBe(false);
  });
});
