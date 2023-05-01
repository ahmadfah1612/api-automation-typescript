// src/userTest.ts
import { expect } from 'chai';
import ApiClient from './apiClient';
import { createUserTestData } from './userTestData';

describe('User API tests', () => {
  const apiClient = ApiClient.getInstance();

  createUserTestData.forEach((data) => {
    it(`should create a user with name "${data.name}" and job "${data.job}"`, async () => {
      const response = await apiClient.createUser(data.name, data.job);
      expect(response.name).to.equal(data.name);
      expect(response.job).to.equal(data.job);
    });
  });

  it('should get user with id 2', async () => {
    const response = await apiClient.getUser(2);
    expect(response).to.have.property('data');
    expect(response.data).to.have.property('id', 2);
  });

  it('should create a new user', async () => {
    const response = await apiClient.createUser('morpheus', 'leader');
    expect(response).to.have.property('name', 'morpheus');
    expect(response).to.have.property('job', 'leader');
    expect(response).to.have.property('id');
    expect(response).to.have.property('createdAt');
  });
});