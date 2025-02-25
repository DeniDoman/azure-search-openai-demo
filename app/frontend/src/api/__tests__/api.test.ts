// Initialize mock state
let mockUseLogin = false;
let mockIsUsingAppServicesLogin = false;

// Mock the authConfig module
jest.doMock('../../authConfig', () => ({
    get useLogin() {
        return mockUseLogin;
    },
    get isUsingAppServicesLogin() {
        return mockIsUsingAppServicesLogin;
    }
}));

// Import after mock is set up
import { getHeaders } from '../api';

describe('getHeaders', () => {
    const mockIdToken = 'test-token-123';

    beforeEach(() => {
        // Reset all mocks before each test
        jest.clearAllMocks();
        // Reset mock values
        mockUseLogin = false;
        mockIsUsingAppServicesLogin = false;
    });

    it('should return empty object when useLogin is false', async () => {
        mockUseLogin = false;
        mockIsUsingAppServicesLogin = false;

        const headers = await getHeaders(mockIdToken);
        expect(headers).toEqual({});
    });

    it('should return Authorization header when useLogin is true and not using app services', async () => {
        mockUseLogin = true;
        mockIsUsingAppServicesLogin = false;

        const headers = await getHeaders(mockIdToken);
        expect(headers).toEqual({
            Authorization: `Bearer ${mockIdToken}`
        });
    });

    it('should return empty object when using app services login', async () => {
        mockUseLogin = true;
        mockIsUsingAppServicesLogin = true;

        const headers = await getHeaders(mockIdToken);
        expect(headers).toEqual({});
    });

    it('should return empty object when idToken is undefined', async () => {
        mockUseLogin = true;
        mockIsUsingAppServicesLogin = false;

        const headers = await getHeaders(undefined);
        expect(headers).toEqual({});
    });
});
