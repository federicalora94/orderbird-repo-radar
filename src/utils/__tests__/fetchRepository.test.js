require('dotenv').config();
import { fetchRepository, calculatePopularity, isPopular } from '../fetchRepository';

// Mocking the fetch API
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ stars: 100, forks: 50 }),
    })
);

describe('Utility Functions', () => {
    const token = process.env.REACT_APP_GITHUB_API_TOKEN;

    // Clear all instances and calls to constructor and all methods:
    afterEach(() => {
        global.fetch.mockClear();
    });

    // Testing fetchRepository with multiple repository names
    describe.each([
        'opencart/opencart',
        'cncf/tag-contributor-strategy',
        'facebook/react'
    ])('fetchRepository for repo %s', (repoName) => {
        it(`fetches data from GitHub API for ${repoName}`, async () => {
            global.fetch.mockResolvedValueOnce({
                json: async () => ({ stars: 100, forks: 50 }),
            });

            const result = await fetchRepository(repoName, token);
            expect(result).toEqual({ stars: 100, forks: 50 });
        });
    });

    // Testing calculatePopularity
    describe('calculatePopularity', () => {
        it('should calculate the popularity score based on stars and forks', () => {
            expect(calculatePopularity(100, 50)).toBe(200);
        });
    });

    // Testing isPopular
    describe('isPopular', () => {
        it('should return true if the score is above a certain threshold', () => {
            expect(isPopular(600)).toBe(true);
        });

        it('should return false if the score is below a certain threshold', () => {
            expect(isPopular(400)).toBe(false);
        });
    });
});
